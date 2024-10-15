import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import FAQ from "../../components/faq/FAQ";
import FeatureCard from "../../components/cards/Cards"

const HomePage: React.FC = () => {
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

  return (
    <div>
      <Banner />
      <Container>
        <Row className="mt-5 text-center">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <FeatureCard title={feature.title} description={feature.description} />
            </Col>
          ))}
        </Row>
        <FAQ />
      </Container>
    </div>
  );
};

export default React.memo(HomePage);
