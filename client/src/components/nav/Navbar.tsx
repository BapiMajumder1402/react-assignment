import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { UserProfileContext } from '../../contexts/UserProfileContext';  

const NavBar: React.FC = () => {
  const userProfileContext = useContext(UserProfileContext);

  if (!userProfileContext) {
    return <p>Error: UserProfileContext is not available.</p>;
  }

  const { userProfile, clearUserProfile } = userProfileContext;

  const handleLogout = () => {
    clearUserProfile(); 
    localStorage.removeItem('userProfile');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Profile Register App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/profile-form">Profile Form</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
        <Nav className="ml-auto"> 
          {userProfile ? (
            <>
              <Nav.Item>
                <Nav.Link disabled>
                  {userProfile.name} 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  Logout
                </Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <Nav.Item>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default React.memo(NavBar);
