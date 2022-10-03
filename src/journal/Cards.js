import React from "react";
import data from "./data";
import "./cards.css";
import location from "./location.jpg";

function Cards(props) {
  return (
    <div>
      <div className="cards">
        <img className="cards--img" src={props.imageUrl} alt="dad"></img>
        <div className="text">
          <h3 className="location">
            {" "}
            <img src={location} width={10}></img> {props.location}{" "}
            <a href={props.googleMapsUrl}>
              <u>
                <small className="viewOnGoogle">View on Google maps</small>
              </u>
            </a>
          </h3>
          <h2>{props.title}</h2>
          <p>
            <span>{props.startDate}</span>-<span>{props.endDate}</span>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Cards;
