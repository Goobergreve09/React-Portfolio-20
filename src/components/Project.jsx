import { Row, Col, Container } from "react-bootstrap";

const Project = ({ title, image, deployedLink, githubLink, description, technologies }) => {
  return (
    <Container fluid className="project">
      <Col className="align-items-center justify-content-center text-center">
        <Row className="justify-content-center">
          <img src={image} alt={title} />
        </Row>
        <Row>
          <h3 className="project-title p-2">{title}</h3>
        </Row>
        {technologies && (
          <Row className="technologies-row justify-content-center align-items-center ">
            {technologies.map((tech, index) => (
              <Col key={index} md={4} sm={2} xs={4} lg={2} className="logo-column">
                <img src={tech.logoSrc} alt={tech.altText} />
              </Col>
            ))}
          </Row>
        )}
        <Row className = 'description-hero'>
        <Row className="justify-content-center description-container">
          <p className="project-description">{description}</p>
        </Row>
        </Row>
        <Row className="project-links p-1">
          <Col md={3}></Col>
          <Col md={3}>
            <p>
              <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed Application
              </a>
            </p>
          </Col>
          <Col md={3}>
            <p>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Project;



