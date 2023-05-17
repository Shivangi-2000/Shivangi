import { useRef } from "react";
import { FaBars , FaTimes } from "react-icons/fa";
import classes from "./Headers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faReceipt, faRobot, faUser } from '@fortawesome/free-solid-svg-icons'
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
          <span className={classes.sym}><FontAwesomeIcon icon={faUser} />  Shivangi Gupta &nbsp;</span>
        </h2>
        <p>{props.detail[5]} </p>
      </div>
      <nav ref={navRef}>
        <a href="/#" onClick={homeHandler}>
          Home <FontAwesomeIcon icon={faHome} className={classes.icons}/>
        </a>
        <a href="/#" onClick={resumeHandler}>
          Resume <FontAwesomeIcon icon={faReceipt} className={classes.icons}/>
        </a>
        <a href="/#" onClick={projectHandler}>
          Projects <FontAwesomeIcon icon={faRobot} className={classes.icons}/>
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
