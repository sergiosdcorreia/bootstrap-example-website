import React from 'react';
import Layout from './Layout';

import { Row } from 'react-bootstrap';

const Footer = () => (
    <div style={{background: '#222222'}}>
        <Layout>
            <Row style={{ textAlign: "center"}}>
                <small style={{color: "#F8F9FA", padding: "2rem", width: "100%"}}>Sérgio Correia &copy; 2019 </small>
            </Row>
        </Layout>
    </div>
)

export default Footer;