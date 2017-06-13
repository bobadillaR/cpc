import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import Map from './components/map';
import Navbar from './components/navbar';
import ModalExample from './components/modalExample';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      modal1: false,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', () => this.setState({ height: window.innerHeight, width: window.innerWidth }));
  }

  render() {
    const { modal1 } = this.state;
    return (
      <Router>
        <div>
          <Navbar {...this.state} modalClick={() => this.setState({ modal1: !modal1 })} />
          <Route exact path="/" render={props => <LandingPage {...this.state} {...props} />} />
          <Route path="/plataforma" render={props => <Map {...this.state} {...props} />} />
          <Footer {...this.state} />
          <ModalExample show={modal1} modalClick={() => this.setState({ modal1: !modal1 })} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
