import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Headers.css";

function Headers(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const projectHandler = () => {
    props.onProject(true);
  };

  const resumeHandler = () => {
    props.onResume(true);
  };
  const homeHandler = () => {
    props.onHome(true);
  };

  return (
    <header>
      <div className="logo">
        <h2 className="name">
          <span className="sym"> Shivangi Gupta &nbsp;</span>
        </h2>
        <p>Assistant System Engineer </p>
      </div>
      <nav ref={navRef}>
        <a href="/#" onClick={homeHandler} >Home</a>
        <a href="/#" onClick={resumeHandler}>
          Resume
        </a>
        <a href="/#" onClick={projectHandler}>
          Projects
        </a>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Headers;
