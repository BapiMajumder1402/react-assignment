import React, { memo, useMemo } from "react";
import { Accordion } from "react-bootstrap";

const FAQ: React.FC = () => {
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
    <div className="mt-5 mb-5 p-4">
      <h2 className="mb-3">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default memo(FAQ);
