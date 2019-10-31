import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

function RumbleGalleryCard(props) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="card">
            <h5 className="card-subtitle">
              <button
                onClick={() => props.handleSelection(props.id)}
                type="button"
                className="btn-outline-primary"
                id={props.id}
              >
                {props.alias}
              </button>
            </h5>
            <div className="img-container">
              <img className="cat-pic" src={props.image} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RumbleGalleryCard;
