// src/App.js
import React from 'react';
import LoginForm from './components/LoginForm';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="<YOUR_GOOGLE_CLIENT_ID>">
      <div className="App">
        <LoginForm />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
