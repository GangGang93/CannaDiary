import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userRegister } from '../../actions';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

class SignUp extends Component { 

  state = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    error_username: '',
    error_email: '',
    error_password: '',
    error_confirmpassword: '', 
    showSuccessAlert: false,
    showFailAlert: false,
  }


  handleInputUserName = (event) => {
    this.setState({
      username: event.target.value
    })
    if(this.state.username.length<2)
    {
      this.setState({
        error_username: 'Username must have atleast 3 letters...!!!'
      });
    }
    else{
      this.setState({
        error_username: ''
      });
    }
  }

  handleInputEmail = (event) => {    

    this.setState({
      email: event.target.value
    })
   
    if ( !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email) ) {
      this.setState({
        error_email: 'Invalid Email...!!!'
      });
    }
    else {
      this.setState({
        error_email: ''
      });
    }  
  }

  handleInputPassword = (event) => {
    this.setState({
      password: event.target.value
    })
    if(this.state.password.length<7)
    {
      this.setState({
        error_password: 'Password must have atleast 8 letters...!!!'
      });
    }
    else{
      this.setState({
        error_password: ''
      });
    }
  }
  
  handleInputConfirmPassword = (event) => {
    this.setState({
      confirmpassword: event.target.value
    })
    
    if( this.state.password !== event.target.value )
    {
      this.setState({
        error_confirmpassword: 'Password miss match...!!!'
      });
    }
    else{
      this.setState({
        error_confirmpassword: ''
      });
    }
  }

  componentDidMount(){
    scroll.scrollToTop();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user.register === false){
        console.log(nextProps.user.register);
        this.showFailerMessage();      
    }else{
        this.setState({            
            username: '',
            email: '',
            password: '',
            confirmpassword: '',            
        })
        this.showSuccessMessage();
    }    
} 

  submitForm = (e) => {
    e.preventDefault();

    this.setState({ error:'' });
    this.props.dispatch(userRegister({
      username:this.state.username,
      email:this.state.email,
      password:this.state.password,
      image: 'dumy.jpg'      
  }));

  // console.log({
  //   username: this.state.username,
  //   email: this.state.email,
  //   password: this.state.password,
  //   image: "dumy.jpg",
  // });

  }

  showSuccessMessage = () => {
    this.setState({
      showSuccessAlert: true,
    });
    setTimeout(() => {
      this.setState({ showSuccessAlert: false });
      this.props.history.push('/login');
    }, 3000);    
}

showFailerMessage = () => { 
  this.setState({
    showFailAlert: true,
  });
  setTimeout(() => {
    this.setState({ showSuccessAlert: false });    
  }, 3000);    
}


render() {  
  
  return (
    <div className="container aboutus">
      <br/><br/><br/><br/><br/>
      <h2>Sign Up</h2>
      {
        this.state.showFailAlert?
          <div className="alert alert-danger" role="alert">
            Something went wrong... please try again!!!
          </div>
        :null
      }
      {
        this.state.showSuccessAlert?
          <div className="alert alert-primary" role="alert">
            User Added Successfully...!!!
          </div>
        :null
      }
      <form onSubmit={this.submitForm}>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" required className="form-control" onChange={this.handleInputUserName} value={this.state.username}  />
          <small className="form-text text-danger">{ this.state.error_username }</small>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" onChange={this.handleInputEmail} value={this.state.email}  aria-describedby="emailHelp" />
          <small className="form-text text-danger">{ this.state.error_email }</small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" required onChange={this.handleInputPassword}  value={this.state.password} />
          <small className="form-text text-danger">{ this.state.error_password }</small>
        </div>

        <div className="form-group">
          <label htmlFor="confirm-pass">Confirm Password</label>
          <input type="password" required className="form-control" onChange={this.handleInputConfirmPassword} value={this.state.confirmpassword}  />
          <small className="form-text text-danger">{ this.state.error_confirmpassword }</small>
        </div>
        
        <button type="submit" className="loadmore">Submit</button>        
      </form>      
      
      <div className="text-center">
        <Link to={'/login'}>Log in</Link> | <Link to={'/'}>Forget password</Link>
      </div>
      <br/>
    </div>
  );
}
};


function mapStateToProps(state){
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(SignUp);