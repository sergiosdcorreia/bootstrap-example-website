import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import ImageJumbotron from './assets/sergio-website-assets.jpeg';
import Works from './components/Works';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{background: '#222222'}}>
          <Layout>
          <NavigationBar />
          <Jumbotron style={{backgroundImage: `url(${ImageJumbotron})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center 25%' }}>
          </Jumbotron>
            <Router>
              <Switch> 
                <Route exact path="/" component={Works} />
                <Route path="/skills" component={Skills} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
