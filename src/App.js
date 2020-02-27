import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import CookieConsent from './components/CookieConsent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome
        </header>

        <CookieConsent
          buttonText="Accept"
          cookieName="CookieConsent">
            This website uses cookies, we need you to accept our the use of cookies during your
            session to continue browsing.
        </CookieConsent>
      </div>
    );
  }
}

export default App;
