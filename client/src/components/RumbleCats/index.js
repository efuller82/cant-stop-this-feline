import React, { Component, Fragment } from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";
// import { throws } from "assert";

const MyRumbleCat = props => {
  console.log(props);
  return (
    <div className="basicRumbleCard">
      <div className="symbols">{props.symbol}</div>
      <div className="rumble-img-container">
        {props.myCat.imgURL ? (
          <img
            className="rumbleCat-pics"
            alt="catcat"
            src={props.myCat.imgURL}
          />
        ) : (
          <div></div>
        )}
      </div>
      <p className="card-subtitle rumbleCard">{props.myCat.nickname}</p>
    </div>
  );
};

const ChallengerRumbleCat = props => {
  console.log(props);
  return (
    <div className="basicRumbleCard">
      <div className="symbols">{props.symbol}</div>
      <div className="rumble-img-container">
        {props.challengerCat.imgURL ? (
          <img
            className="rumbleCat-pics"
            alt="catcat"
            src={props.challengerCat.imgURL}
          />
        ) : (
          <div></div>
        )}
      </div>
      <p className="card-subtitle rumbleCard">{props.challengerCat.nickname}</p>
    </div>
  );
};

class RumbleCats extends Component {
  //rock-paper-scissor symbols
  constructor(props) {
    super(props);
    this.state = {
      symbols: ["Litter-Rocks", "Paper Bag Attack", "All Claws"]
    };
  }

  //logic that determines the winner
  andTheWinnerIs = () => {
    // console.log("this is the winner fucntion");
    // console.log(this.state);
    const { myCat, challengerCat } = this.state;

    if (myCat == challengerCat) {
      return this.setState({ winner: "Retract your claws. It's draw!" });
    }
    //all scenarios where myCat wins
    if (
      (myCat === "Litter-Rocks" && challengerCat === "All Claws") ||
      (myCat === "Paper Bag Attack" && challengerCat === "Litter-Rocks") ||
      (myCat === "All Claws" && challengerCat === "Paper Bag Attack")
    ) {
      const addPoint = { ...this.state };
      addPoint.winner = "You are the cat's meow! You win!";

      return this.setState(addPoint, () => this.props.votes(this.props.myCat));
    }

    //if myCat doesn't win, then the Challenger cat wins.
    else {
      const addPoint = { ...this.state };
      addPoint.winner =
        "You can't fight this feline anymore. The challenger wins!";

      this.setState(addPoint, () => this.props.votes(this.props.challengerCat));
      console.log("Challenger should get plus 1 vote");
      console.log(this.props);
    }
  };

  //Start game triggered on click of start button
  startGame = () => {
    this.setState(
      {
        myCat: this.state.symbols[Math.floor(Math.random() * 3)],
        challengerCat: this.state.symbols[Math.floor(Math.random() * 3)]
      },
      this.andTheWinnerIs
    );
  };

  resetSymbols = () => {
    this.setState({
      myCat: "",
      challengerCat: "",
      winner: ""
    });
    this.props.resetGame();
  };

  render() {
    const { clicked } = this.props.myCat;
    const isActive = clicked === true;

    return (
      <Fragment>
        <Container>
          <Row>
            <Col className="myCenteredCol">
              {this.state.winner ? (
                <div>
                  <div className="gameMsg">{this.state.winner}</div>

                  <button
                    className="btn btn-secondary startBtn myBtns"
                    id="resetGame"
                    onClick={() => this.resetSymbols()}
                  >
                    Reset Game
                  </button>
                </div>
              ) : (
                ""
              )}

              <h4 className="rumbleHeaders">My Cat</h4>
              <div className="RumblersCard">
                <MyRumbleCat
                  symbol={this.state.myCat}
                  myCat={this.props.myCat}
                  upvotes={this.props.myCat.upvotes}
                  clicked={this.state.myCat}
                />
              </div>

              <h5 className="versus">VS</h5>

              <h4 className="rumbleHeaders">Challenger Cat</h4>
              <div className="RumblersCard">
                <ChallengerRumbleCat
                  challengerCat={this.props.challengerCat}
                  symbol={this.state.challengerCat}
                  upvotes={this.props.challengerCat.upvotes}
                />
              </div>
              <button
                disabled={!this.props.clicked}
                className="btn btn-secondary startBtn myBtns"
                id="rumbleStart"
                onClick={this.startGame}
              >
                Start the Rumble!
              </button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RumbleCats;
