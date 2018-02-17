import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import MySideNav from './MySideNav';

class NavBar extends Component {

  render() {
    return (
      <div>
        <div id="nav-bar" className="ui inverted segment">
          <Menu pointing secondary inverted>
            <div>
              <a href="#!"><h1 id="title" className='glow toad-font nowrap' data-text="TOAD'S PLACE">TOAD'S PLACE</h1></a>
              <p id="subtitle" className="glow">NEW HAVEN, CT</p>
            </div>
                <div id="desktop">
                  <Link to='/contact'>
                    <Menu.Item
                      name='contact'
                      id='contact'
                      active={this.props.location.pathname === '/contact'}
                  />
                  </Link>
                  <Link to='/mailer'>
                    <Menu.Item
                      name='mailer'
                      id='mailer'
                      active={this.props.location.pathname === '/mailer'}
                    />
                  </Link>
                  <Link to='/faqs'>
                    <Menu.Item
                      name='F A Qs'
                      id='faqs'
                      className='nowrap'
                      active={this.props.location.pathname === '/faqs'}
                  />
                  </Link>
                  <Link to='/guestlist'>
                    <Menu.Item
                      name='guest List'
                      id='guestlist'
                      className='nowrap'
                      active={this.props.location.pathname === '/guestlist'}
                  />
                  </Link>
                </div>
              <MySideNav />
          </Menu>
        </div>
        <div id="subhead" className="row center toad-font border">
          <div className="col s2 m2 l2">
            <p className="zero subhead">JAZZ</p>
          </div>
          <div className="col s2 m2 l2">
            <p className="zero subhead">ROCK</p>
          </div>
          <div className="col s2 m2 l2">
            <p className="zero subhead">FUNK</p>
          </div>
          <div className="col s2 m2 l2">
            <p className="zero subhead">BLUES</p>
          </div>
          <div className="col s2 m2 l2">
            <p className="zero subhead">REGGAE</p>
          </div>
          <div className="col s2 m2 l2">
            <p className="zero subhead nowrap">HIP-HOP</p>
          </div>
        </div>
      </div>

    )
  }
}


export default Navbar;