



// trail
import './styles/Home.css';
import startup from '../assets/startup.svg';
import authori from '../assets/lauthority.jpg';
import drugins from '../assets/drugins.svg';
import Header from './Header';
import FAQ from './FAQs';
import Footer from './Dashboard comps/Footer';
import Gochatbot from './Gochatbot';
import Images from './Images';
import Services from './Services';
import About from './About';
import { PiChatCenteredDotsDuotone } from "react-icons/pi";
import TeamsPatrons from './TeamsPatrons';
import { FiMessageSquare } from 'react-icons/fi';

import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

import './ChatbotPopup.css';
import Slider from './Slider';

function Home()
{
    let startupqr='startup';
    let druginspector='druginspector';
    let authority='authority';
    function startupLogin()
    {
        window.location.href = `/login?value=${startupqr}`;
    }
    function authoriLogin()
    {
        window.location.href = `/login?value=${authority}`;
    }
    function drugLogin()
    {
        window.location.href = `/login?value=${druginspector}`;
    }
    function goStartup()
    {
        window.location.href=`/signupstartup`;
    }
    function gohometwo()
    {
        window.location.href=`/hometwo`;
    }
    function goauth()
    {
        window.location.href='/signupauthority'
    }
    function godrug()
    {
        window.location.href='/signupdrug'
    }
    
    const StartupFaqData = [
        { question: "What is AYUSH?", answer: "AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy. It refers to traditional Indian systems of medicine." },
        { question: "How can I register my AYUSH startup?", answer: "You can register your AYUSH startup through the AYUSH Startup Registration Portal provided by the Ministry of AYUSH." },
        { question: "What are the eligibility criteria for AYUSH startup funding?", answer: "To be eligible for AYUSH funding, your startup must focus on traditional systems of medicine and wellness, and meet other guidelines specified by the Ministry of AYUSH." },
        { question: "What certifications are required for AYUSH products?", answer: "AYUSH products typically require certifications from the AYUSH Ministry and the Food Safety and Standards Authority of India (FSSAI), depending on the product." },
        { question: "How can I obtain a license for manufacturing AYUSH products?", answer: "You can apply for a manufacturing license through the State Licensing Authority under the Ministry of AYUSH, following the guidelines specific to your system of medicine (e.g., Ayurveda or Homeopathy)." },
        { question: "What are the tax benefits for AYUSH startups?", answer: "AYUSH startups may be eligible for tax benefits under the Startup India initiative and specific tax exemptions related to health and wellness sectors." },
        { question: "What support is provided by the Ministry of AYUSH to startups?", answer: "The Ministry of AYUSH provides a variety of support mechanisms, including mentorship, incubation support, and financial assistance for startups focusing on traditional medicine and wellness." },
      ];
      const handleRedirect = () => {
        // window.open("https://youtu.be/lLrq8nG4U1c?si=kVBeRfZGTUcHGd5K", "_blank");
      };

      function gochatbot()
      {
        window.location.href='/chatbot';
      }



      const [messages, setMessages] = useState([
        {
          message: 'Ask me anything!',
          sentTime: 'just now',
          sender: 'Gemini Ai',
        },
      ]);
      const [isTyping, setIsTyping] = useState(false);
      const [isVisible, setIsVisible] = useState(false); // To toggle visibility
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: 'user',
        };
    
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setIsTyping(true);
    
        await processMessageToBackend(newMessages);
      };
    
      const processMessageToBackend = async (chatMessages) => {
        const apiMessages = chatMessages.map((messageObject) => ({
          role: messageObject.sender === 'Assistant' ? 'assistant' : 'user',
          content: messageObject.message,
        }));
    
        try {
          const response = await fetch('http://localhost:5002/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messagesreq: apiMessages }),
          });
    
          const data = await response.json();
          setMessages([
            ...chatMessages,
            {
              message: data.data,
              sender: 'Assistant',
            },
          ]);
        } catch (error) {
          console.error('Error communicating with the server:', error);
        } finally {
          setIsTyping(false);
        }
      };
    
      const toggleChatbot = () => {
        setIsVisible(!isVisible);
      };
    

    return(
        <div className='the-home h-screen relative'>

           <Header/>
           <Images/>
           <Slider/>
           <About/>
           <Services/>
              {/* <div className=' mx-20 fixed bottom-5 right-[-50px] '>
                  <button className='bg-blue-500 px-3 py-1 rounded-md text-white flex items-center gap-2' onClick={gochatbot}><PiChatCenteredDotsDuotone size={25}/>Chat Bot</button>
               </div> */}

               <div>
               <button className="chatbot-toggle flex items-center gap-2" onClick={toggleChatbot}>
                  <FiMessageSquare size={20} />
                  {isVisible ? 'Close Chat' : 'Chat Bot'}
               </button>
             
                   <div className={`chatbot-popup ${isVisible ? 'visible' : 'hidden'}`}>
                     <div className="chatbot-header">
                       <h3>Gemini AI Chatbot</h3>
                       <button className="close-btn" onClick={toggleChatbot}>
                         ✖
                       </button>
                     </div>
                     <MainContainer className="chatbot-container">
                       <ChatContainer>
                         <MessageList
                           scrollBehavior="smooth"
                           typingIndicator={isTyping ? <TypingIndicator content="Gemini is typing..." /> : null}
                         >
                           {messages.map((message, i) => (
                             <Message key={i} model={message} />
                           ))}
                         </MessageList>
                         <MessageInput placeholder="Type message here" onSend={handleSend} />
                       </ChatContainer>
                     </MainContainer>
                   </div>
               </div>
      

            <TeamsPatrons/>
            
            <div className="home-faq" id='faq'>
               <FAQ faqdata={StartupFaqData} who={"Ayush StartUps"} />
            </div>

            
            <Footer/>
    </div>
    );
}
export default Home;
