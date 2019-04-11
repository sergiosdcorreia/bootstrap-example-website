import React from 'react';
import Layout from './Layout';
import { Col, Row, Image } from 'react-bootstrap';
import HtmlImage from '../assets/html.png';
import CssImage from '../assets/css3.png';
import JSImage from '../assets/js.png';

const Skills = () => (
    <Layout>
        <h2 style={{color: "#bbb"}}>Skills</h2>
        <h4>Programming</h4>
        <Row style={{marginTop: "2rem"}}>
            <Col style={{textAlign: "center"}}>
                <Image src={HtmlImage} roundedCircle />
                <h4 style={{marginTop:"1rem"}}>HTML5</h4>
            </Col>
            <Col style={{textAlign: "center"}}>
                <Image src={CssImage} roundedCircle />
                <h4 style={{marginTop:"1rem"}}>CSS3</h4>
            </Col>
            <Col style={{textAlign: "center"}}>
                <Image src={JSImage} roundedCircle />
                <h4 style={{marginTop:"1rem"}}>JavaScript</h4>
            </Col>
        </Row>
    </Layout>
)

export default Skills;