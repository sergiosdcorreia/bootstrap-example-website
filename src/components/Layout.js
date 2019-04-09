import React from 'react';
import { Container } from 'react-bootstrap';

const Layout = props => (
    <Container  style={{background: '#222222', color: "#eeeeee"}}>
        {props.children}
    </Container>
)

export default Layout;