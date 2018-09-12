import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navigateToPage(){
    this.props.history.push('/homepage');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.navigateToPage.bind(this))
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
        <input type='text' value={this.state.username} onChange={this.updateUsername.bind(this)} placeholder='Username'/>
        <input type='password' value={this.state.password} onChange={this.updatePW.bind(this)} placeholder='Password'/>
        <button>{this.props.formType}</button>
      </form>
    );
  }
}

export default SessionForm;
