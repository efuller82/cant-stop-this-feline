import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

function RumbleGalleryCard(props) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="card basicRumbleCard">
            <h5 className="card-subtitle basicCard-subtitle">
              <button
                onClick={() => props.handleSelection(props.id)}
                type="button"
                className="btn-outline-primary"
                id={props.id}
              >
                {props.nickname}
              </button>
            </h5>
            <div className="rumble-img-container">
              <img className="rumbleCat-pic" alt="catcat" src={props.imgURL} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RumbleGalleryCard;
