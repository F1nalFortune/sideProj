import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Side extends Component {


  render() {
    return (
      <div>
        <div id="nav-bar" className="ui inverted segment">
          <div id="sidenav_0">
            <Menu pointing secondary inverted>
                  <div id="">
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
                        active={this.props.location.pathname === '/faqs'}
                    />
                    </Link>
                    <Link to='/guestlist'>
                      <Menu.Item
                        name='guest List'
                        id='guestlist'
                        active={this.props.location.pathname === '/guestlist'}
                    />
                    </Link>
                  </div>
            </Menu>
          </div>
        </div>
      </div>

    )
  }
}


export default Side;