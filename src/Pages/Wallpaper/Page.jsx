import React, { useState, useEffect } from "react";
import "./Page.css"; // Import the CSS for styling
// import avater from "../../assets/avater.png"
import { useNavigate } from "react-router-dom";

const Wallpaper = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { day: "2-digit",weekday:"long", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  }; 
  const handleDoubleClick = () => {
    navigate("/Login")
  }


  return (
    <div className="wallpaper" onDoubleClick={handleDoubleClick}>
      {/* <img src={avater.png} alt="avater.png" /> */}
      <div className="datetime">
        <p>{formatDate(dateTime)}</p>
        <p>{formatTime(dateTime)}</p>
      </div>
    </div>
  );
};

export default Wallpaper;
































// const { useState, useEffect } = require("react");
// // const { useNavigate } = require("react-router-dom");
// require("./Page.css");

// function Wallpaper() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   // const Navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
//     return () => clearInterval(timer);
//   }, []);

//   const handleClick = async () => {
//     Navigate("/Login");

//   }

//   const handleDoubleClick = async () => {
//     try {
//       const response = await fetch("/api/checkUser");
//       const data = await response.json();
//       if (data.isFirstTime) {
//         // if (data.Register) {

//         // router.push("/register");
//       } else {
//         // router.push("/login");
//         Navigate("/Register");

//       }
//     } catch (error) {
//       console.error("Error checking user status:", error);
//   };

//   return (
//     // <div className="wallpaper-container" onClick={handleClick}>
//      // <div className="wallpaper-container" onDoubleClick={handleDoubleClick}> */
//       <div className="time-display">
//         <p className="time">
//           {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//         </p>
//         <p className="date">
//           {currentTime.toLocaleDateString("en-US", {
//             weekday: "long",
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </p>
//       </div>
//     // </div>
//   )
// }

  


// export default Wallpaper;

