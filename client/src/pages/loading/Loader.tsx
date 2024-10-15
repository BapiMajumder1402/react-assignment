import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

const LoaderPage: React.FC = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col className="text-center">
          <Spinner animation="border" role="status" variant="primary" style={{ width: '4rem', height: '4rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="mt-3">
            <h5>Loading, please wait...</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoaderPage;
