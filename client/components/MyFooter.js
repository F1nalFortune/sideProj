import React from 'react';

class MyFooter extends React.Component {



  render() {
    return(
      <div id="width">
        <footer className="page-footer">
          <div id="foot" className="container center">
                <a target="_blank" rel="noopener noreferrer" className="icon" href="https://www.facebook.com/pages/Toads-Place/112426875442028?fref=ts"><i className="fa fa-facebook fa-4x" aria-hidden="true"></i></a>
                <a target="_blank" rel="noopener noreferrer" className="icon" href="http://www.pictame.com/user/toadsplace/658066777"><i className="fa fa-instagram fa-4x" aria-hidden="true"></i></a>
                <a target="_blank" rel="noopener noreferrer" className="icon" href="https://twitter.com/toadsplace"><i className="fa fa-twitter fa-4x" aria-hidden="true"></i></a>
          </div>
          <div className="footer-copyright">
            <div className="container">
                Toad's Place<br />
                300 York St, New Haven, CT 06511<br />
                203-624-8623<br /><br />
              <i className="fa fa-copyright" aria-hidden="true"> 2018 Toad's Place All Rights Reserved</i>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default MyFooter;
