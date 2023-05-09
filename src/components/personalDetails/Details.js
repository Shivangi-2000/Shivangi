import React from "react";
import "./Details.css";

export default function Details() {
  return (
    <section>
      <hr></hr>
      <div className="row">
        <div className="column">
            <b>Phone</b><br></br>
            +91 7651942905
        </div>
        <div className="column">
            <b>Email</b><br></br>
            shivangiguptaoct11@gmail.com
        </div>
        <div className="column">
            <b>Profiles</b><br></br>
            <div className="row">
            <div className="column" ><img className = "icons" src="linkedIn.png" alt="linkedIn"/></div>
            <div className="column"><img className = "icons" src="github.png" alt="linkedIn"/></div>
            <div className="column"><img className = "icons" src="hackerrank.png" alt="linkedIn"/></div>
            </div>

        </div>
      </div>
    </section>
  );
}
