import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import profileImage from "../assets/images/profile2.jpeg";
import msuLogo from "../assets/images/msuLogo.png";
import edx from "../assets/images/edx.png";
import signature from "../assets/images/signature.png";
import grccLogo from "../assets/images/grccLogo.png";

import ModalImage from "react-modal-image";
import "../styles/aboutMe.css"

export default function AboutMe() {
  const [codingDuration, setCodingDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visible to true after a delay
    }, 1000);

    const startDate = new Date("2023-09-10T18:00:00"); // September 10th, 2023, at 6:00 PM
    const interval = setInterval(() => {
      const currentDate = new Date();
      const elapsedTime = currentDate - startDate;

      const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor(
        (elapsedTime % (1000 * 60 * 60 * 24 * 365.25)) /
          (1000 * 60 * 60 * 24 * 30.44)
      );
      const days = Math.floor(
        (elapsedTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (elapsedTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

      setCodingDuration({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearTimeout(timer); // Cleanup timer
      clearInterval(interval); // Cleanup interval
    };
  }, []);

  const handleButtonClick = () => {
    setIsButtonClicked(true); // Hide button
  };

  return (
    <div>
      <Header />
      <Container fluid className="aboutMe-container">
        <Row className="justify-content-center ">
          <Col lg={6} md={8} sm={12}>
            <Row lg={2} className="d-flex justify-content-center text-center">
              <ModalImage
                small={profileImage}
                large={profileImage}
                alt="Photo of the developer, Greg Greve"
                className={`mb-3 profile-photo ${isVisible ? "visible" : ""}`}
              />
            </Row>
            <Row className="d-flex justify-content-center">
              {!isButtonClicked && (
                <Button
                  onClick={handleButtonClick}
                  className={`aboutMe-button mt-3 ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <span className="glowing-txt">
                    {" "}
                    [C<span className="faulty-letter">l</span>ick Me]{" "}
                  </span>
                </Button>
              )}
            </Row>
            <div
              className={`credentials-container ${
                isButtonClicked ? "visible" : ""
              }`}
            >
              <Row className="text-center credentials d-flex align-items-center">
                <h3 className="mb-2">Graduate of MSU EDX Bootcamp</h3>
              </Row>
              <Row className="text-center credentials d-flex align-items-center">
                <h3 className="mb-4">
                  Student at Grand Rapids Community College, A.A Pre-Computer
                  Science
                </h3>
              </Row>
              <Row className="text-center credentials d-flex align-items-center justify-content-center">
                <h4 className="mb-4">
                  <span className="italic">Full-Stack Web-Developer</span>
                </h4>
              </Row>
            </div>
            <Row
              className={`logo-images text-center d-flex align-items-center ${
                isButtonClicked ? "visible" : ""
              }`}
            >
              <Col sm={4} xs={4} className="logo-reflection">
                <img src={msuLogo} alt="MSU Logo" className="img-fluid" />
              </Col>
              <Col sm={4} xs={4} className="logo-reflection">
                <img src={edx} alt="edX Logo" className="img-fluid" />
              </Col>
              <Col sm={4} xs={4} className="logo-reflection">
                <img src={grccLogo} alt="GRCC Logo" className="img-fluid" />
              </Col>
            </Row>
          </Col>
          <Col
            className={`about-text ${isButtonClicked ? "visible" : ""}`}
            lg={8}
          >
            <h2>About the Developer</h2>
            <p className="bio-text">
              <span id="custom-text">Hello World</span>, and welcome to my
              portfolio! I'm Greg, a dedicated full-stack web developer fueled
              by a passion for creating immersive digital experiences. I began
              my coding journey {codingDuration.years} year(s),{" "}
              {codingDuration.months} months, {codingDuration.days} days,{" "}
              {codingDuration.hours} hours, {codingDuration.minutes} minutes,
              and {codingDuration.seconds} seconds ago. I hold a certificate in
              Full Stack Web Development from Michigan State University, where I
              gained hands-on experience and a solid foundation in the latest
              web technologies.
            </p>
            <p className="bio-text">
              My journey into the world of web development began with a
              curiosity for crafting dynamic and user-friendly interfaces. With
              proficiency in{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">HTML</span>
              </a>
              ,{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">JavaScript</span>
              </a>
              ,{" "}
              <a
                href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">Bootstrap</span>
              </a>{" "}
              and{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">CSS</span>
              </a>
              . I embarked on a journey to bring my creative visions to life.
              Along the way, I've expanded my skill set to include cutting-edge
              frameworks and libraries such as{" "}
              <a
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">React</span>
              </a>
              , as well as backend technologies like{" "}
              <a
                href="https://nodejs.org/en/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">Node.js</span>
              </a>{" "}
              and{" "}
              <a
                href="https://expressjs.com/en/starter/installing.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">Express</span>
              </a>
              .
            </p>
            <p className="bio-text">
              In addition to my technical expertise, I have a keen eye for
              design and user experience, ensuring that every project I
              undertake is not only functional but also visually appealing and
              intuitive to navigate. I believe that effective communication and
              collaboration are key to success, and I take pride in my ability
              to work closely with clients and team members to translate ideas
              into tangible solutions.
            </p>
            <p className="bio-text">
              My experience extends beyond frontend development, as I am also
              proficient in database management using{" "}
              <a
                href="https://dev.mysql.com/doc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">MySQL</span>
              </a>{" "}
              and other relational databases including{" "}
              <a
                href="https://docs.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">NoSQL</span>
              </a>{" "}
              and{" "}
              <a
                href="https://www.mongodb.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="bold-text">MongoDB</span>
              </a>
              . Whether it's building responsive websites, developing scalable
              web applications, or optimizing performance, I'm committed to
              delivering high-quality solutions that meet the unique needs of
              each project.
            </p>
            <p className="bio-text">
              In addition to my passion for web development, I lead a life
              filled with curiosity, diverse interests and hobbies that enrich
              my creativity and perspective. One of my greatest joys is
              exploring the great outdoors through landscape photography and
              hiking. There's something magical about capturing the beauty of
              nature through the lens of my camera and immersing myself in
              breathtaking landscapes.
            </p>
            <p className="bio-text">
              Traveling is another integral part of my life, as it allows me to
              experience different cultures, cuisines, and landscapes firsthand.
              From bustling cities to serene countryside settings, I find
              inspiration in the diversity of the world around me, which often
              fuels my creative endeavors in web development and beyond.
            </p>
            <p className="bio-text">
              Overall, my diverse interests and hobbies shape who I am as a web
              developer, infusing my work with creativity, curiosity, and a deep
              appreciation for the world around me. Whether I'm coding a website
              or exploring a new hiking trail, I approach each endeavor with
              enthusiasm, dedication, and a commitment to excellence and knowing
              the unknown.
            </p>
            <div className="d-flex justify-content-end">
              <div className="signature">
                <img
                  src={signature}
                  alt="Developer's Signature"
                  className="img-fluid signature-img"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
