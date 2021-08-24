import React from 'react';
import AuthForm from 'components/AuthForm';
import { authService, firebaseInstance } from '../fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider = authService;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    await authService.signInWithPopup(provider);
  };
  return (
    <div className="auth-container">
      <FontAwesomeIcon
        icon={faTwitter}
        color="#04AAFF"
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <div className="auth-btns">
        <button name="google" onClick={onSocialClick} className="auth-btn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button name="github" onClick={onSocialClick} className="auth-btn">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};

export default Auth;
