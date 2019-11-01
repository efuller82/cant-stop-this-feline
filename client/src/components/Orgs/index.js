import React from "react";
import { ListItem } from "../List";
import "./style.css";
import Button from "react-bootstrap/Button";

const Org = ({ name, city, website, mission_statement, url }) => {
  // console.log("this is my " + Org);
  return (
    <ListItem>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a
            href={url}
            className="btn btn-outline-primary myButton"
            role="button"
            aria-pressed="true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find Your Future Furry Friend
          </a>
          <p className="card-text">{"In " + city}</p>
          <h6 className="card-subtitle mb-2 text-muted">{website}</h6>
          <p className="card-text">{mission_statement}</p>
        </div>
      </div>
    </ListItem>
  );
};

export default Org;
