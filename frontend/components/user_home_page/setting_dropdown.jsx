import React from 'react';
import { connect } from 'react-redux';
import { closeSettingDropdown } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';



class SettingDropdown extends React.Component {

  handleCancelClick(){
    this.props.closeSettingDropdown();
  }

  handleLogoutClick(){
    this.props.logout();
    this.props.closeSettingDropdown();
  }

  render() {
    const setting_status = this.props.status ? '' : 'hidden';

    return(
      <div className={`setting-dropdown-parent ${setting_status}`} onClick={this.props.closeSettingDropdown}>
        <div className='setting-dropdown-child' onClick={e => e.stopPropagation()}>

          <li onClick={this.handleLogoutClick.bind(this)}>Log Out</li>
          <li onClick={this.handleCancelClick.bind(this)}>Cancel</li>
        </div>
      </div>
    )
  }

}







const mapStateToProps = (state) => {
  return {
    status: state.ui.setting_dropdown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    closeSettingDropdown: () => dispatch(closeSettingDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingDropdown);

// <li>Privacy and Security</li>
