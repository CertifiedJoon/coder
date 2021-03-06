import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';

function ForgotPassword() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email !== '') {
        sendPasswordResetEmail(auth, email);
      }
      toast.success('Email Sent');
      setTimeout(() => {
        navigate('/sign-in');
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
          <Link className="forgotPasswordLink" to="/sign-in">
            Sign In
          </Link>
          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button type="submit" className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
