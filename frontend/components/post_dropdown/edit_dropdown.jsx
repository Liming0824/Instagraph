import React from 'react';
import { connect } from 'react-redux';
import { closeEditDropdown } from '../../actions/modal_actions';


class EditDropdown extends React.Component {


  render(){

    const status = this.props.status ? '' : 'hidden';
    return(
      <div className={`edit-dropdown-parent ${status}`} onClick={this.props.closeEditDropdown}>
        <div className='edit-dropdown-child' onClick={e => e.stopPropagation()}>
          <img src={window.editFunnyImg}/>
        </div>
      </div>
    );
  }


}


const mapStateToProps = (state) => {
  return {
    status: state.ui.edit_dropdown
  };
};


const mapDispatchToProps = (dispatch) => {
  return{
    closeEditDropdown: () => dispatch(closeEditDropdown())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDropdown);
