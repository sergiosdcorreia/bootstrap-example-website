import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

import Layout from './Layout';
import Jointhematch from '../assets/join-the-match01.jpeg';
import Belaycords from '../assets/belaycords.jpg';

const Works = () => (
    <React.Fragment>

        <Layout>
            <h2 style={{color: "#bbb"}}>Works</h2>
            <CardDeck style={{padding: '1rem 0', marginTop: "2rem"}}>
                <Card bg='light'>
                    <Card.Img variant="top" src={Jointhematch} />
                    <Card.Body style={{ color: "#041122"}}>
                        <Card.Title>Join The Match</Card.Title>
                        <Card.Text>UI/UX project. An App that helps you organize and join sports events.</Card.Text>
                        <Card.Link href="">More details</Card.Link>
                    </Card.Body>
                </Card>

                <Card bg='light'>
                    <Card.Img variant="top" src={Belaycords} />
                    <Card.Body style={{ color: "#222222"}}>
                        <Card.Title>BelayCords</Card.Title>
                        <Card.Text>UI/UX college project. Design and development of a responsive website.</Card.Text>
                        <Card.Link href="">More details</Card.Link>
                    </Card.Body>
                </Card>

                <Card bg='light'>
                    <Card.Img variant="top" src={Jointhematch} />
                    <Card.Body style={{ color: "#222222"}}>
                        <Card.Title>BelayCords</Card.Title>
                        <Card.Text>UI/UX college project. Design and development of a responsive website.</Card.Text>
                        <Card.Link href="">More details</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Layout>
    </React.Fragment>
)

export default Works;