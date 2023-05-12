import React from "react";
import classes from "./Details.module.css";

export default function Details() {
  return (
    <section>
      <hr></hr>
      <div className={classes.row}>
        <div className={classes.column}>
          <b>Phone</b>
          <br></br>
          +91 7651942905
        </div>
        <div className={classes.column}>
          <b>Email</b>
          <br></br>
          shivangiguptaoct11@gmail.com
        </div>
        <div className={classes.column}>
          <b>Profiles</b>
          <br></br>
          <div className={classes.row}>
            <div className={classes.column}>
              <img
                className={classes.icons}
                src="linkedIn.png"
                alt="linkedIn"
              />
            </div>
            <div className={classes.column}>
              <img className={classes.icons} src="github.png" alt="linkedIn" />
            </div>
            <div className={classes.column}>
              <img
                className={classes.icons}
                src="hackerrank.png"
                alt="linkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
