import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Card, Row, Col, Image, Button } from 'react-bootstrap';

import Layout from './Layout';
import Jointhematch from '../assets/jointhematch.png';

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

        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={Jointhematch} />
            <Card.Body>
                <Card.Title>Join The Match</Card.Title>
                <Card.Text>UI/UX project. An App that helps you organize and join sports events.</Card.Text>
                <Card.Link href="">More</Card.Link>
            </Card.Body>
        </Card>
    </Layout>
)

export default Works;