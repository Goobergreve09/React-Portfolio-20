import Header from "../components/Header";
import resumeFile from "../assets/Resume.pdf";
import certification from "../assets/Certification.pdf";
import presidentsList from "../assets/presidents_list.pdf";
import { Row, Col, Container } from "react-bootstrap";
import { FaCheckCircle, FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosSchool, IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import "../styles/resume.css";

const Resume = () => {
  const proficiencies = [
    {
      skill: "React.js",
      description: "Build dynamic web applications",
      iconClass: "bi bi-filetype-jsx icon",
    },
    {
      skill: "JavaScript",
      description: "Create interactive user interfaces",
      iconClass: "bi bi-filetype-js icon",
    },
    {
      skill: "Python",
      description: "Write clean, versatile scripts for web and data",
      iconClass: "bi bi-filetype-py icon",
    },
    {
      skill: "HTML",
      description: "Structure web pages",
      iconClass: "bi bi-code-slash icon",
    },
    {
      skill: "CSS",
      description: "Style web pages",
      iconClass: "bi bi-filetype-css icon",
    },
    {
      skill: "Bootstrap",
      description: "Design responsive layouts",
      iconClass: "bi bi-bootstrap icon",
    },
    {
      skill: "Express.js",
      description: "Develop backend APIs",
      iconClass: "bi bi-motherboard icon",
    },
    {
      skill: "Node.js",
      description: "Run JavaScript on the server",
      iconClass: "bi bi-motherboard icon",
    },
    {
      skill: "MySQL",
      description: "Manage relational databases",
      iconClass: "bi bi-database icon",
    },
    {
      skill: "NoSQL",
      description: "Work with non-relational databases",
      iconClass: "bi bi-database icon",
    },
    {
      skill: "MongoDB",
      description: "Store and retrieve data",
      iconClass: "bi bi-database icon",
    },
    {
      skill: "Wix & Squarespace Website Solutions",
      description: "Create professional websites",
      iconClass: "bi bi-display icon",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container pt-4 resume">
        <Row className="text-center">
          <Col sm={12} lg={4}>
            <h2>Resume</h2>
            <a href={resumeFile} download>
              <i className="bi bi-download" style={{ fontSize: "48px" }}></i>
            </a>
          </Col>
          <Col sm={12} lg={4}>
            <h2 className="wordGlow"> Certification</h2>
            <a href={certification} download>
              <i className="bi bi-download" style={{ fontSize: "48px" }}></i>
            </a>
          </Col>
          <Col sm={12} lg={4}>
            <h2 className="wordGlow"> Academic Honors</h2>
            <a href={presidentsList} download>
              <i className="bi bi-download" style={{ fontSize: "48px" }}></i>
            </a>
          </Col>
        </Row>
        <Container>
          <Row className="pb-0 text-center">
            <Col className="resumeHeader">
              <h3>Gregory M. Greve</h3>
            </Col>
          </Row>
          <Row className="pt-3 d-flex align-items-center">
            <Col sm={12} lg={4} className="resumeSubHeader">
              <h5>
                <span className="iconGlow">
                  <FaPhoneSquareAlt />
                </span>{" "}
                +1(231)-740-1594
              </h5>
            </Col>
            <Col sm={12} lg={4} className="resumeSubHeader">
              <h5>
                <span className="iconGlow">
                  <IoIosMail />
                </span>
                gregory.greve@yahoo.com
              </h5>
            </Col>
            <Col sm={12} lg={4} className="resumeSubHeader">
              <h5>
                <span className="iconGlow">
                  <FaLocationDot />
                </span>
                Grand Rapids, MI
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-center sectionTitle">
              <h3>Summary</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start summaryText">
              <p>
                Full Stack Web Developer with a passion for creative design and
                continuous learning. Skilled in developing user-friendly,
                full-stack web applications. Known for problem-solving,
                adaptability, and mastering complex skills to overcome technical
                challenges. Seeking to leverage hands-on project experience and
                technical skills in an internship or entry-level position.
              </p>
            </Col>
          </Row>
          <Row className="pb-2">
            <Col className="d-flex justify-content-center sectionTitle">
              <h3 className="pt-3">Technical Skills</h3>
            </Col>
          </Row>
          <div className="row">
            {proficiencies.map((proficiency, index) => (
              <div className="col-md-4 mb-4 text-center" key={index}>
                <div
                  className="border p-3 rounded"
                  style={{ backgroundColor: "white" }}
                >
                  <h3>{proficiency.skill}</h3>
                  <p>
                    <i className={proficiency.iconClass}></i>{" "}
                    {proficiency.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Row className="pb-0">
            <Col className="d-flex justify-content-center sectionTitle">
              <h3 className="pt-3">Experience</h3>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h5 className="pt-3 jobHeader">Graduate</h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h6 className="jobDescription">
                2023 - 2024 |{" "}
                <a
                  href="https://bootcamp.msu.edu/coding/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Michigan State University EDX Full-Stack Web Development
                  Coding Bootcamp
                </a>
              </h6>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>{" "}
                Completed an intensive bootcamp covering full-stack technologies
                and project collaboration.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>{" "}
                Gained hands-on experience in JavaScript, React.js, Node.js,
                MongoDB, and more.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>
                <span className="boldText">Key Achievement:</span> Graduated
                with Full-Stack Web Development Certification.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h5 className="pt-3 jobHeader">Supervisor</h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h6 className="jobDescription">
                2022 - 2024 |{" "}
                <a
                  href="https://immaculateflight.com/aircraft-detailing-services/interior-aircraft-detailing/?utm_term=immaculate%20flight&utm_campaign=Interior+Services&utm_source=adwords&utm_medium=ppc&hsa_acc=7518549926&hsa_cam=603975249&hsa_grp=30370208896&hsa_ad=690914093881&hsa_src=g&hsa_tgt=kwd-354979152927&hsa_kw=immaculate%20flight&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnV6ngg3fANTMuG1f1lpFOEwf2_L9VI7mi0EYSNZTI__DR0Ys-R-MFBoCJesQAvD_BwE"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Immaculate Flight
                </a>
                , Grand Rapids, MI
              </h6>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>{" "}
                Verified work quality and motivated teams to meet performance
                goals.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>{" "}
                Provided constructive feedback and set improvement objectives.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>
                <span className="boldText">Key Achievement:</span> Nominated
                twice for the ‘Mac-Flight Moments’ award.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h5 className="pt-3 jobHeader">Courier Driver</h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h6 className="jobDescription">
                2021 - 2022 |{" "}
                <a
                  href="https://reliabledelivery.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Reliable Delivery
                </a>
                , Grand Rapids, MI{" "}
              </h6>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>
                Ensured timely delivery of medical equipment and pharmaceuticals
                with accurate documentation.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>
                Streamlined logistical processes for pickup and delivery
                efficiency
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h5 className="pt-3 jobHeader">Assistant Manager</h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h6 className="jobDescription">
                2019 - 2021 |{" "}
                <a
                  href="https://tommys-express.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tommy's Express
                </a>
                , Grand Rapids, MI{" "}
              </h6>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>
                Assisted in the day-to-day operations, collaborating on business
                improvement strategies.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPoint">
                  <FaCheckCircle />
                </span>
                Maintained high service standards and company reputation.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-center sectionTitle">
              <h3 className="pt-3">Education</h3>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h5 className="pt-3 jobHeader">
                Associates in Computer Programming
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h6 className="jobDescription">
                <a
                  href="https://www.grcc.edu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Grand Rapids Community College
                </a>
                , Grand Rapids, MI | 2024 - Present{" "}
              </h6>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPointScholar">
                  <IoIosSchool />
                </span>{" "}
                <span className="boldText">Honors:</span> Awarded{" "}
                <span className="boldText">President’s List</span> honors 3× for
                academic excellence.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPointScholar">
                  <IoIosSchool />
                </span>{" "}
                Current student working toward an A.A in Computer Programming.
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPointScholar">
                  <IoIosSchool />
                </span>{" "}
                Focus on learning different programming languages, foundational
                concepts of computer science, and emerging technologies
              </h5>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint">
                <span className="checkPointScholar">
                  <IoIosSchool />
                </span>
                <span className="boldText">Coursework Includes:</span>{" "}
                Introduction to programming, Computer Networks, Algorithms, Data
                Structures, and Systems Analysis
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h5 className="pt-3 jobHeader">
                Full Stack Web Development Boot Camp Certification
              </h5>
            </Col>
          </Row>
          <Row className="pb-0">
            <Col className="d-flex justify-content-start">
              <h6 className="jobDescription">
                <a
                  href="https://msu.edu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Michigan State University
                </a>
                , Virtual | 2023 - 2024{" "}
              </h6>
            </Col>
          </Row>
          <Row className="pb-0 d-flex justify-content-start">
            <Col className="d-flex justify-content-start">
              <h5 className="bulletedPoint text-left">
                <span className="checkPointScholar">
                  <IoIosSchool />
                </span>{" "}
                Gained proficiency in JavaScript, CSS3, HTML5, Node.js,
                React.js, MongoDB, MySQL, Sequelize, and REST API’s and more
                while collaborating with a team to develop optimized
                applications.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
