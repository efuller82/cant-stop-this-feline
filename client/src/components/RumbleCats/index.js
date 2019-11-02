import React, { Component, Fragment } from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

const MyRumbleCat = props => {
  console.log(props);
  return (
    <div className="basicRumbleCard">
      <p className="card-subtitle rumbleCard">{props.myCat.nickname}</p>
      <div className="rumble-img-container">
        <img className="rumbleCat-pics" src={props.myCat.imgURL} />
      </div>
    </div>
  );
};

const ChallengerRumbleCat = props => {
  console.log(props);
  return (
    <div className="basicRumbleCard">
      <p className="card-subtitle rumbleCard">{props.challengerCat.nickname}</p>
      <div className="rumble-img-container">
        <img className="rumbleCat-pics" src={props.challengerCat.imgURL} />
      </div>
    </div>
  );
};

class RumbleCats extends Component {
  //rock-paper-scissor symbols
  constructor(props) {
    super(props);
    this.state = { symbols: ["Rock", "Paper Bag Attack", "All Claws"] };
  }

  andTheWinnerIs = () => {
    console.log("this is the winner fucntion");
    console.log(this.state);
    const { myCat, challengerCat } = this.state;
    if (myCat == challengerCat) {
      return this.setState({ winner: "Retract your claws it's draw!" });
    }
    //all scenarios where myCat wins
    if (
      (myCat === "Rock" && challengerCat === "All Claws") ||
      (myCat === "Paper Bag Attack" && challengerCat === "Rock") ||
      (myCat === "All Claws" && challengerCat === "Paper Bag Attack")
    ) {
      return this.setState({ winner: "You are the cat's meow!" });
    }
    //if myCat doesn't win, then the Challenger cat wins.
    else {
      this.setState({
        winner: "You can't fight this feline anymore. The challenger wins!"
      });
    }
  };

  //Start game triggered on click of start button
  startGame = () => {
    // console.log(this.state);
    this.setState(
      {
        myCat: this.state.symbols[Math.floor(Math.random() * 3)],
        challengerCat: this.state.symbols[Math.floor(Math.random() * 3)],
        winner: ""
      },
      this.andTheWinnerIs
    );
    console.log("this is right after random symbol assigned to each cat");
    console.log(this.state);
    // this.setState({ winner: this.andTheWinnerIs() });
  };

  render() {
    // console.log("This one is the class one.");
    // console.log(this.props);

    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <h4 className="rumbleHeaders">My Cat</h4>
              <div className="basicRumbleCard">
                <MyRumbleCat
                  symbol={this.state.myCat}
                  myCat={this.props.myCat}
                />
              </div>

              <h5 className="rumbleHeaders">VS</h5>

              <h4 className="rumbleHeaders">Challenger Cat</h4>
              <ChallengerRumbleCat
                challengerCat={this.props.challengerCat}
                symbol={this.state.challengerCat}
              />
              <div>{this.state.winner}</div>
              <button onClick={this.startGame}>Start the Rumble!</button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RumbleCats;
