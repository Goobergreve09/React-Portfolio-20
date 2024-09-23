import { Row, Col, Container } from "react-bootstrap";
import projectBackground from "../assets/images/projectBackground.jpg";

import ModalImage from "react-modal-image";

const Project = ({
  title,
  image,
  deployedLink,
  githubLink,
  description,
  upTime,
  technologies,
}) => {

  const averageResponseTime = upTime ? Math.floor(upTime) : null;
  return (
    <Container
      fluid
      className="project"
      style={{ backgroundImage: `url(${projectBackground})` }}
    >
      {/* image from https://www.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_38129027.htm#fromView=search&page=4&position=8&uuid=054666d7-c24f-4630-8448-b8d7d6776951 Image by Mateus Andre on Freepik */}

      <Col className="align-items-center justify-content-center text-center">
        <Row className="justify-content-center">
          <ModalImage small={image} large={image} alt={title} />
        </Row>
        <Row>
          <h3 className="project-title p-2">{title}</h3>
        </Row>
        {technologies && (
          <Row className="technologies-row justify-content-center align-items-center ">
            {technologies.map((tech, index) => (
              <Col
                key={index}
                md={4}
                sm={2}
                xs={4}
                lg={2}
                className="logo-column"
              >
                <img src={tech.logoSrc} alt={tech.altText} />
              </Col>
            ))}
          </Row>
        )}
        <Row className="description-hero">
          <Row className="justify-content-center description-container">
            <p className="project-description">{description}</p>
          </Row>
          <Row className="justify-content-center description-container">
            {upTime && (
              <p className="uptime-Metrics">
               Average Response Time: {averageResponseTime} ms
              </p>
            )}
          </Row>
        </Row>
        <Row className="project-links p-1 justify-content-center">
          {deployedLink && (
            <Col md={3}>
              <p>
                <a
                  href={deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navLink"
                >
                  Deployed Application
                </a>
              </p>
            </Col>
          )}
          {githubLink && (
            <Col md={3}>
              <p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </p>
            </Col>
          )}
        </Row>
      </Col>
    </Container>
  );
};

export default Project;
