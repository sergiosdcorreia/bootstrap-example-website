import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import Layout from './Layout';
import Image02 from '../assets/image02.jpg';
import SergioShooting from '../assets/sergio-shooting.jpg';

const About = () => (
    <Layout>
        <h2 style={{ color: "#bbb"}}>About</h2>
        <Row>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem", marginTop: "2rem"}}>Background</h4>
                <p><strong>Arts and Design</strong> was always his passion. He started in High School by joining the Arts and Crafts course.
                There he learned how to draw and paint with different tools and techniques.</p>
                <p>He also loved the geometry classes, which helped him to make the decision of studying <strong>Architecture</strong> in college, where he stayed for 3 years.
                There he improved his design skills, especially hand drawing and 3D modeling.</p>
                <Image src={Image02} rounded style={{width: "100%", marginBottom: "1rem"}}/>
                <p>Later on he joined the <strong>Digital Arts and Multimedia</strong> course at another college.
                There he got most of his knowledge in design skills. Photography, Video, 3D Modeling and 2D/3D animations as well as the one that he focus on the most, Web Design.</p>
                <p>What he founded fascinating about <strong>Web Design</strong> was that he could use all of his design skills to create engaging user interfaces and user experiences for the web.
                For that he needed some programming knowledge so that's why he started to learn HTML, CSS and JavaScript.</p>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem", marginTop: "2rem"}}>Experience</h4>
                <p>He has 2 years experience working as a <strong>Frontend Designer</strong>. He has been working on creating graphic designs for leaflets and brochures,
                on websites with HTML, CSS and jQuery, on 2D animations for improved UXs and prototypes, and lately he´s been working with JavaScript frameworks such as React.JS and Three.JS to create 3D experiences for web and mobile.</p>
                <Image src={SergioShooting} rounded style={{width: "100%", marginBottom: "1rem"}}/>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem", marginTop: "2rem"}}>Hobbies</h4>
                <p>No one is perfect and one of his imperfections is communication and socializing. So he started to dance Lindy Hop in 2015.
                It's an American social dance that was born in New York in the 20's. It has evolved with the Jazz music of that time. This helps him to socialize, have some fun and make some friends.</p>
                <p>Other of his hobbies is photography, he self-taught himself since 2013. He shots landscapes, cities, and sometimes the dance events.
                </p>
            </Col>
        </Row>
    </Layout>
)

export default About;