import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  updateUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  updatePW(e){
    this.setState({
      password: e.target.value
    });
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.username} onChange={this.updateUsername('username')} />
        <input type='password' value={this.state.password} onChange={this.updatePW('password')} />
        <button>{this.props.formType}</button>
      </form>
    );
  }
}

export default SessionForm;
