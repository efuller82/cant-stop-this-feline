import React, { Component } from 'react';
import Banner from '../components/Banner';
import CatGalleryCard from '../components/CatGalleryCard';

//! The next line is for dummy data only
//import dummyCats from '../dummyCats.json';

import { Container, Row, Col } from 'react-grid-system';

import SideNav from '../components/SideNav';
import API from "../utils/API";

// TODO add function that loads cats from database into leaderboard
// also will sort cats based upon cuteness score

// TODO function that allows user to click on a cat and show some love
// user will need to be signed in to access this feature
// figure logic to prevent multiple clicks from one user

// TODO add delete button to delete your own cat(s)


class Home extends Component {
    state = {
        cats: []
    }

    componentDidMount() {
        this.loadCats();
    }

    loadCats = () => {
        API.getCats()
            .then(res => {
                this.setState({ cats: res.data });
            })
            .catch(err => console.log(err));
    }

    deleteCat = id => {
        API.deleteCat(id)
            .then(res => this.loadCats())
            .catch(err => console.log(err));
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
                        <h2 id='leaderboard'>Cat Leaderboard</h2>
                        {this.state.cats.map(dummyCat => (
                            <CatGalleryCard
                                key={dummyCat.id}
                                id={dummyCat._id}
                                deleteCat={this.deleteCat}
                                catName={dummyCat.catName}
                                nickname={dummyCat.nickname}
                                imgURL={dummyCat.imgURL}
                                description={dummyCat.description}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;