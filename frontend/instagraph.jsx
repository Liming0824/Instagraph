import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUserId: window.currentUser.id
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    delete window.currentUser;
  } else {
    preloadedState = {};
  }





  const store = ConfigureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
