import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Title from './components/Title';
import Bio from './components/Bio';

import './App.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bill Murray'
    }
  }

  render() {
    return (
      <div className="card">

        <section className="section section-1">
          <div className="picture"></div>
        </section>

        <Router>
          <section className="section section-2">
            <nav className="navigation">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bio">Bio</Link></li>
            </nav>
            <div className="content">
              <Route exact path="/" render={() => <Title name={this.state.name} />}/>
              <Route path="/bio" component={Bio}/>
            </div>
          </section>
        </Router>
      </div>
    );
  }
}

export default ProfileCard;
