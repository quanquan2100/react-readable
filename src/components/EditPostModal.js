import React from 'react';
import RichTextEditor from 'react-rte';
import Modal from "react-modal"
import IconTitle from "react-icons/lib/md/toc"
import { connect } from 'react-redux';
import IconAccount from "react-icons/lib/md/perm-identity"

// import action creater
import { closeModal } from '../actions'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class EditPostModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: RichTextEditor.createEmptyValue()
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      value: RichTextEditor.createEmptyValue()
    });
  }

  afterOpenModal() {
  }

  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  onChange = (value) => {
    this.setState({value});
    console.log(value.toString('html'));
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render() {
    const { modalIsOpen } = this.props;
    const { close } = this.props;
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
          <input className="input-text-input" type="text" placeholder="请输入标题"/>
        </div>
        <div className="input-text">
          <div className="input-text-icon"><IconAccount/></div>
          <input className="input-text-input" type="text" placeholder="请输入作者"/>
        </div>

        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
        />

        <select>
          <option default>请选择分类</option>
          <option value ="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
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
    modalIsOpen: state.globalReducer.modalIsOpen
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