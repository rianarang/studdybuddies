import React from 'react';
import VideoChat from './VideoChat';
import './App.css';
import { auth } from './config';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';


const App = () => {
  const[user] = useAuthState(auth);
  return (
    <div className="app">
      <header>
        <h1>StuddyBuddies</h1>
      </header>
      <section >
        {user ? <VideoChat /> : <SignIn />}
      </section>
        <footer>
        <p>
          Made by Ria, Chris, Nick and Isabella
        </p>
      </footer>
    </div>
  );
}


export default App;
