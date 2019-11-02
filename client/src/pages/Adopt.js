import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import { Container, Row, Col } from "react-grid-system";
import API from "../utils/API";
import adoptsdk from "../utils/AdoptionSDK";
import Org from "../components/Orgs";
import { List } from "../components/List";
import "./stylePages.css";

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
    //this is my search term for location
    console.log(this.state.q);
    adoptsdk.search(this.state.q, response => {
      //this is what the API returns...
      console.log("This is my API response: ", response);

      //this is setting the state for orgs with the API response data
      this.setState({ orgs: response.organizations });

      //this is our new state for orgs
      console.log("This is my new state for orgs: ", this.state.orgs);
    });
  };

  render() {
    //  console.log(this.state.orgs);
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
              <h1><span className="font1">Get your own furry ball of fun!</span></h1>
              <h2><span className="font2">Find adoption organizations near you.</span></h2>
            </div>

            <form className="form-inline">
              <div className="form-group">
                <label htmlFor="Title" className="sr-only">
                  Search Adoption Organizations
                </label>
                <input
                  className="form-control"
                  id="Title"
                  type="text"
                  value={this.state.q}
                  placeholder="Enter city and state (ex. Austin, Tx) or zip-code"
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
            <h1 className="text-center"  id="searchHead"> Results</h1>
            {this.state.orgs.length ? (
              <List>
                {this.state.orgs.map(org => {
                  return (
                    <Fragment key={org.id}>
                      <Org
                        name={org.name}
                        city={org.address.city}
                        website={org.website}
                        mission_statement={org.mission_statement}
                        url={org.url}
                      />
                    </Fragment>
                  );
                })}
              </List>
            ) : (
              <div>
                <h2 className="heading-title text-center">
                  {this.state.message}
                </h2>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Adopt;
