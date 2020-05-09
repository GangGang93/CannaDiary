import React from 'react';
import image from './img/cabin7originals.jpg';
import Friend1 from './img/purple.png';
import Friend2 from './img/aliens.jpg';
import Friend3 from './img/newfriends.png';
import Friend4 from './img/newimage.png';
import Friend5 from './img/dabbingfriend.jpg';
import Friend6 from './img/stuffblunt.jpg';

class cyphBuddies extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div style={{marginTop: '5%'}} className="container">                               
                <img style={{width: '100%', height: '100vh'}} src={image} alt="image"/>
                <div style={{marginTop: '1%'}} className="row">
                    <div className="col-md-4"><img style={{width: '100%', height: '100%'}} src={Friend1} alt="image"/></div>                                
                    <div className="col-md-4"><img style={{width: '100%', height: '100%'}} src={Friend2} alt="image"/></div>                                
                    <div className="col-md-4"><img style={{width: '100%', height: '100%'}} src={Friend3} alt="image"/></div>                                
                </div>
                <div style={{marginTop: '1%'}} className="row">
                    <div className="col-md-4"><img style={{width: '100%', height: '100%'}} src={Friend4} alt="image"/></div>                                
                    <div className="col-md-4"><img style={{width: '100%', height: '100%'}} src={Friend5} alt="image"/></div>                                
                    <div className="col-md-4"><img style={{width: '100%', height: '100%'}} src={Friend6} alt="image"/></div>                                
                </div>                
            </div> 
        );
    }
}


export default cyphBuddies;