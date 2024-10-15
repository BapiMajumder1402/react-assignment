import { memo, useMemo } from "react";
import { Container, Row, Col, Card, Button, Carousel, Accordion } from "react-bootstrap";

const HomePage = () => {
  const features = useMemo(() => ([
    {
      title: "Feature One",
      description: "Description of feature one. This is a great feature that you will love!"
    },
    {
      title: "Feature Two",
      description: "Description of feature two. This feature makes things easier for you."
    },
    {
      title: "Feature Three",
      description: "Description of feature three. Discover how this feature can benefit you."
    },
  ]), []);

  const faqs = useMemo(() => ([
    {
      question: "What is Feature One?",
      answer: "Feature One provides a comprehensive solution to improve your workflow."
    },
    {
      question: "How do I get started?",
      answer: "You can get started by signing up and exploring our features."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, we offer a 14-day trial period for new users to explore our services."
    },
  ]), []);

  return (
    <Container className="mt-5">
      <Carousel controls={true} indicators={true} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/001/226/215/original/abstract-blue-stroke-watercolor-banner-background-vector.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Website!</h3>
            <p>Your one-stop solution for all your needs.</p>
            <Button variant="light" size="lg">Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/001/226/215/original/abstract-blue-stroke-watercolor-banner-background-vector.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Us Today!</h3>
            <p>Become a part of our growing community.</p>
            <Button variant="light" size="lg">Sign Up</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className="mt-5 text-center">
        {features.map((feature, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
                <Button variant="secondary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(HomePage);
