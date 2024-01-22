import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Link } from "react-router-dom"
import Logo from "../components/Logo"

const Landing = () => {
  return (
    <Wrapper> 
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>This is an application for finding your dream jobs</p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
   
  )
}

export default Landing