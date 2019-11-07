import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

function RumbleGalleryCard(props) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="card basicRumbleCard">
            <button
              onClick={() => props.handleSelection(props.id)}
              type="button"
              className="btn-outline-secondary myBtns"
              id={props.id}
            >
              <div className="rumble-img-container img-container">
                <img
                  className="rumbleCat-pic"
                  alt="catcat"
                  src={props.imgURL}
                />
              </div>
            </button>
            <h5 className="basicCard-subtitle">{props.nickname}</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RumbleGalleryCard;
