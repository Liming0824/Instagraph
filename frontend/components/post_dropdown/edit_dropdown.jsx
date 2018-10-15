import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { closeEditDropdown } from '../../actions/modal_actions';


class EditDropdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bio: this.props.currentUser.bio,
      user_photo: null,
      userPhotoUrl: this.props.currentUser.photo_image_url
    };
    this.cancelDropdown = this.cancelDropdown.bind(this);
  }

  cancelDropdown(){
    this.setState({
      bio: this.props.currentUser.bio,
      user_photo: null,
      userPhotoUrl: this.props.currentUser.photo_image_url
    });
    this.props.closeEditDropdown();
  }

  updateFile(e){
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({user_photo: file, userPhotoUrl: fileReader.result});
    };
    if(file){
      fileReader.readAsDataURL(file);
    }else{
      this.setState({user_photo: null, userPhotoUrl: ''});
    }
  }


  handleChange(e){
    this.setState({bio: e.target.value});
  }


  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append('user[id]', this.props.currentUser.id);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[user_photo]', this.state.user_photo);
    this.props.updateUser(formData);
    this.props.closeEditDropdown();
    this.setState({
      bio: this.props.currentUser.bio,
      user_photo: null,
      userPhotoUrl: this.state.userPhotoUrl
    });
  }


  render(){
    const preview = this.state.userPhotoUrl ? <img src={this.state.userPhotoUrl} /> : null ;
    const status = this.props.status ? '' : 'hidden';
    return(
      <div className={`edit-dropdown-parent ${status}`} onClick={this.props.closeEditDropdown}>
        <div className='edit-dropdown-child' onClick={e => e.stopPropagation()}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="edit-preview-holder">
              {preview}
            </div>

            <div className='bio-and-buttons'>
              <span className='text'>edit your bio: </span>
              <div className='preview-bio'>
                <textarea onChange={this.handleChange.bind(this)} type='text' value={this.state.bio}></textarea>
              </div>
              <div className="file-buttons">
                <div className="open-file-button">
                  <label>Choose a file
                    <input hidden type='file' accept='.gif, .jpg, .jpeg, .png' onChange={this.updateFile.bind(this)} name='file'/>
                  </label>
                </div>
                <span onClick={this.cancelDropdown}>cancel</span>
                <button>submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }


}


const mapStateToProps = (state, ownProps) => {
  return {
    status: state.ui.edit_dropdown,
    currentUser: state.entities.users[state.session.currentUserId],
  };
};


const mapDispatchToProps = (dispatch) => {
  return{
    closeEditDropdown: () => dispatch(closeEditDropdown()),
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDropdown);
