import React from "react";
import classes from "./Intro.module.css";

 
export default function Intro() {
  return (
    <>
      <section className={classes.summary}>
        <br></br>
        <br></br>
        <div className={classes.row}>
          <div className={classes.column}>
            <img src="shivangi.jpg" alt="profile" />
          </div><br></br><br></br>
          <div className={classes.column}>
            <br></br>
            <br></br>
            <br></br>
            <h1>Hello!</h1>
            <h3>A Bit About me</h3> <br></br>
            <p>
              A highly motivated girl, experienced with React JS, JavaScript and
              GIS Development with Strong technical problem solving and Managing
              skills, who like to create Impact to the organization / work I
              am a part of and always love to socialize and experience new
              things in life.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      
    </>
  );
}
