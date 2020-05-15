import React from 'react';
import image1 from './img/openjoint.jpg';
import { addMessage, clearNewMessage } from '../../actions';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

class messages extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      message: '',
      ownername: this.props.user.login.username,
      ownerId: this.props.user.login.id,
      showSuccessAlert: false
    };
}

componentDidMount(){
    scroll.scrollToTop();
    this.props.dispatch(clearNewMessage());
  }

  handleInputMessage = (e) => {
    e.preventDefault();
    this.setState({message: e.target.value});
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.message)
    {
      if(nextProps.message.newMessage.ok)
      {        
        this.showSuccessMessage(); 
        this.props.dispatch(clearNewMessage()); 
      }   
    }
} 

submitForm = (e) => {
  e.preventDefault();
  this.props.dispatch(addMessage(
    {
      message: this.state.message,
      ownername: this.state.ownername,
      ownerId: this.state.ownerId
    }
  ));       
}

showSuccessMessage = () => {
  this.setState({
    message: '',
    ownername: this.props.user.login.username,
    ownerId: this.props.user.login.id,
    showSuccessAlert: true
  });
  setTimeout(() => {
    this.setState({ showSuccessAlert: false });    
  }, 2000);    
}

    render() {
        return (
          <div style={{ marginTop: "5%" }}>
            {this.state.showSuccessAlert ? (
              <div class="alert alert-primary text-center" role="alert">
                Message Sent Successfully...!!!
              </div>
            ) : null}
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img
                  style={{ width: "100%", height: "80vh" }}
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <form onSubmit={this.submitForm}>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      required
                      onChange={this.handleInputMessage}
                      value={this.state.message}
                      rows="17"
                    ></textarea>
                  </div>
                  <button type="send" className="loadmore">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state){
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(messages);