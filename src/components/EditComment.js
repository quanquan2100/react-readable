import React from 'react';
import Modal from "react-modal"
import { connect } from 'react-redux';

class EditComment extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapStateToProps (state) {
  // console.log("EditPostModal", state)
  return {
    modalIsOpen: state.globalReducer.commentModal
  }
}

function mapDispatchToProps (dispatch) {
  return {
    close: () => dispatch(closeModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostModal);