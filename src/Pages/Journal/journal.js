import React from 'react';
import image1 from './img/journal.jpg';
import { animateScroll as scroll } from 'react-scroll';

class journal extends React.Component {
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
                        <div className="form-group">                            
                            <textarea className="form-control" placeholder="Journal Entry (Press Enter to Submit)" required onChange={this.handleInputMessage} value={this.state.message}  rows="20"></textarea>
                        </div>
                        </form>
                    </div>
                </div>                              
            </div>
        );
    }
}


export default journal;