import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

class RumbleCats extends Component {
  state = {
    myCat: this.props.myCat,
    challengerCat: this.props.challengerCat
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="card">
              <h5 className="card-subtitle">My Cat</h5>
              <p>{this.props.myCat.alias}</p>
              <div className="img-container">
                <img className="cat-pic" src={this.props.myCat.image} />
              </div>
            </div>
            <div className="versus">VS</div>
            <div className="card">
              <h5 className="card-subtitle">Challenger Cat</h5>
              <div className="img-container">
                <img className="cat-pic" src={this.props.image} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RumbleCats;
