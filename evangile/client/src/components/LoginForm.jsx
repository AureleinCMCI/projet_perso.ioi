import React, { useState } from 'react';
import '../style/login.css'; // Assure-toi que ce fichier contient le CSS fourni
import { useNavigate } from 'react-router-dom'; // <-- Assure-toi d'importer ce hook

function LoginForm() {
  // Pour le formulaire de connexion
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const navigate = useNavigate();
  // Pour l'animation du container (équivalent du JS vanilla)
  const [rightPanelActive, setRightPanelActive] = useState(false);

  // Gestion du submit (connexion)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) throw new Error('Erreur réseau');
      const data = await res.json();
      setMessage(data.message);
      if (data.success) {
        navigate('/hom');
      }
    } catch (err) {
      setMessage(err.message);
    }
  };
  // Gestion du submit (inscription)


  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Erreur lors de l\'inscription');

      setMessage('Inscription réussie ! Connecte-toi');
      setRightPanelActive(false); // Retourne au formulaire de connexion
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 30 }}>
        Weekly Coding Challenge #1: Sign in/up Form
      </h2>
      <div className={`container${rightPanelActive ? ' right-panel-active' : ''}`} id="container">
        {/* Sign Up */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
            {message && <p>{message}</p>}
          </form>
        </div>
        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost"
                id="signIn"
                type="button"
                onClick={() => setRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                type="button"
                onClick={() => setRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer>
        <p>
          Created with <i className="fa fa-heart"></i> by
          <a target="_blank" rel="noopener noreferrer" href="https://florin-pop.com"> Florin Pop</a>
          {" "} - Read how I created this and how you can join the challenge
          <a target="_blank" rel="noopener noreferrer" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"> here</a>.
        </p>
      </footer>
    </div>
  );
}

export default LoginForm;
