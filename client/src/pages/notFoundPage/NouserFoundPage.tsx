import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import notFound from "../../assets/404.jpg";
import { useNavigate } from "react-router-dom";

const NoUserFoundPage: React.FC = () => {
const navigate = useNavigate();
const handleGoHome = () => {
    navigate("/profile-form");
};

return (
    <Container className="text-center mt-5 page">
        <Image src={notFound} alt="404 Not Found" fluid className="notFoundImg" />
        <h2 className="mt-4">No User Found !</h2>
        <p>Please create profile.</p>
        <Button variant="primary" onClick={handleGoHome}>
            Create Profile
        </Button>
    </Container>
    );
};

export default React.memo(NoUserFoundPage);
