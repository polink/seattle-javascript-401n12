import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

// Computational Components
class AuthRedirect extends React.Component{
  render() {
    // Vinicio - I want to check the user's token and
    // take them to the appropriate route based on the token value
  }
}

// Vinicio - this component can either get the token as props OR
// connect to the store

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);