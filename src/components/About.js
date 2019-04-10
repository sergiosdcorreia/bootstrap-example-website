import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import Layout from './Layout';
import Image02 from '../assets/image02.jpg';

const About = () => (
    <Layout>
        <h2 style={{ color: "#bbb", marginBottom: "2rem"}}>About</h2>
        <Row>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem"}}>Background</h4>
                <p><strong>Arts and Design</strong> was always his passion. He started in High School by joining the Arts and Crafts course.
                There he learned how to draw and paint with different tools and techniques.</p>
                <p>He also loved the geometry classes, which helped him to make the decision of studying <strong>Architecture</strong> in college, where he stayed for 3 years.
                There he improved his design skills, especially hand drawing and 3D modeling.</p>
                <Image src={Image02} rounded style={{width: "100%", color: "#F8F9FA", marginBottom: "1rem"}}/>
                <p>Later on he joined the <strong>Digital Arts and Multimedia</strong> course at another college.
                There he got most of his knowledge in design skills. Photography, Video, 3D Modeling and 2D/3D animations as well as the one that he focus on the most, Web Design.</p>
                <p>What he founded fascinating about <strong>Web Design</strong> was that he could use all of his design skills to create engaging user interfaces and user experiences for the web.
                For that he needed some programming knowledge so that's why he started to learn HTML, CSS and JavaScript.</p>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem"}}>Experience</h4>
                <p>About me 2nd column.</p>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <h4 style={{marginBottom: "1rem"}}>Hobbies</h4>
            <p>About my hobbies 3rd column.</p>
        </Col>
        </Row>
    </Layout>
)

export default About;