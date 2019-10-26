import React from "react";
import { ListItem } from "../List";
import "./style.css";

const Org = ({ name, city, website, mission_statement, href }) => {
  console.log("this is my " + Org);
  /* const truncateText = (str, length, ending) => {
    if (str) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
    return str;
  };

  const truncateDescription = truncateText(description, 255, "...");
*/
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
                  href={href}
                  className="view-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Animals
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
