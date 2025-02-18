import React, { useEffect, useState } from "react";
import "./styles/Dashboard.css";
import Header from './Header'; //yeh hai sirr
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [startups, setStartups] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [graphData, setGraphData] = useState({});
  const [filter, setFilter] = useState(""); // For filtering startups

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const startupsResponse = await fetch("/api/startups");
        const startupsData = await startupsResponse.json();
        setStartups(startupsData);

        const analyticsResponse = await fetch("/api/analytics");
        const analyticsData = await analyticsResponse.json();
        setAnalytics(analyticsData);

        const graphResponse = await fetch("/api/graphs");
        const graphData = await graphResponse.json();
        setGraphData(graphData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Filtered startups
  const filteredStartups = startups.filter((startup) =>
    filter ? startup.category === filter : true
  );

  return (
    <div className="dashboard-container mt-32">
     <Header/>
      <header className="dashboard-header">
        <h1>Explore Startups</h1>
        <p>Discover the thriving startup ecosystem on our platform.</p>
      </header>

      {/* Real-time Updates Section */}
      <section className="real-time">
        <h2>Live Updates</h2>
        <p>Real-time information about startups and user activity.</p>
      </section>

      {/* Analytics Section */}
      <section className="analytics">
        <h2>Platform Insights</h2>
        <div className="analytics-cards">
          <div className="card">
            <h3>Total Startups</h3>
            <p>{analytics.totalStartups || 0}</p>
          </div>
          <div className="card">
            <h3>Industries Covered</h3>
            <p>{analytics.totalIndustries || 0}</p>
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>{analytics.activeUsers || 0}</p>
          </div>
        </div>
      </section>

      {/* Startup List with Filters */}
      <section className="startup-list">
        <h2>Registered Startups</h2>
        <div className="filters">
          <label>
            Filter by Category:
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Tech">Tech</option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
            </select>
          </label>
        </div>
        <div className="startup-cards">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="startup-card">
              <h3>{startup.name}</h3>
              <p>
                <strong>Industry:</strong> {startup.industry}
              </p>
              <p>{startup.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Graphs */}
      <section className="graphs">
        <h2>Startup Analytics</h2>
        <div className="graph-container">
          <div className="bar-graph">
            <h3>Registrations Over Time</h3>
            <Bar
              data={{
                labels: graphData.months || [],
                datasets: [
                  {
                    label: "Startups",
                    data: graphData.registrations || [],
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                  },
                ],
              }}
            />
          </div>
          <div className="pie-chart">
            <h3>Industry Distribution</h3>
            <Pie
              data={{
                labels: graphData.industries || [],
                datasets: [
                  {
                    data: graphData.industryCount || [],
                    backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#4BC0C0",
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
