import React  from 'react'
import classes from "./Highlight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from '@fortawesome/free-solid-svg-icons'


export default function Highlight(props) {
  return (
    <section className={classes.highlight}>
      <br></br><br></br>
      <div className={classes.row} key={`Career highlights`}>
        <div className={classes.column}><br></br><h2>Career highlights</h2></div>
        <div className={classes.column}>
          {props.highlight.map((hl) => (
            <div className={classes.row} key={hl.id}><br></br>
              <div className={classes.column}><b>{hl.title} <FontAwesomeIcon icon={faTrophy} /></b><br></br>{hl.description}</div>
            </div>
            
          ))}
        </div>
      </div><br></br><br></br>
      <hr></hr>
    </section>
  )
}
