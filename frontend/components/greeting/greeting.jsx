import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
class Greeting extends React.Component {

  render () {
    let returnForm;
    if(this.props.location.pathname === '/'){
      returnForm = (
        <section className="greeting_page">

          <div className='greeting_img'>
            <img src={window.openPage} />
          </div>

          <div className='form_and_link'>
            <div className='greeting_form'>
              <h1>Instagraph</h1>
              <LoginFormContainer />
          
            </div>

            <div className={'another_option_link'}>
              Don't have an account? <Link to='/signup'>Sign Up</Link>
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

          <div className='greeting_form'>
            <h1>Instagraph</h1>
            <SignupFormContainer />
            <span>By signing up, you agree to our Terms, Data Policy and Cookies Policy</span>
          </div>

          <div className={'another_option_link'}>
            Have an account? <Link to='/'>Log in</Link>
          </div>
        </section>
      )
    }

    if (this.props.loggedIn) {
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
