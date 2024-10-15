import React, { memo } from "react";
import { Card, Button } from "react-bootstrap";
import { FeatureCardProps } from "../../interface/user"; 


const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="secondary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default memo(FeatureCard);
