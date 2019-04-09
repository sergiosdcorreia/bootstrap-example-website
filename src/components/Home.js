import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to React-Bootstrap!</h2>
                    <p>This is how to build a website with React, React-Router &amp; React-Bootstrap.</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Container>
        )
    }
}

export default Home;