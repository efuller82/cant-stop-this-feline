import React, { Component } from 'react';
import Banner from '../components/Banner';
import CatForm from '../components/CatForm';
import SideNav from '../components/SideNav';
import { Container, Row, Col } from 'react-grid-system';

class AddCat extends Component {
    render() {
        return (
            <Container>
                <Banner />
                <Row>
                    <Col sm={3}>
                        <SideNav />
                    </Col>
                    <Col sm={7}>
                        <CatForm />
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AddCat;