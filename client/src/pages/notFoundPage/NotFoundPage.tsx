import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import notFound from "../../assets/404.png";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const handleGoHome = () => {
    navigate('/')
  };

  return (
    <Container className="text-center mt-5 page">
        <Image src={notFound} alt="404 Not Found" fluid />
        <h2 className="mt-4">Oops! Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Button variant="primary" onClick={handleGoHome}>
            Go to Home
        </Button>
    </Container>
  );
};

export default React.memo(NotFoundPage);
