import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
  formType: 'Sign Up',
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
