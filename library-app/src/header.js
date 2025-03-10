import React, { Component } from 'react';

class Header extends Component {
  render() {
    return( <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand">Library App</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>);
  }
}

export default Header;
