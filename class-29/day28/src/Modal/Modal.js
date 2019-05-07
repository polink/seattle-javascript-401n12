import React from 'react';

import './Modal.scss';


export default class Modal extends React.Component{
  render(){
    const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';
    return(
      <div className={showOrHide}>
        <div className="modal-main">
          {this.props.children}
          <button onClick={this.props.hideModal}>Close</button>
        </div>
    </div>);
  }
}