import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfileContext } from '../../contexts/UserProfileContext';
import { Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { loginUser } from '../../api/services'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const userProfileContext = useContext(UserProfileContext);
  const navigate = useNavigate();

  if (!userProfileContext) {
    return <p>Error: UserProfileContext is not available.</p>;
  }

  const { setUserProfile } = userProfileContext;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await loginUser(email);
      setUserProfile(data.data);
      toast.success(data.message);
      localStorage.setItem('userProfile', JSON.stringify(data.data));
      navigate(`/profile/${data.data._id}`);
    } catch (error: any) {
      if(error.message=="Account not found"){
        toast.error("Account not found please create a account first.")
        navigate('/profile-form')
      };
    }
  };

  return (
    <Container className="login-container page">
      <h2 className="text-center mb-5">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
