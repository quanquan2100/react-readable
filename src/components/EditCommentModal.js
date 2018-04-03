import React from 'react';
import Modal from "react-modal"
import { connect } from 'react-redux';

// import IconComment from "react-icons/lib/md/comment"
import IconAccount from "react-icons/lib/md/perm-identity"
// import IconLike from "react-icons/lib/md/favorite-border"
// import IconAdd from "react-icons/lib/md/add"
// import IconArrowRight from "react-icons/lib/md/keyboard-arrow-right"
// import IconTag from "react-icons/lib/md/local-offer"
// import IconTime from "react-icons/lib/md/schedule"
import IconTitle from "react-icons/lib/md/toc"
// import IconGithub from "react-icons/lib/fa/github"
// import IconDelete from "react-icons/lib/md/delete"
// import IconEdit from "react-icons/lib/md/edit"
// import IconBack from "react-icons/lib/md/arrow-back"


// import action creater
import { closeCommentModal } from '../actions'

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


class EditCommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: RichTextEditor.createEmptyValue()
    };
  }

  render() {
    const { modalIsOpen, close } = this.props;
    return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={() => close()}
        contentLabel="Edit Comment"
        style={customStyles}
        ariaHideApp={false}
      >
        <h1>编辑评论</h1>
        <div className="input-text">
          <div className="input-text-icon"><IconTitle/></div>
          <input className="input-text-input" type="text" placeholder="请输入标题"/>
        </div>
        <div className="input-text">
          <div className="input-text-icon"><IconAccount/></div>
          <input className="input-text-input" type="text" placeholder="请输入作者"/>
        </div>
        <textarea className="input-textarea" rows="6"/>
        <div style={{textAlign: "center"}}>
          <div className="btn">确认创建</div>
        </div>
      </Modal>
    );
  }
}

function mapStateToProps (state) {
  // console.log("EditPostModal", state)
  return {
    modalIsOpen: state.globalReducer.commentModalOpen
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
)(EditCommentModal);