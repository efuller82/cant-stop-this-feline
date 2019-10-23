import React, { Component } from 'react';
import Banner from '../components/Banner';
import CatGalleryCard from '../components/CatGalleryCard';

//! The next line is for dummy data only
import dummyCats from '../dummyCats.json';

import { Container, Row, Col } from 'react-grid-system';

import SideNav from '../components/SideNav';

// TODO add function that loads cats from database into leaderboard
// also will sort cats based upon cuteness score

// TODO function that allows user to click on a cat and show some love
// user will need to be signed in to access this feature
// figure logic to prevent multiple clicks from one user

// TODO add delete button to delete your own cat(s)


class Home extends Component {
    state = {
        dummyCats
    }

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
                        {this.state.dummyCats.map(dummyCat => (
                            <CatGalleryCard
                                id={dummyCat.id}
                                key={dummyCat.id}
                                name={dummyCat.name}
                                alias={dummyCat.alias}
                                image={dummyCat.image}
                                bio={dummyCat.bio}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;