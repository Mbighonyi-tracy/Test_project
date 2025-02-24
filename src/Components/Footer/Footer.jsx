// import React, { useState, useEffect } from "react";
// import "./Footer.css"; // Import CSS file
// import { FaSearch, FaWindows } from "react-icons/fa";

// const Footer = () => {
//   const [time, setTime] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggleCalendar = () => {
//     setShowCalendar(!showCalendar);
//   };

//   return (
//     <div className="footer">
//       {/* Left Section */}
//       <div className="footer-left">
//         {time.getHours() >= 6 && time.getHours() < 18 ? "☀" : "🌙"}
//       </div>

//       {/* Center Section */}
//       <div className="footer-center">
//         <FaWindows className="windows-icon" />
//         <div className="search-box">
//           <FaSearch className="search-icon" />
//           <input type="text" placeholder="Search" />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="footer-right">
//         <span onClick={toggleCalendar}>
//           {time.toLocaleDateString()} {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//         </span>
//         {showCalendar && <div className="calendar-popup">📅 Calendar appears here</div>}
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles
import "./Footer.css"; // Custom styles for the footer
import { FaSearch, FaWindows } from "react-icons/fa";


const Footer = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  return (
    <footer className="footer">
      {/* Left: Day/Night Emoji */}
      <div className="footer-section">
        {date.getHours() >= 6 && date.getHours() < 18 ? "☀" : "🌙"}
      </div>

      {/* Center: Windows Icon & Search */}
      <div className="footer-center">
       <FaWindows className="windows-icon" />
         <div className="search-box">
           <FaSearch className="search-icon" />
           <input type="text" placeholder="Search" />
         </div>
       </div>
     
      {/* Right: Time & Date with Clickable Calendar */}
      <div className="footer-section right">
        <div className="time">{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
        <div className="date" onClick={toggleCalendar}>
          {date.toLocaleDateString()}
        </div>
        {showCalendar && (
          <div className="calendar-container">
            <Calendar
              value={date}
              tileClassName={({ date: calendarDate }) =>
                calendarDate.toDateString() === new Date().toDateString() ? "highlight-date" : ""
              }
            />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

