import React, { Component } from 'react';
import { CardDeck, Card, Button, Modal } from 'react-bootstrap';

import Layout from './Layout';
import Jointhematch from '../assets/join-the-match01.jpeg';
import Belaycords from '../assets/belaycords.jpg';

class Works extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          show: false,
        };
    
        this.handleShow = () => {
          this.setState({ show: true });
        };
    
        this.handleHide = () => {
          this.setState({ show: false });
        };
    };
    
    render() {
      return (
    <React.Fragment>
        <Layout>
            <h2 style={{color: "#bbb"}}>Works</h2>
            <CardDeck style={{padding: '1rem 0', marginTop: "2rem"}}>
                <Card bg='light'>
                    <Card.Img variant="top" src={Jointhematch} />
                    <Card.Body style={{ color: "#041122"}}>
                        <Card.Title>Join The Match</Card.Title>
                        <Card.Text>UI/UX project. An App that helps you organize and join sports events.</Card.Text>
                        <Button variant="primary" onClick={this.handleShow}>More details</Button>
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
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
    </React.Fragment>
  )}
}

export default Works;
