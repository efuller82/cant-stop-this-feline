import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import Wrapper from "../components/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import RumbleGalleryCard from "../components/RumbleGalleryCard";
import RumbleCats from "../components/RumbleCats";
import "./rumble_styles.css";
import API from "../utils/API";
//! The next line is for dummy data only
// import dummyCat from "../dummyCat.json";

class Rumble extends Component {
  state = {
    cats: [],
    userMsg: "Choose your cat.",
    clicked: false,
    myCat: {},
    challengerCat: {}
  };

  componentDidMount() {
    this.loadCats();
  }

  loadCats = () => {
    API.getCats()
      .then(res => {
        this.setState({ cats: res.data });
      })
      .catch(err => console.log(err));
  };

  handleSelection = id => {
    console.log(this.state.cats);
    console.log(id);
    const selectedCat = this.state.cats.find(dummyCat => dummyCat._id === id);

    console.log(selectedCat);

    this.setState({
      myCat: selectedCat
    });
    //   if (selectedCat.clicked === false) {
    //     API.selectCat({
    //       alias: dummyCat.alias,
    //       image: dummyCat.image
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
                {this.state.cats.map(dummyCat => (
                  <RumbleGalleryCard
                    key={dummyCat.id}
                    id={dummyCat._id}
                    nickname={dummyCat.nickname}
                    imgURL={dummyCat.imgURL}
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
