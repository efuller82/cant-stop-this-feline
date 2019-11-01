import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import Wrapper from "../components/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import RumbleGalleryCard from "../components/RumbleGalleryCard";
import RumbleCats from "../components/RumbleCats";
import "./rumble_styles.css";
//! The next line is for dummy data only
import dummyCats from "../dummyCats.json";
import API from "../utils/API";

class Rumble extends Component {
  state = {
    dummyCats,
    score: 0,
    userMsg: "Choose your cat.",
    clicked: false,
    myCat: {},
    challengerCat: {}
  };

  handleSelection = id => {
    const selectedCat = this.state.dummyCats.find(
      dummyCats => dummyCats.id === id
    );
    console.log(selectedCat);
    this.setState({
      myCat: selectedCat
    });
    //   if (selectedCat.clicked === false) {
    //     API.selectCat({
    //       alias: dummyCats.alias,
    //       image: dummyCats.image
    //     }).then(() => this.setState({ clicked: true }));
    //   }
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Banner />
          <Row>
            <Col sm={3}>
              <SideNav />
            </Col>
            <Col sm={9}></Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Wrapper>
                <div className="rumbleSubtitle">Pick Your Rumbler</div>
                {this.state.dummyCats.map(dummyCats => (
                  <RumbleGalleryCard
                    id={dummyCats.id}
                    key={dummyCats.id}
                    alias={dummyCats.alias}
                    image={dummyCats.image}
                    handleSelection={this.handleSelection}
                  />
                ))}
              </Wrapper>
            </Col>
            <Col sm={9}>
              <RumbleCats
                myCat={this.state.myCat}
                challengerCat={this.state.challengerCat}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Rumble;
