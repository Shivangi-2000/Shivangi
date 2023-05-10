import React from "react";
import classes from "./Intro.module.css";

export default function Intro() {
  return (
    <>
      <section className={classes.summary}>
        <div className={classes.row}>
          <div className={classes.column}>
            <img src="shivangi.jpg" alt="linkedIn" />
          </div>
          <div className={classes.column}>
            <h1>Hello!</h1>
            <h3>A Bit About me</h3>
            <p>
              A highly motivated girl, experienced with React JS, JavaScript and
              GIS Development with Strong technical problem solving and Managing
              skills, who like to create Impact to the organization / work she
              is a part of and always love to socialize and experience new
              things in life.
            </p>
            {/* <div className="column">
              <br></br>
              <div className="row">
                <div className="column">
                  <button className=""></button>
                </div>
                <div className="column">
                  <button className=""></button>
                </div>
                <div className="column">
                  <button className=""></button>
                </div>
                
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
