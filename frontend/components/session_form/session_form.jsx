import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).then(()=> this.props.history.push('/homepage'));
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
      <form className="session-form" onSubmit={this.handleSubmit}>
          <input required type='text' value={this.state.username} onChange={this.updateUsername.bind(this)} placeholder='Username'/>
          <input required type='password' value={this.state.password} onChange={this.updatePW.bind(this)} placeholder='Password'/>
          <button>{this.props.formType}</button>
      </form>
    );
  }
}

export default SessionForm;
