import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.props.remove_error();
  }


  loginDemo(){
    this.props.login({username: 'visitor', password: '123456'}).then(()=> this.props.history.push('/homepage'));
  }

  render () {
    let returnForm;
    if(this.props.location.pathname === '/login'){
      returnForm = (
        <section className="greeting_page">
          <div className='greeting_img'>
            <img src={window.openPage} />
          </div>

          <div className='form_and_link'>
            <div className='greeting_form'>
              <h1>Instagraph</h1>
              <LoginFormContainer />
              <p className='error-messages'>{this.props.errors.responseJSON}</p>
              <button onClick={this.loginDemo.bind(this)} className="demo-button">try demo</button>
            </div>
            <div className={'another_option_link'}>
              Don't have an account? <Link to='/'>Sign Up</Link>
            </div>
          </div>
        </section>
      )
    }else{
      returnForm = (
        <section className="greeting_page">
          <div className='greeting_img'>
             <img src={window.openPage} />
          </div>
          <div className='form_and_link'>
            <div className='greeting_form'>
              <h1>Instagraph</h1>
              <p className='signup_purpose' >
                Sign up to see photos and videos from your friends.
              </p>
              <SignupFormContainer />
              <p className='error-messages'>{this.props.errors.responseJSON}</p>
              <button onClick={this.loginDemo.bind(this)} className="demo-button">try demo</button>
              <p className='by_signup'>By signing up, you agree to our Terms, Data Policy and Cookies Policy</p>
            </div>

            <div className={'another_option_link'}>
              Have an account? <Link to='/login'>Log in</Link>
            </div>
          </div>
        </section>
      )
    }

    if (this.props.loggedIn) {
      //when user logged in , these if else situation should been showed else where
     let button = (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
      );
      return (
        <section className='logout_square'>
          {button}
        </section>
      );
    }else{
      return(
        <div>
          {returnForm}
        </div>
      );
    }
  }
}

export default Greeting;
