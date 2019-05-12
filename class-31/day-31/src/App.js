import React from 'react';
import { connect } from 'react-redux';
import { createSection } from './action/section-actions';

import SectionForm from './component/SectionForm/SectionForm';

class App extends React.Component {
  render() {
    return(
      <div>
        <SectionForm onComplete={this.props.mappedSectionCreate}/>
        { this.props.sections.map(current => <p>{current.title}</p>)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // Vinicio - anything I return here WILL become props
  return {
    sections: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Vinicio - anything I return here WILL become props
  return {
    mappedSectionCreate: (section) => {
      dispatch(createSection(section.title));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

