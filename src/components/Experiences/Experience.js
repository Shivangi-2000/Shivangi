import React from 'react'
import classes from "./Experience.module.css";
export default function Experience(props) {
  return (
    <section>
      <br></br><br></br>
      <h1>Resume</h1><br></br>
      <div className={classes.row}>
        <div className={classes.column}><br></br><h2>Experience</h2></div>
        <div className={classes.column}>
          {props.experience.map((exp) => (
            <div className={classes.row}><br></br>
              <div className={classes.column}>{exp.duration}</div>
              <div className={classes.column}><b>{exp.designation}, ({exp.company})</b><br></br>{exp.description}</div>
            </div>
            
          ))}
        </div>
      </div><br></br><br></br><hr></hr>
    </section>
  )
}
