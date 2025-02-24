import React from "react";
import Footer from "../../Components/Footer/Footer";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/chrome.svg" alt="Chrome" />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
   