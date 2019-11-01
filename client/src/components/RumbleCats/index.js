import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

class RumbleCats extends Component {
  // state = {
  //   myCat: this.props.myCat,
  //   challengerCat: this.props.challengerCat
  // };

  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col>
            <h4 className="rumbleHeaders">My Cat</h4>
            <div className="basicRumbleCard">
              <p className="card-subtitle rumbleCard">
                {this.props.myCat.nickname}
              </p>
              <div className="rumble-img-container">
                <img className="rumbleCat-pics" src={this.props.myCat.imgURL} />
              </div>
            </div>
            <h5 className="rumbleHeaders">VS</h5>
            <h4 className="rumbleHeaders">Challenger Cat</h4>
            <div className="basicRumbleCard">
              <div className="img-container">
                <img className="rumbleCat-pics" src={this.props.imgURL} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RumbleCats;
