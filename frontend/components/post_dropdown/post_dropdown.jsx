import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import { closePostDropdown } from '../../actions/modal_actions';

class Dropdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      image_url: 'fakeurl',
      photo: null,
      photoUrl: ''
    };
    this.closeDropdown = this.closeDropdown.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e){
    debugger
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      debugger
      this.setState({photo: file, photoUrl: fileReader.result});
    };
    debugger
    if(file){
      fileReader.readAsDataURL(file);
    }else {
      this.setState({ photo: null, photoUrl: ""});
    }
    e.target.value = '';
  }


  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    debugger
    formData.append('post[image_url]', this.state.image_url);
    formData.append('post[photo]', this.state.photo);
    this.props.createPost(formData);
    this.props.closePostDropdown();
    this.setState({
      photoUrl: '',
      photo: null
    });
  }

  closeDropdown(){
    debugger
    this.setState({
      photoUrl: '',
      photo: null
    });
    this.props.closePostDropdown();
  }


  AddNewPost(){
    document.getElementsByClassName('newpost-input')[0].click();
  }

  render(){
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    const post_status = this.props.status ? '' : 'hidden';
    return (
      <div className={`post-dropdown-parent ${post_status}`} onClick={this.closeDropdown}>
        <div className='post-dropdown-child' onClick={e => e.stopPropagation()}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="preview-holder">
              {preview}
            </div>
            <div className="file-buttons">
              <div className="open-file-button">
                <label>Choose a file
                  <input hidden type='file' accept='.gif, .jpg, .jpeg, .png'  onChange={this.updateFile} name='file'/>
                </label>
              </div>
              <span onClick={this.closeDropdown}>cancel</span>
              <button>submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    status: state.ui.post_dropdown_open
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closePostDropdown: () => dispatch(closePostDropdown()),
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
// <input hidden type='file' accept='.gif, .jpg, .jpeg, .png' onChange={this.updateFile.bind(this)} name='file'/>
