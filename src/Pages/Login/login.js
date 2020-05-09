import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';



class Login extends Component {

  state = {    
    email: '',
    password: '',  
    error_email: '',
    error_password: '',   
    showSuccessAlert: false,
    showFailAlert: false,
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
 

submitForm = (e)=>{
  e.preventDefault();  
}

componentDidMount(){
    scroll.scrollToTop();
  }

showSuccessMessage = () => {
  this.setState({
    showSuccessAlert: true,
  });
  setTimeout(() => {
    this.setState({ showSuccessAlert: false });
    this.props.history.push('/');
  }, 3000);    
}

showFailerMessage = () => { 
this.setState({
  showFailAlert: true,
});
setTimeout(() => {
  this.setState({ showFailAlert: false });    
}, 3000);    
}
  

  render() {
    let user = this.props.user;
    return (
      <div className="container">
        <br/><br/><br/><br/><br/>
        <h2>Sign In</h2>
        {
        this.state.showFailAlert?
          <div class="alert alert-danger" role="alert">
            {user.login.message}
          </div>
        :null
      }
      {
        this.state.showSuccessAlert?
          <div class="alert alert-primary" role="alert">
            You have Login Successfully...!!!
          </div>
        :null
      }
        <form onSubmit={this.submitForm}>
        

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
      

        <button type="submit" className="btn btn-primary">Login</button>        
        </form>      

        <div className="text-center">
         <Link to={'/sign-up'}>SignUp if don't have account</Link>
        </div>
        <br/><br/><br/><br/><br/>
        
      </div>
    );
  }
  
};


export default Login;