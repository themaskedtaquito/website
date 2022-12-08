import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';

import Home from './Home';
import Manuscript from './Manuscript';
import Results from './Results';
import Contact from './Contact';


class App extends Component {

  constructor(props){
    super(props);
    
  }

  render() {

    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <header className = "Header">

              <Link to ="/" className = "title">Shadow Libraries</Link>
              <Link to ="/">Home</Link>
              <Link to ="/manuscript">About</Link>
              <Link to ="/results">Results</Link>
              <Link to ="/contact">Contact</Link>

            </header>


            <Route exact path = "/" component = {Home} />}
              }
            />
            <Route exact path = "/manuscript" component = {Manuscript} />}
              }
            />
             <Route exact path = "/results" component = {Results} />}
              }
            />
            <Route exact path = "/contact" component = {Contact} />}
              }
            />

          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
