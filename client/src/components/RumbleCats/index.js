import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

function RumbleCats(props) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="card">
            <h5 className="card-subtitle">My Cat</h5>
            <div className="img-container">
              <img className="cat-pic" src={props.image} />
            </div>
          </div>
          <div className="versus">VS</div>
          <div className="card">
            <h5 className="card-subtitle">Challenger Cat</h5>
            <div className="img-container">
              <img className="cat-pic" src={props.image} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RumbleCats;
