import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Container, Row, Col } from 'react-grid-system';

import SideNav from '../components/SideNav';

class Home extends Component {
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
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;