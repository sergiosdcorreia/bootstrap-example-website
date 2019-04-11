import React, { Component } from 'react';
import { CardDeck, Card, Modal } from 'react-bootstrap';

import Layout from './Layout';
import Jointhematch from '../assets/join-the-match01.jpeg';
import Belaycords from '../assets/belaycords.jpg';
import BelayCordsModal01 from '../assets/belaycords-modal-01.jpg';
import BelayCordsModal02 from '../assets/belaycords-modal-02.jpg';
import BelayCordsModal03 from '../assets/belaycords-modal-03.jpg';

class Works extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          show1: false,
          show2: false,
          show3: false
        };
    
        this.handleShow1 = () => {
          this.setState({ show1: true });
        };

        this.handleShow2 = () => {
          this.setState({ show2: true });
        };

        this.handleShow3 = () => {
          this.setState({ show3: true });
        };
    
        this.handleHide = () => {
          this.setState({ show1: false, show2: false, show3: false });
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
                        <Card.Link onClick={this.handleShow1} href="#">More details</Card.Link>
                    </Card.Body>
                </Card>

                <Card bg='light'>
                    <Card.Img variant="top" src={Belaycords} />
                    <Card.Body style={{ color: "#222222"}}>
                        <Card.Title>BelayCords</Card.Title>
                        <Card.Text>UI/UX college project. Design and development of a responsive website.</Card.Text>
                        <Card.Link onClick={this.handleShow2} href="#">More details</Card.Link>
                    </Card.Body>
                </Card>

                <Card bg='light'>
                    <Card.Img variant="top" src={Jointhematch} />
                    <Card.Body style={{ color: "#222222"}}>
                        <Card.Title>BelayCords</Card.Title>
                        <Card.Text>UI/UX college project. Design and development of a responsive website.</Card.Text>
                        <Card.Link onClick={this.handleShow3} href="#">More details</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Layout>
        <Modal
          show={this.state.show1}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              This is Modal 1
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: "center"}}>
            <h4>
              A reversible USB charging cable that lasts forever! 
            </h4>
            <p>This is a college project where the students had to choose a project from the KickStarter platform and create a responsive website to promote the product.</p>
            <img src={BelayCordsModal01} style={{width: '100%'}} alt="BelayCords01" />
            <h6 style={{marginTop: "2rem", marginBottom: "1rem"}}>Desktop Layout</h6>
            <img src={BelayCordsModal02} style={{width: '100%'}} alt="BelayCords02" />
            <h6 style={{marginTop: "2rem", marginBottom: "1rem"}}>Mobile Layout</h6>
            <img src={BelayCordsModal03} alt="BelayCords03" />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.show2}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              BelayCords
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: "center"}}>
            <h4>
              A reversible USB charging cable that lasts forever! 
            </h4>
            <p>This is a college project where the students had to choose a project from the KickStarter platform and create a responsive website to promote the product.</p>
            <img src={BelayCordsModal01} style={{width: '100%'}} alt="BelayCords01" />
            <h6 style={{marginTop: "2rem", marginBottom: "1rem"}}>Desktop Layout</h6>
            <img src={BelayCordsModal02} style={{width: '100%'}} alt="BelayCords02" />
            <h6 style={{marginTop: "2rem", marginBottom: "1rem"}}>Mobile Layout</h6>
            <img src={BelayCordsModal03} alt="BelayCords03" />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.show3}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              This is Modal 3
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: "center"}}>
            <h4>
              A reversible USB charging cable that lasts forever! 
            </h4>
            <p>This is a college project where the students had to choose a project from the KickStarter platform and create a responsive website to promote the product.</p>
            <img src={BelayCordsModal01} style={{width: '100%'}} alt="BelayCords01" />
            <h6 style={{marginTop: "2rem", marginBottom: "1rem"}}>Desktop Layout</h6>
            <img src={BelayCordsModal02} style={{width: '100%'}} alt="BelayCords02" />
            <h6 style={{marginTop: "2rem", marginBottom: "1rem"}}>Mobile Layout</h6>
            <img src={BelayCordsModal03} alt="BelayCords03" />

          </Modal.Body>
        </Modal>
    </React.Fragment>
  )}
}

export default Works;
