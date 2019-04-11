import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import Layout from './Layout';
import Image01 from '../assets/image01.jpg';
import Porto from '../assets/porto_bg.jpg';
import DoReMi from '../assets/doremi.jpg';

const About = () => (
    <Layout>
        <h2 style={{ color: "#bbb"}}>About</h2>
        <Row>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem", marginTop: "2rem"}}>Background</h4>
                <p><strong>Arts and Design</strong> was always his passion. He started in High School by joining the Arts and Crafts course.
                There he learned how to draw and paint with different tools and techniques.</p>
                <Image src={Image01} rounded style={{width: "100%", marginBottom: "1rem"}}/>
                <p>Later on he joined the <strong>Digital Arts and Multimedia</strong> course at another college.
                There he got most of his knowledge in design skills. Photography, Video, 3D Modeling and 2D/3D animations as well as the one that he focus on the most, Web Design.</p>
                <p>What he founded fascinating about <strong>Web Design</strong> was that he could use all of his design skills to create engaging user interfaces and user experiences for the web.
                Then he started to learn programming languages like HTML, CSS and JavaScript.</p>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem", marginTop: "2rem"}}>Experience</h4>
                <p>Starting to work as a freelance, he worked for a music academy where he was responsible for the branding and the shooting of their live anual concerts.
                He also worked on a promotional video for a fashion design brand.</p>
                <Image src={DoReMi} rounded style={{width: "100%", marginBottom: "1rem"}}/>
                <p>He has 2 years experience working as a <strong>Frontend Designer</strong>. He has been working on creating graphic designs for leaflets and brochures,
                on websites with HTML, CSS and jQuery, on 2D animations for improved UXs and prototypes, and lately he´s been working with JavaScript frameworks such as React.JS and Three.JS to create 3D experiences for web and mobile.</p>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <h4 style={{marginBottom: "1rem", marginTop: "2rem"}}>Hobbies</h4>
                <p>He loves photography, he learned by himself in a self-taught way, watching online tutorials and by experimenting. His first camera was the Fed 3, a rangefinder manual and analog camera. He shots landscapes, cities, and he loves to shot at the dance events as well.
                </p>
                <Image src={Porto} rounded style={{width: "100%", marginBottom: "1rem"}}/>
                <p>He loves to dance Lindy Hop, an American social dance that was born in New York in the 20's. It has evolved with the Jazz music of that time. Dancing is like having a triangular afair, between ourselves, our dance partner and the music.
                He loves the challenge of having to dance with the music, always thinking on the next move acording to the rhythm and music breaks.</p>
            </Col>
        </Row>
    </Layout>
)

export default About;