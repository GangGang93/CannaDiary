import React from 'react';
import './noMatch.css';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

class noMatch extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

componentDidMount(){
    scroll.scrollToTop();
  }

    render() {
        return (
          <div className="container">
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="error-template">
                  <h1>Oops!</h1>
                  <h2>404 Not Found</h2>
                  <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                  </div>
                  <div className="error-actions">
                    <br />
                    <Link to={"/"} className="loadmore">
                      <span className="glyphicon glyphicon-home" />
                      Take Me Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


export default noMatch;