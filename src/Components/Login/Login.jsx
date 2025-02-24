// import React, { useState } from "react";

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [profilePic, setProfilePic] = useState(null);
//     const [error, setError] = useState("");

//     const handleLogin = async () => {
//         setError(""); // Clear previous errors
//         try {
//             const response = await fetch("http://localhost:5000/api/auth/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ username, password }),
//             });

//             const data = await response.json();
            
//             if (response.ok) {
//                 setProfilePic(data.profilePic); // Set profile pic on success
//             } else {
//                 setError(data.error); // Display error message
//             }
//         } catch (err) {
//             setError("Server error. Please try again.");
//         }
//     };

//     return (
//         <div style={styles.container}>
//             {/* {profilePic && <img src={`http://localhost:5000/uploads/${profilePic}`} alt="Profile" style={styles.profilePic} />} */}
//             <img src={`http://localhost:5000/uploads/${user.profile_pic}`} alt="Profile" style={styles.profilePic} />
            
//             {/* <input 
//                 type="text" 
//                 placeholder="Enter Username" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)} 
//                 style={styles.input}
//             /> */}

//             <input 
//                 type="password" 
//                 placeholder="Enter Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 style={styles.input}
//             />

//             <button onClick={handleLogin} style={styles.button}>Login</button>

//             {error && <p style={styles.error}>{error}</p>}

//             <p style={styles.registerText}>
//                 Don't have an account? <a href="/register">Register</a>
//             </p>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         background: "#f0f0f0",
//     },
//     profilePic: {
//         width: "100px",
//         height: "100px",
//         borderRadius: "50%",
//         marginBottom: "20px",
//     },
//     input: {
//         width: "250px",
//         padding: "10px",
//         margin: "10px 0",
//         borderRadius: "5px",
//         border: "1px solid #ccc",
//     },
//     button: {
//         padding: "10px 20px",
//         border: "none",
//         backgroundColor: "#007bff",
//         color: "#fff",
//         cursor: "pointer",
//         borderRadius: "5px",
//     },
//     error: {
//         color: "red",
//         marginTop: "10px",
//     },
//     registerText: {
//         marginTop: "15px",
//     },
// };

// export default Login;

import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setProfilePic(`http://localhost:5000/uploads/${data.profile_pic}`);
        setMessage("Login successful!");
        // Optionally redirect the user:
        // window.location.href = "/wallpaper";
      } else {
        setMessage(data.error || "Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      {profilePic && <img src={profilePic} alt="Profile" style={styles.image} />}
      <form onSubmit={handleLogin} style={styles.form}>
       

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <a href="/register" style={styles.link}>Register</a>
      </p>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
  message: {
    marginTop: "15px",
    color: "green",
  },
};

export default Login;






























