import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SideNav } from 'react-materialize';
import Side from './Side';

class MySideNav extends Component {


  render() {
    return (
      <div>
            
        <SideNav
          trigger={<a id="burger" href="#!"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a>}
          options={{ closeOnClick: true,
          edge: 'right' }}
          >
          <Side />
          <div>
            <img id="toad" src="http://i1028.photobucket.com/albums/y348/f1nalfortune/real_toad_zpssrophapz.png" border="0" alt="40Year" />
          </div>
        </SideNav>
        

      </div>


    )
  }
}


export default MySideNav;


