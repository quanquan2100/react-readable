import React from 'react';
import Modal from "react-modal"
import { connect } from 'react-redux';

import IconAccount from "react-icons/lib/md/perm-identity"
import IconTitle from "react-icons/lib/md/toc"


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
      body: "",
      author: ""
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  afterOpenModal() {
    if (this.props.modalState === "new") {
      this.setState({
        body: "",
        author: ""
      });
    } else {
      const { currentCommentId, commentList } = this.props;
      let commentData = {};
      commentList.forEach((comment) => {
        if (comment.id === currentCommentId) {
          commentData.body = comment.body;
          commentData.author = comment.author;
        }
      });
      this.setState({ ...commentData });
    }
  }

  updateAuthor = (author) => {
    this.setState({ author })
  }

  updateBody = (body) => {
    this.setState({ body })
  }

  render() {
    const { modalIsOpen, close, modalState } = this.props;
    const { author, body } = this.state;
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
          <div className="input-text-icon"><IconAccount/></div>
          <input className="input-text-input" type="text" placeholder="请输入作者" disabled={modalState !== "new"} value={author} onChange={(e) => this.updateAuthor(e.target.value)} />
        </div>
        <textarea className="input-textarea" rows="6" value={body} onChange={(e) => this.updateBody(e.target.value)} />
        <div style={{textAlign: "center"}}>
          <div className="modal-btn">确认</div>
        </div>
      </Modal>
    );
  }
}

function mapStateToProps ({ globalReducer, categoryReducer, postReducer, commentReducer }) {
  return {
    modalIsOpen: globalReducer.commentModalOpen,
    modalState: globalReducer.modalState,
    currentCommentId: globalReducer.currentCommentId,
    commentList: commentReducer.commentList
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