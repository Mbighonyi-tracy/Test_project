// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import LenovoLogo from "./components/LenovoLogo"
// import LoadingAnimation from "./components/LoadingAnimation"
// import "./page.css"

// export default function LandingPage() {
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//       router.push("/wallpaper")
//     }, 15000)

//     return () => clearTimeout(timer)
//   }, [router])

//   return (
//     <div className="landing-page">
//       <LenovoLogo />
//       {loading && (
//         <div className="loading-container">
//           <LoadingAnimation />
//         </div>
//       )}
//     </div>
//   )
// }
  


const { useState, useEffect } = require("react");
const {  default: LenovoLogo } = require("../../Components/Logo/Logo");
const { default: LoadingAnimation } = require("../../Components/LoadingAnimation/LoadingAnimation");
const { useNavigate } = require("react-router-dom");
require("./Loading.css");

function LandingPage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const router = useRoutes();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // router.push("/wallpaper");
    navigate("/Wallpaper");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      <LenovoLogo/>
      {loading && (
        <div className="loading-container">
          <LoadingAnimation />
        </div>
      )}
    </div>
  );
}

export default LandingPage;

