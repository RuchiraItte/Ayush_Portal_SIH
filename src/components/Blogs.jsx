import React, { useState } from "react";
import "./styles/Blogs.css";
import Header from "./Header";

const Blogs = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: "How to Register Your Startup",
      description: "A complete guide to startup registration.",
      category: "Guides",
      tags: ["How-to", "Registration"],
      date: "2024-12-01",
      author: "Admin",
      content: "Detailed content for startup registration...",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Top 10 Investors for Startups",
      description: "Find the best investors for your startup.",
      category: "Investors",
      tags: ["Funding", "Investors"],
      date: "2024-11-28",
      author: "Team",
      content: "Detailed content for investors...",
      thumbnail: "https://via.placeholder.com/150",
    },
    // Add more blogs here for testing pagination
  ]);

  const [videos] = useState([
    {
      id: 1,
      title: "How to Login",
      category: "Login",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "How to Apply for a Startup",
      category: "Application",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  // Filtered blogs based on search, category, and tags
  const filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategory === "All" || blog.category === selectedCategory) &&
      (selectedTags.length === 0 ||
        selectedTags.every((tag) => blog.tags.includes(tag))) &&
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className={`blogs-container ${theme}`}>
      <Header />
      <div className="controls mt-32">
        <div className="theme-toggle">
          <label>
            Theme:
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="high-contrast">High Contrast</option>
            </select>
          </label>
        </div>

        {/* Search and Filters */}
        <div className="search-and-filters">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Guides">Guides</option>
            <option value="Investors">Investors</option>
            <option value="Startups">Startups</option>
          </select>
        </div>
      </div>

      {/* Selected Tags */}
      <div className="tags-filter">
        {["How-to", "Registration", "Funding", "Investors"].map((tag) => (
          <button
            key={tag}
            className={`tag ${selectedTags.includes(tag) ? "active" : ""}`}
            onClick={() => toggleTag(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="blog-list">
        {currentBlogs.map((blog) => (
          <div
            className="blog-card"
            key={blog.id}
            onClick={() => setSelectedBlog(blog)}
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              loading="lazy"
            />
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Blog Detail */}
      {selectedBlog && (
        <div className="blog-detail">
          <button
            className="back-button"
            onClick={() => setSelectedBlog(null)}
          >
            Back to Blogs
          </button>
          <h1>{selectedBlog.title}</h1>
          <p>
            <strong>By {selectedBlog.author}</strong> | {selectedBlog.date}
          </p>
          <div className="blog-content">{selectedBlog.content}</div>
          <div className="tags">
            {selectedBlog.tags.map((tag, index) => (
              <span className="tag" key={index}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Instructional Videos */}
      <div className="videos-section">
        <h2>Instructional Videos</h2>
        <div className="video-list">
          {videos.map((video) => (
            <div className="video-card" key={video.id}>
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
