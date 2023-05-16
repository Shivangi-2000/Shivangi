import React from "react";
import classes from "./Details.module.css";

export default function Details(props) {
  return (
    <section>
      <div className={classes.row}>
        <div className={classes.column}>
          <b>Phone</b>
          <br></br>
          {props.detail[4]}
        </div>
        <div className={classes.column}>
          <b>Email</b>
          <br></br>
          {props.detail[0]}
        </div>
        <div className={classes.column}>
          <b>Profiles</b>
          <br></br>
          <div className={classes.row}>
            <div className={classes.column}>
              <a href={props.detail[3]} target="_blank" rel="noreferrer">
                <img
                  className={classes.icons}
                  src="linkedIn.png"
                  alt="linkedIn"
                />
              </a>
            </div>
            <div className={classes.column}>
              <a href={props.detail[1]} target="_blank" rel="noreferrer">
                <img className={classes.icons} src="github.png" alt="github" />
              </a>
            </div>
            <div className={classes.column}>
              <a href={props.detail[2]} target="_blank" rel="noreferrer">
                <img
                  className={classes.icons}
                  src="hackerrank.png"
                  alt="linkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
