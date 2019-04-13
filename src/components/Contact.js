import React from 'react';
import Layout from './Layout';
import { Row, Col, Card, Button } from 'react-bootstrap';

import SergioPicture from '../assets/sergio-janota.jpg';

const Contact = () => (
    <Layout>
        <h2 style={{color: "#bbb"}}>Contact</h2>
        <Row style={{padding: "2rem 0"}}>
            <Col xs={12} md={6}>
                <Card bg='light'>
                    <Card.Img variant="top" src={SergioPicture} />
                </Card>
            </Col>
            <Col xs={12} md={6} style={{ display: "flex", alignItems: "center", padding: "1rem"}}>
                <div style={{ color: "#bbb"}}>
                    <h1 style={{ lineHeight: "60px"}}>Sérgio Correia</h1>
                    <h4 style={{ lineHeight: "36px"}}>Frontend Designer.</h4>
                    <p style={{ lineHeight: "24px"}}>Phone: +351 91 091 34 56</p>
                    <Button variant="primary" href="mailto:sergiosdcorreia@gmail.com">Message him!</Button>
                </div>
            </Col>
        </Row>
    </Layout>
)

export default Contact;
