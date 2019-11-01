import React, { Component } from 'react';
import Banner from '../components/Banner';
import CatForm from '../components/CatForm';
import SideNav from '../components/SideNav';
import { Container, Row, Col } from 'react-grid-system';
import "./stylePages.css";


// TODO click event that adds all form data to db

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