import React from "react";
import { ListItem } from "../List";
import "./style.css";

const Org = ({ name, city, website, mission_statement, url }) => {
  // console.log("this is my " + Org);
  return (
    <ListItem>
      <div className="media-snippet">
        <article className="media">
          <div className="media-content">
            <h3 className="heading-title">{name}</h3>
            <p className="heading-subtitle">{city}</p>
            <p className="heading-subtitle">{website}</p>
            <p className="p-article">{mission_statement}</p>
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <a
                  href={url}
                  className="view-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Your Future Furry Friend
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </ListItem>
  );
};

export default Org;
