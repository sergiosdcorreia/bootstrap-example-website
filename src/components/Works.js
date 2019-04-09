import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';

import Layout from './Layout';

const Works = () => (
    <Layout>
        <Jumbotron>
            <h2>Welcome to React-Bootstrap!</h2>
            <p>This is how to build a website with React, React-Router &amp; React-Bootstrap.</p>
        </Jumbotron>
        <Link to="/about">
            <Button bsStyle="primary">About</Button>
        </Link>
        <Link to="/skills">
            <Button bsStyle="primary">Skills</Button>
        </Link>
        <Link to="/contact">
            <Button bsStyle="primary">Contact</Button>
        </Link>
    </Layout>
)

export default Works;