import React, { Component } from "react";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import Wrapper from "../components/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import RumbleGalleryCard from "../components/RumbleGalleryCard";
import RumbleCats from "../components/RumbleCats";
import "./rumble_styles.css";
//! The next line is for dummy data only
import dummyCats from "../dummyCats.json";

class Rumble extends Component {
  state = {
    dummyCats,
    score: 0,
    userMsg: "Choose your cat.",
    clicked: "false"
  };

  handleSelection = () => {
    // Use the setState method to update a component's state
    this.setState({ clicked: true });
  };

  //if your cat wins the rumble, display the Win message, give winning cat a point
  // gameWin = () => {
  //     let newCardReset = this.state.dummyCats.map(card => {
  //       card.clicked = false;
  //       return card;
  //     });
  //     this.setState({
  //       dummyCats: [...newCardReset],
  //       score: 0,
  //       userMsg: "Your cat is king of the jungle! ",
  //       clicked: false
  //     });
  //   };

  // gameReset = () => {
  //     // reset all card "clicked" properties to false
  //     let newCardReset = this.state.dummyCats.map(card => {
  //       card.clicked = false;
  //       return card;
  //     });
  // this.setState(
  //     {
  //     dummyCats,
  //     score: this.state.score,
  //     userMsg: "You lost the rumble.",
  //     clicked: false
  //     },
  //     () => {
  //     // see latest state changes in console
  //     console.log("reset", this.state);
  //     }
  // );
  // };

  // increment = (isClicked, id) => {
  //     console.log("entering increment function ", isClicked, id);
  //     if (isClicked === false) {
  //       // update element in card array with "clicked property as true"
  //       let newCardInfo = this.state.cardInfo;
  //       newCardInfo[id].clicked = true;

  //       // resort entire array of cards
  //       newCardInfo.sort(function(a, b) {
  //         return 0.5 - Math.random();
  //       });

  //       //add one point to the score
  //       let newScore = this.state.score + 1;

  //       // update react state
  //       // 1) sorted newCardInfo with item clicked as true
  //       // 2) show user message, "That's correct!"
  //       // 3) score with addition of 1 point
  //       // 4) shake set to false

  //       this.setState(
  //         {
  //           cardInfo: [...newCardInfo],
  //           userMsg: "Correct guess!",
  //           score: newScore,
  //           shake: false
  //         },
  //         () => {
  //           // see latest state changes in console
  //           console.log("guessed correctly", this.state);
  //         }
  //       );

  //       //if all cards guessed correctly, run gameWin function
  //       if (newScore === cardInfo.length) {
  //         this.gameWin();
  //       }

  //       //if user guesses correctly add one point to the score
  //       else if (newScore >= this.state.topScore) {
  //         this.setState({ topScore: newScore });
  //       }
  //     }
  //     //if user guesses incorrectly, run gameReset function
  //     else {
  //       this.gameReset();
  //     }
  //   };

  render() {
    return (
      <Container>
        <Banner />
        <Row>
          <Col sm={3}>
            <SideNav />
          </Col>
          <Col sm={9}>
            <div className="rumbleSubtitle">Pick Your Rumbler</div>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Wrapper>
              {this.state.dummyCats.map(dummyCat => (
                <RumbleGalleryCard
                  id={dummyCat.id}
                  key={dummyCat.id}
                  alias={dummyCat.alias}
                  image={dummyCat.image}
                  isClicked={this.clicked}
                />
              ))}
            </Wrapper>
          </Col>
          <Col sm={9}>
            <RumbleCats />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Rumble;
