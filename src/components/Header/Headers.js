import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./Headers.module.css";

function Headers(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(classes.responsive_nav);
  };

  const projectHandler = () => {
    props.onProject(true);
    showNavbar();
  };

  const resumeHandler = () => {
    props.onResume(true);
    showNavbar();
  };
  const homeHandler = () => {
    props.onHome(true);
    showNavbar();
  };

  return (
    <header >
      <div className={classes.logo}>
        <h2 className={classes.name}>
          <span className={classes.sym}> Shivangi Gupta &nbsp;</span>
        </h2>
        <p>Assistant System Engineer </p>
      </div>
      <nav ref={navRef}>
        <a href="/#" onClick={homeHandler}>
          Home
        </a>
        <a href="/#" onClick={resumeHandler}>
          Resume
        </a>
        <a href="/#" onClick={projectHandler}>
          Projects
        </a>

        <button
          className={`${classes.navbtn} ${classes.navclosebtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={classes.navbtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Headers;
