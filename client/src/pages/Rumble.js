import React, { Component } from 'react';
import Banner from '../components/Banner';
import SideNav from '../components/SideNav';

import { Container, Row, Col } from 'react-grid-system';

class Rumble extends Component {
    render() {
        return (
            <Container>
                <Banner />
                <Row>
                    <Col sm={3}>
                        <SideNav />
                    </Col>
                    <Col sm={9}>
                        <h2 id='leaderboard'>Cat Rumble</h2>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Rumble;