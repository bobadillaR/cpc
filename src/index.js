import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Footer from './components/footer';
import LandingPage from './components/landingPage';
import Map from './components/map';
import Navbar from './components/navbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', () => this.setState({ height: window.innerHeight, width: window.innerWidth }));
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar {...this.state} onLogout={() => this.logout()} />
          <Route exact path="/" render={props => <LandingPage {...this.state} {...props} />} />
          <Route path="/plataforma" render={props => <Map {...this.state} {...props} />} />
          <Footer {...this.state} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
