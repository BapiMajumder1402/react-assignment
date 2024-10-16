import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../../contexts/UserProfileContext"; 

const Footer: React.FC = () => {
  const userProfileContext = useContext(UserProfileContext);
  if (!userProfileContext) {
    return <p>Error: UserProfileContext is not available.</p>;
  }
  const { userProfile } = userProfileContext;
  return (
    <footer className="text-center text-lg-start mt-auto text-white">
      <Container fluid>
        <Row>
          <Col md={4} className="p-3">
            <h5 className="text-uppercase text-white">About Us</h5>
            <p>
              We are committed to providing the best service for managing your
              profiles. Join us to explore more!
            </p>
          </Col>
          <Col md={4} className="p-3">
            <h5 className="text-uppercase text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile-form" className="text-white">
                  Profile Form
                </Link>
              </li>
              <li>
                <Link to={`/profile/${userProfile?._id}`} className="text-white">
                  Profile
                </Link>
              </li>
              {!userProfile && 
              <li>
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </li>
              }
            </ul>
          </Col>
          <Col md={4} className="p-3">
            <h5 className="text-uppercase text-white">Contact Us</h5>
            <p>
              Email:{" "}
              <a href="mailto:nbbapim@gmail.com" style={{ color: "white" }}>
                nbbapim@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+7005643072" style={{ color: "white" }}>
                7005643072
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center p-3">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Profile Register App. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
