import React from 'react';
import Modal from "react-modal"
import { connect } from 'react-redux';
import { closeCommentModal } from "../actions"
const customStyles = {
  overlay: {
    zIndex                : 11,
    backgroundColor       : "rgba(0,0,0,.3)"
  },
  content : {
    top                   : "50%",
    left                  : "50%",
    right                 : "auto",
    bottom                : "auto",
    marginRight           : "-50%",
    transform             : "translate(-50%, -50%)",
    boxShadow             : "0 0 15px 0 rgba(0, 0, 0, 0.4)",
    width                 : "400px"
  }
};

class ComfirmModal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { close, modalIsOpen } = this.props;
    const a = false;
    return (
      <Modal
        isOpen={a}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={() => close()}
        contentLabel="确认删除"
        style={customStyles}
        ariaHideApp={false}
      >
        <h2 className="comfirm-ctx"> 确认删除? </h2>
        <div className="comfirm-btns" >
          <div className="comfirm-btns-n" >取消</div>
          <div className="comfirm-btns-y" >确认</div>
        </div>
      </Modal>
    );
  }
}

function mapStateToProps ({ globalReducer, categoryReducer, postReducer, commentReducer }) {
  return {
    modalIsOpen: globalReducer.commentModalOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    close: () => dispatch(closeCommentModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComfirmModal);