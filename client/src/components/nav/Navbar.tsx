import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import { UserProfileContext } from '../../contexts/UserProfileContext';  

const NavBar: React.FC = () => {
  const userProfileContext = useContext(UserProfileContext);
  const navigate = useNavigate();
  
  if (!userProfileContext) {
    return <p>Error: UserProfileContext is not available.</p>;
  }

  const { userProfile, clearUserProfile } = userProfileContext;

  const handleLogout = () => {
    clearUserProfile(); 
    localStorage.removeItem('userProfile');
    navigate('/');
  };

  return (
    <Navbar expand="lg" >
      <Navbar.Brand as={Link} to="/">Profile Management App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to={`/profile/${userProfile?._id}`} >Profile</Nav.Link>
          <Nav.Link as={Link} to="/profile-form" >Profile Form</Nav.Link>
          {!userProfile && 
          <Nav.Link as={Link} to="/login" className='none'>Login</Nav.Link>
          }
        </Nav>
        <Nav className="ml-auto"> 
          {userProfile ? (
            <>
              <Nav.Item>
                <h4 className="mb-0" style={{marginRight:"1.5rem",fontWeight:"600"}}>
                  {userProfile.name} 
                </h4>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outline-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  Logout
                </Button>
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
