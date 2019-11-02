import React, { Component, Fragment } from "react";
import "./style.css";
import { Container, Row, Col } from "react-grid-system";

const MyRumbleCat = props => {
  console.log(props);
  return (
    <div className="basicRumbleCard">
      <div className="symbols">{props.symbol}</div>
      <div className="rumble-img-container">
        {props.myCat.imgURL ? (
            <img className="rumbleCat-pics" alt="catcat" src={props.myCat.imgURL} />
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
            <img className="rumbleCat-pics" alt="catcat" src={props.challengerCat.imgURL} />
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
    this.state = { symbols: ["Litter-Rocks", "Paper Bag Attack", "All Claws"] };
  }

  andTheWinnerIs = () => {
    // console.log("this is the winner fucntion");
    // console.log(this.state);
    const { myCat, challengerCat } = this.state;

    if (myCat == challengerCat) {
      return this.setState({ winner: "Retract your claws. It's draw!" });

    }
    //all scenarios where myCat wins
    if (
      (myCat === "Rock" && challengerCat === "All Claws") ||
      (myCat === "Paper Bag Attack" && challengerCat === "Litter-Rocks") ||
      (myCat === "All Claws" && challengerCat === "Paper Bag Attack")
    ) {
      return this.setState({ winner: "You are the cat's meow! You win!" });
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
        challengerCat: this.state.symbols[Math.floor(Math.random() * 3)]
      },
      this.andTheWinnerIs
    );
    // console.log("this is right after random symbol assigned to each cat");
    // console.log(this.state);
    // this.setState({ winner: this.andTheWinnerIs() });
  };

  render() {
    // console.log("This one is the class one.");
    // console.log(this.props);

    return (
      <Fragment>
        <Container>
          <Row>
            <Col className="myCenteredCol">
              {this.state.winner ? (
                <div>
                  <div className="gameMsg">{this.state.winner}</div>
                </div>
              ) : (
                ""
              )}

              <h4 className="rumbleHeaders">My Cat</h4>
              <div className="RumblersCard">
                <MyRumbleCat
                  symbol={this.state.myCat}
                  myCat={this.props.myCat}
                />
              </div>

              <h5 className="rumbleHeaders">VS</h5>

              <h4 className="rumbleHeaders">Challenger Cat</h4>
              <div className="RumblersCard">
                <ChallengerRumbleCat
                  challengerCat={this.props.challengerCat}
                  symbol={this.state.challengerCat}
                />
              </div>
              <button onClick={this.startGame}>Start the Rumble!</button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RumbleCats;
