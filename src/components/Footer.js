import React from 'react';
import Layout from './Layout';

import { Row, Col, Button } from 'react-bootstrap';
import Behance from './icons/Behance';
import Email from './icons/Email';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import Twitter from './icons/Twitter';

const Footer = () => (
    <div style={{background: '#222222'}}>
        <Layout>
            <Row style={{borderTop: "1px solid #bbb", padding: "1rem"}}>
                <Col xs={12} style={{textAlign: "center"}}>
                    <Button variant="link" href="https://www.behance.net/SergioCorreiaDesign">
                        <Behance />
                    </Button>
                    <Button variant="link" href="mailto:sergiosdcorreia@gmail.com">
                        <Email />
                    </Button>
                    <Button variant="link" href="https://github.com/sergiosdcorreia">
                        <GitHub />
                    </Button>
                    <Button variant="link" href="https://www.linkedin.com/in/sergiocorreiadesigner/">
                        <LinkedIn />
                    </Button>
                    <Button variant="link" href="https://twitter.com/sergiosdcorreia?lang=en">
                        <Twitter />
                    </Button>
                </Col>
                <Col xs={12} style={{textAlign: "center", paddingTop:"1rem"}}>
                    <small style={{color: "#bbb", padding: "2rem", width: "100%"}}>&copy; Sérgio Correia 2019 </small>
                </Col>
            </Row>
        </Layout>
    </div>
)

export default Footer;