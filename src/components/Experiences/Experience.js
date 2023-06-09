import React from 'react'
import classes from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

export default function Experience(props) {
  return (
    <section className={classes.experience}>
      <br></br><br></br>
      <h1>Resume </h1><br></br>
      <div className={classes.row} key={`Experience`}>
        <div className={classes.column}><br></br><h2>Experience</h2></div>
        <div className={classes.column}>
          {props.experience.map((exp) => (
            <div className={classes.row} key={exp.id}><br></br>
              <div className={classes.column}><FontAwesomeIcon icon={faCalendarCheck} className={classes.calender}/> {exp.duration}</div>
              <div className={classes.column}><b>{exp.designation}, ({exp.company})</b><br></br>{exp.description}</div>
            </div>
            
          ))}
        </div>
      </div><br></br><br></br><hr></hr>
    </section>
  )
}
