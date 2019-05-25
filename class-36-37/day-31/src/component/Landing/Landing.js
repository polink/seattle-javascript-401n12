import React from 'react';
import * as authACtions from '../../action/auth-actions';


class Landing extends React.Component{

}

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  // I want to create a function that starts an async action
  //Full Call: authACtions.signupRequest(user)(store)
  // We apply the user here, and Thunk applies the store
  pDoSignUp: user => dispatch(authACtions.signupRequest(user)),
});