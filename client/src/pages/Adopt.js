import React, { Component } from "react";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import { Container, Row, Col } from "react-grid-system";
import API from "../utils/API";
import adoptsdk from "../utils/AdoptionSDK";
//Copied from Petfinder API JS-SDK documentation

//client.organization.search({location: "Minneapolis, MN"})
//  .then(resp => {
// Do something with resp.data.organizations
//  });

//end js-sdk code

// Function that hits local adoption API to get info about adoption local furries
class Adopt extends Component {
  state = {
    orgs: [],
    q: "",
    message: "Search for adoption organizations in your area..."
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadOrgs = () => {
    API.getOrgs(this.state.q)
      .then(res => {
        if (res && res.data.length > 0) {
          //simple validation before setting state
          this.setState({ orgs: res.data });
        } else {
          // if backend doesn't respond with appropriate data then reset UI.
          this.setDefaultState();
        }
      })
      .catch(err => {
        console.log(err + "-There is an error.");
        this.setDefaultState();
      });
  };

  //function to reset state when needed
  setDefaultState = () => {
    this.setState({
      orgs: [],
      message: "No results."
    });
  };

  //handles search form input
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.q);
    adoptsdk.search(this.state.q, response => {
      console.log("test", response);
    });
  };

  render() {
    return (
      <Container>
        <Banner />
        <Row>
          <Col sm={3}>
            <SideNav />
          </Col>
          <Col sm={9}>
            <div
              style={{
                height: 300,
                clear: "both",
                paddingTop: 120,
                textAlign: "center"
              }}
              className="jumbotron"
            >
              <h1>Get your own furry ball of fun!</h1>
              <h2>Find adoption organizations near you?</h2>
            </div>

            <form className="form-inline" role="form">
              <div className="form-group">
                <label htmlFor="Title" className="sr-only">
                  Search Adoption Organizations
                </label>
                <input
                  className="form-control"
                  id="Title"
                  type="text"
                  value={this.state.q}
                  placeholder="Enter a keyword..."
                  name="q"
                  onChange={this.handleInputChange}
                  size="62"
                  required
                />
              </div>
              <button
                onClick={this.handleFormSubmit}
                type="submit"
                className="btn btn-lg search-btn"
              >
                Search
              </button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">Results</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Adopt;
