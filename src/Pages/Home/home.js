import React from 'react';
import './home.css';
import { animateScroll as scroll } from 'react-scroll';

class Home extends React.Component {
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
            <div>
                <div className="text-center bck-image">
                    <br/>
                    <h1 style={{color: '#2865FF'}} className="heading">Welcome to CannaDiary</h1>
                    <h2 style={{color: '#2865FF'}} className="bl_heading">A record of your personal weed journey</h2>

                    <h1 className="warning" style={{ color: "#2865FF", fontSize: '12px' }}>
                        Warning: YOU MUST BE <span style={{color: 'red'}}>AT LEAST 18 YEARS OLD</span> TO HAVE AN ACCOUNT ON THIS SITE
                    </h1>                                          
                </div>                            
            </div>
        );
    }
}


export default Home;