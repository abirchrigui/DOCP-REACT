

import React from 'react'
import Choix from "./Choix";

export default function Patient(props) {
    return (
        <div>
          <div className="Section2">
      <h5> {props.objet.title} </h5>
      <h1> {props.objet.subtitle} </h1>
      <div className="select-img">
        {props.objet.isshown && <Choix />}
        <img className="service-card-image" src={props.objet.image} />
      </div>
    </div>
        </div>
    )
}

