import React from "react";
import { Container, Row, Col } from 'reactstrap';

const WelcomePage: React.FC = () => {
  return (
    <Container fluid className="bg-light-gray py-3">
      <div className="container">
      <Row className="align-items-center" style={{ height: '20vh' }}>
        <Col md="8">
          <h1 className="text-left">Welcome to Our Blog</h1>
          <p className="text-left">Explore our latest articles and insights</p>
        </Col>
      </Row>
      </div>
      
    </Container>
  );
};

export default WelcomePage;
