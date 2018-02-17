import React from 'react';
import NotFound from '../components/NotFound';
import { Switch, Route } from 'react-router-dom';
import MyFooter from '../components/MyFooter';
import Navbar from '../components/NavBar';

const App = () => (
      <div>
        <NavBar />
          <Switch>
             <Route exact path="/" component={Landing} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/mailer" component={Mailer} />
             <Route exact path="/faqs" component={FAQ} />
             <Route exact path="/guestlist" component={VIP} />
             <Route component={NotFound} />
          </Switch>
        <MyFooter />
      </div>

)

export default App;

// import React from 'react';
// import { Link } from 'react-router-dom';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.links = this.links.bind(this);
//   }

//  }


//   links() {
//       return (
//         <div>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//         </div>
//       )
//   }

//   render() {
//     return (
//       <div>
//         <nav>
//           <div className="nav-wrapper">
//             <a href="/" className="sitefont brand-logo">Trade Square</a>
//             <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
//             <ul className="right hide-on-med-and-down">
//               {this.links()}
//             </ul>
//             <ul className="side-nav" id="mobile">
//               {this.links()}
//             </ul>
//           </div>
//         </nav>
//         {this.props.children}
//         <Footer />
//       </div>

//      )
//   }
// }


// export default App;


