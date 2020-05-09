import React from 'react';
import image1 from './img/openjoint.jpg';
import { animateScroll as scroll } from 'react-scroll';

class messages extends React.Component {
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
            <div style={{marginTop: '5%'}}>                                
                <div className="row mt-5">                    
                    <div className="col-md-6 col-sm-12">                    
                        <img style={{width: '100%', height: '80vh'}} src={image1} alt="image"/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <form>
                        <div class="form-group">                            
                            <textarea class="form-control" placeholder="Message (Press Enter to Send)" required onChange={this.handleInputMessage} value={this.state.message}  rows="20"></textarea>
                        </div>
                        </form>
                    </div>
                </div>                              
            </div>
        );
    }
}


export default messages;