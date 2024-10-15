import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserProfileContext } from '../../contexts/UserProfileContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const userProfileContext = useContext(UserProfileContext);
  const navigate = useNavigate();

  if (!userProfileContext) {
    return <p>Error: UserProfileContext is not available.</p>;
  }

  const { setUserProfile } = userProfileContext;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/login', {
        email,
      });
      setUserProfile(response.data.data);
      console.log(response.data.data);
      localStorage.setItem('userProfile', JSON.stringify(response.data.data));
      navigate(`/profile/${response.data.data._id}`); 
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed. Please try again.'); 
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
