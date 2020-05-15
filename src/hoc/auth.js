import React,{ Component } from 'react';
import { auth } from '../actions';
import { connect } from 'react-redux';

export default function(ComposedClass,reload){
    class AuthenticationCheck extends Component {
        
        state = {
            loading:true
        }

        componentDidMount(){
            this.props.dispatch(auth())
        } 

        componentWillReceiveProps(nextProps){
            this.setState({loading:false});
            if(!nextProps.user.login.isAuth){
                if(reload){
                    this.props.history.push('/login');
                }
            }else{
                if(reload === false){
                    // this.props.history.push('/my-account');
                }
            }
        }
        
        render(){
            if(this.state.loading){
                return (
                    <div className="text-center spinner-border text-info" role="status">
                        <br/><br/><br/><br/><br/><br/>
                        <span className="sr-only">Loading...</span>
                    </div>
                    );
            }
            return(
                <ComposedClass {...this.props} user={this.props.user}/>
            )
        }
    }

    function mapStateToProps(state){
        return{
            user:state.user
        }   
    } 

    return connect(mapStateToProps)(AuthenticationCheck);
}