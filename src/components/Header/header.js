import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logoimg from './img/mlogo1.jpg';
import { connect } from 'react-redux';
import { auth } from '../../actions';




class header extends React.Component {
constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true,
        loading:true,
        login: false
    };
}

componentDidMount(){
  this.props.dispatch(auth())
} 

componentWillReceiveProps(nextProps){
  this.setState({loading:false});
  if(!nextProps.user.login.isAuth){
      this.setState({
          login: false
      })
  }else{
      this.setState({
          login: true
      })
  }
}

toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed,
    });
    }

    render() {
 
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
          <div>
            {/* Nav Bar Start */}
            <nav
              style={{ backgroundColor: '#6F7280' }}
              className="navbar navbar-expand-lg navbar-light fixed-top"
            >
              <img
                style={{ width: "50px", marginLeft: "8%" }}
                src={logoimg}
                alt="logo"
              />
              <Link
                style={{
                  color: "#DA6E17",
                  marginLeft: "2%",
                  marginRight: "8%",
                }}
                to={"/"}
                className="navbar-brand"
              >
                CannaDiary
              </Link>
              <button
                onClick={this.toggleNavbar}
                className={`${classTwo}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link
                      style={{ color: "#FFCC01" }}
                      to={"/"}
                      className="nav-link"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      style={{ color: "#FFCC01" }}
                      to={"/journal"}
                      className="nav-link"
                    >
                      Journal
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      style={{ color: "#FFCC01" }}
                      to={"/messages"}
                      className="nav-link"
                    >
                      Messages
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#FFCC01" }}
                      to={"/profile"}
                      className="nav-link"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#FFCC01" }}
                      to={"/cyph-buddies"}
                      className="nav-link"
                    >
                      CyphBuddies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#FFCC01" }}
                      to={"/strain-search"}
                      className="nav-link"
                    >
                      StrainSearch
                    </Link>
                  </li>
                  {this.state.login ? (
                    <li className="nav-item">
                      <Link
                        style={{ color: "#FFCC01" }}
                        to={"/logout"}
                        className="nav-link"
                      >
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        style={{ color: "#FFCC01" }}
                        to={"/login"}
                        className="nav-link"
                      >
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
            {/* Nav Bar End */}
          </div>
        );
    }
}

function mapStateToProps(state){
  return{
      user:state.user
  }   
}


export default withRouter(connect(mapStateToProps)(header));
