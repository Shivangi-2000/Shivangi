import React from "react";
import classes from "./Education.module.css";
export default function Education(props) {
  return (
    <section>
      <br></br><br></br>
      <div className={classes.row}>
        <div className={classes.column}><h2>Education</h2></div>
        <div className={classes.column}>
          {props.degree.map((deg) => (
            <div className={classes.row}>
              <div className={classes.column}>{deg.year}</div>
              <div className={classes.column}><b>{deg.name}</b><br></br>{deg.college}<br></br>{deg.percentage}</div>
            </div>
            
          ))}
        </div>
      </div><br></br><br></br><hr></hr>
    </section>
  );
}
