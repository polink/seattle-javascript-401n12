import React from 'react';
import * as authActions from '../../action/auth-actions';
import {Link} from "react-router-dom";
import {AuthForm} from "../AuthForm/auth-form";

import {connect} from 'react-redux';


class Landing extends React.Component{
  // Vinicio - this component needs to react to 3 different routes
  // Login
  // Signup
  // /

  // handleLogin = () => {};
  handleSignup = (user) => {
    return this.props.pDoSignUp(user);
  };

  render() {
    const rootJSX =
    <div>
      <h1>Welcome to our Application</h1>
      <Link to='/signup'> Sign up to our application</Link>
      <Link to='/login'> Login up to our application</Link>
    </div>;

    const signUpJSX =
      <div>
        <h1>Sign Up</h1>
        <AuthForm type='signup' onComplete={this.handleSignup}/>
        <Link to='/login'> Login up to our application</Link>
      </div>;

    const loginJSX =
      <div>
        <h1>Login</h1>
        <AuthForm type='login'/>
        <Link to='/signup'> Sign up to our application</Link>
      </div>;


    // const signUpJSX = ;
    // const loginJSX = ;
    const {location} = this.props;
    return(
      <div>
        <nav>
          {location.pathname === '/' ? rootJSX : undefined }
          {location.pathname === '/login' ? loginJSX : undefined }
          {location.pathname === '/signup' ? signUpJSX : undefined }
        </nav>
      </div>

    );

  }
}
// const mapStateToProps = (state) => {
//   return {
//     token: state.token,
//   };
// };

// I want to create a function that starts an async action
//Full Call: authACtions.signupRequest(user)(store)
// We apply the user here, and Thunk applies the store
// Vinicio - this p means that my function returns promise
const mapDispatchToProps = dispatch => ({
  pDoSignUp: user => {
    return dispatch(authActions.signupRequest(user))
  },
});


export default connect(null, mapDispatchToProps)(Landing);