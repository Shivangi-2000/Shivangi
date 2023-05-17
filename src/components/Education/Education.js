import React from "react";
import classes from "./Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendarDays } from '@fortawesome/free-solid-svg-icons'

export default function Education(props) {
  return (
    <section className={classes.education}>
      <br></br><br></br>
      <div className={classes.row} key={`Education`}>
        <div className={classes.column}><h2>Education</h2></div>
        <div className={classes.column}>
          {props.degree.map((deg) => (
            <div className={classes.row} key={deg.id}>
              <div className={classes.column}><FontAwesomeIcon icon={faCalendarDays} className={classes.calender}/> {deg.year}</div>
              <div className={classes.column}><b>{deg.name}</b><br></br>{deg.college}<br></br>{deg.percentage}</div>
            </div>
            
          ))}
        </div>
      </div><br></br><br></br><hr></hr>
    </section>
  );
}
