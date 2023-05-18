import React from "react";
import classes from "./Details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faPersonRifle,
} from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";

export default function Details(props) {
  return (
    <section>
      <div className={classes.row}>
        <div className={classes.column}>
          <b>
            Phone <FontAwesomeIcon icon={faPhone} />
          </b>
          <br></br>
          {props.detail[4]}
        </div>
        <div className={classes.column}>
          <b>
            Email <FontAwesomeIcon icon={faMailBulk} />
          </b>
          <br></br>
          {props.detail[0]}
        </div>
        <div className={classes.column}>
          <b>
            Profiles <FontAwesomeIcon icon={faPersonRifle} />
          </b>
          <br></br>
          <div className={classes.row}>
            <div className={`${classes.column} ${classes.column1}`}>
              <a href={props.detail[3]} target="_blank" rel="noreferrer">
                <FaLinkedin className={classes.links}/>
              </a>
            </div>
            <div className={`${classes.column} ${classes.column1}`}>
              <a href={props.detail[1]} target="_blank" rel="noreferrer">
                <FaGithub className={classes.links}/>
              </a>
            </div>
            <div className={`${classes.column} ${classes.column1}`}>
              <a href={props.detail[2]} target="_blank" rel="noreferrer">
                <FaHackerrank className={classes.links}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
