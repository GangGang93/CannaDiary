import React from 'react';
import logo from './img/logo.jpg';

class profile extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div style={{marginTop: '4%'}} className="container">
                 <div>  
                <br/>
                <div className="down">
                <span style={{color: '#008000'}}>Pretty Chill/Active</span>  
                <span style={{color: '#008000', float: 'right'}}>Super Stoned/Slumped</span> 
                </div>                               
                    <div className="text-center">
                        <h1 style={{color: '#008000'}} className='heading'>What's the Vibes??</h1>
                        <img style={{width: '60%', height: '60%'}} src={logo} alt="image"/>
                    </div>
                </div> 
            </div>
        );
    }
}


export default profile;