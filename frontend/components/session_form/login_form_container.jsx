import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  formType: 'Log In',
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
