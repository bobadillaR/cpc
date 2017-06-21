import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import Map from './components/map';
import Navbar from './components/navbar';
import ModalFormando from './components/modalFormando';
import ModalFortaleciendo from './components/modalFortaleciendo';
import ModalCapacitar from './components/modalCapacitar';
import ModalExperiencias from './components/modalExperiencias';
import ModalTutorial from './components/modalTutorial';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', () => this.setState({ height: window.innerHeight, width: window.innerWidth }));
  }

  render() {
    const { modal1, modal2, modal3, modal4, modal5 } = this.state;
    return (
      <Router>
        <div>
          <Navbar {...this.state} modalClick1={() => this.setState({ modal1: !modal1 })} modalClick2={() => this.setState({ modal2: !modal2 })} modalClick3={() => this.setState({ modal3: !modal3 })} modalClick4={() => this.setState({ modal4: !modal4 })} modalClick5={() => this.setState({ modal5: !modal5 })} />
          <Route exact path="/" render={props => <LandingPage {...this.state} {...props} modalClick1={() => this.setState({ modal1: !modal1 })} modalClick2={() => this.setState({ modal2: !modal2 })} modalClick3={() => this.setState({ modal3: !modal3 })} modalClick4={() => this.setState({ modal4: !modal4 })} modalClick5={() => this.setState({ modal5: !modal5 })} />} />
          <Route path="/plataforma" render={props => <Map {...this.state} {...props} />} />
          <Footer {...this.state} />
          <ModalFormando show={modal1} modalClick={() => this.setState({ modal1: !modal1 })} />
          <ModalFortaleciendo show={modal2} modalClick={() => this.setState({ modal2: !modal2 })} />
          <ModalCapacitar show={modal3} modalClick={() => this.setState({ modal3: !modal3 })} />
          <ModalExperiencias show={modal4} modalClick={() => this.setState({ modal4: !modal4 })} {...this.state} />
          <ModalTutorial show={modal5} modalClick={() => this.setState({ modal5: !modal5 })} {...this.state} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
