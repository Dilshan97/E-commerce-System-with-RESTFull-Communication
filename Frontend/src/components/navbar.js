
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class navbar extends Component {
    render() {
        return (
            <div>
               
               <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/img/sellNby.png" width="150" height="40" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/add-item">Add Item</Link>
                    <Link className="nav-item nav-link" to="/all-items">All Item</Link>
                  </div>
                </div>
              </nav>

              <br/><br/><br/>
  
          </div>
            
        );
    }
}

export default navbar;