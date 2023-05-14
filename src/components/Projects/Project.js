import React from "react";
import classes from "./Projects.module.css";

export default function Project(props) {
  let count = 1;
  return (
    <>
      <section>
        <hr></hr>
        <br></br>
        <br></br>
        <h2>Projects</h2>
        {props.project.map((p) => (
          <div className={classes.row}>
            <br></br>
            <div className={classes.column}><h3 className={classes.hs}> {count++}. <b>Name: {p.name}</b></h3></div>
            <div className={classes.column}>
                
               <p className={classes.p1}>Technology: {p.technology}<br></br></p> 
               
               <a href={p.URL} target="_blank" rel="noreferrer">
                <button className={classes.button1}>Visit</button>
              </a>
            </div>
            
          </div>
        ))}
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
