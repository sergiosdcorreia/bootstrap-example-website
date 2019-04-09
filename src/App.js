import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Works from './components/Works';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
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
      </React.Fragment>
    );
  }
}

export default App;
