import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Headers.css";

function Headers() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo">
        <h2 className="name"><span className="sym">&#8718;</span> Shivangi Gupta &nbsp;</h2>
        <p>  Assistant System Engineer </p>
      </div>
      <nav ref={navRef}>
        <a href="/#">Education</a>
        <a href="/#">Experience</a>
        <a href="/#">Projects</a>
        <a href="/#">Career Highlights</a>
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
