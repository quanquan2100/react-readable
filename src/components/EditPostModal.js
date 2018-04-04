import React from 'react';
import RichTextEditor from 'react-rte';
import Modal from "react-modal"
import IconTitle from "react-icons/lib/md/toc"
import { connect } from 'react-redux';
import IconAccount from "react-icons/lib/md/perm-identity"

// import action creater
import { closePostModal } from '../actions'

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
    boxShadow             : "0 0 15px 0 rgba(0, 0, 0, 0.4)"
  }
};


class EditPostModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: RichTextEditor.createEmptyValue(),
      title: "",
      author: "",
      category: ""
    };
    // this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  afterOpenModal() {
    if (this.props.modalState === "new") {
      this.setState({
        body: RichTextEditor.createEmptyValue(),
        title: "",
        author: "",
        category: ""
      });
    } else {
      const { currentPostId, postList } = this.props;
      let postData = {};
      postList.forEach((post) => {
        if (post.id === currentPostId) {
          postData.body = RichTextEditor.createValueFromString(post.body, 'html');
          postData.title = post.title;
          postData.author = post.author;
          postData.category = post.category;
        }
      });
      this.setState({ ...postData });
    }
  }

  onChange = (body) => {
    this.setState({body});
  }

  updateTitle = (title) => {
    this.setState({ title })
  }

  updateAuthor = (author) => {
    this.setState({ author })
  }

  updateCategory = (category) => {
    this.setState({ category })
  }


  render() {
    const { modalIsOpen, modalState, close, categories } = this.props;
    const { title, author, category } = this.state;
    return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={() => close()}
        contentLabel="Edit Post"
        style={customStyles}
        ariaHideApp={false}
      >
        <h1>编辑帖子</h1>
        <div className="input-text">
          <div className="input-text-icon"><IconTitle/></div>
          <input className="input-text-input" type="text" placeholder="请输入标题" value={title} onChange={(e) => this.updateTitle(e.target.value)} />
        </div>
        <div className="input-text">
          <div className="input-text-icon"><IconAccount/></div>
          <input className="input-text-input" type="text" placeholder="请输入作者" disabled={modalState !== "new"} value={author} onChange={(e) => this.updateAuthor(e.target.value)} />
        </div>

        <RichTextEditor
          value={this.state.body}
          onChange={this.onChange}
        />

        <select disabled={modalState !== "new"} value={category} onChange={(e) => this.updateCategory(e.target.value)} >
          <option default >请选择分类</option>
          {
            categories.map((category) => (<option value ={category.path} key={category.path} >{category.name}</option>))
          }
        </select>
        <div style={{textAlign: "center"}}>
          <div className="modal-btn">确认</div>
        </div>
      </Modal>
    );
  }
}

function mapStateToProps ({ globalReducer, categoryReducer, postReducer }) {
  return {
    modalIsOpen: globalReducer.postModalOpen,
    modalState: globalReducer.modalState,
    categories: categoryReducer.categories,
    currentPostId: globalReducer.currentPostId,
    postList: postReducer.postList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    close: () => dispatch(closePostModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostModal);