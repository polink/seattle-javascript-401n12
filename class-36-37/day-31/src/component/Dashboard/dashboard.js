import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    console.log('----------------------------------------------------');
    return(
      <p>In theory, we can only see this content if you are logged in</p>
    );
  }
}