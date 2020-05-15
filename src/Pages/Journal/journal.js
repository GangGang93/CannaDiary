import React from 'react';
import image1 from './img/journal.jpg';
import { addJournal, clearNewJournal } from '../../actions';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

class journal extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      journal: '',
      ownername: this.props.user.login.username,
      ownerId: this.props.user.login.id,
      showSuccessAlert: false
    };
}

componentDidMount(){
    scroll.scrollToTop();
    this.props.dispatch(clearNewJournal());
  }

  handleInputMessage = (e) => {
    e.preventDefault();
    this.setState({journal: e.target.value});
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.journals)
    {
      if(nextProps.journals.newJournal.ok)
      {        
        this.showSuccessMessage(); 
        this.props.dispatch(clearNewJournal()); 
      }   
    }
}  

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(addJournal(
      {
        journal_entry: this.state.journal,
        ownername: this.state.ownername,
        ownerId: this.state.ownerId
      }
    ));       
  }
  
    showSuccessMessage = () => {
      this.setState({
        journal: '',
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
                  New Journal Added Successfully...!!!
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
                      placeholder="Journal Entry"
                      required
                      onChange={this.handleInputMessage}
                      value={this.state.journal}
                      rows="17"
                    ></textarea>
                  </div>
                  <button type="submit" className="loadmore">
                    Submit
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
    journals: state.journal
  }
}

export default connect(mapStateToProps)(journal);