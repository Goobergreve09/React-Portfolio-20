import { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  Row,
  Col,
  Container,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import statsGif from "../assets/images/statsGif.gif";
import { fetchGitHubUserData } from "../utils/githubFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function GitHub() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    fetchGitHubUserData("Goobergreve09").then((data) => {
      if (data) {
        console.log(data);
        setUserData(data.user);
        setRepos(data.repos);
      } else {
        console.error("No user data fetched");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Container fluid className="github-container" style={{ marginBottom: "125px" }}>
        {userData && (
          <div>
            <Container fluid>
              <Row className="p-3 githubBio d-flex-justify-content-center">
                <Col
                  lg={12}
                  className="text-center d-flex align-items-center justify-content-center"
                >
                  <Col className="text-center pb-3">
                    <a
                      href={`https://github.com/${userData.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="userName"
                    >
                      {userData.login}
                    </a>

                    <DropdownButton
                      id="dropdown-basic-button"
                      title={` Repositories (${
                        userData && userData.public_repos
                      })`}
                    >
                      <div
                        style={{
                          maxHeight: "400px",
                          overflowY: "auto",
                          overflowX: "hidden",
                        }}
                      >
                        {repos.map((repo) => (
                          <Dropdown.Item
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                          >
                            {repo.name}
                          </Dropdown.Item>
                        ))}
                      </div>
                    </DropdownButton>
                  </Col>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <img
                    src={userData.avatar_url}
                    style={{ maxWidth: "200px" }}
                    className="githubprofileImg"
                  />
                </Col>
              </Row>
            </Container>
            <Row className="p-3 d-flex justify-content-center align-items-center">
              <Col lg={4} md={12} className="d-flex justify-content-center ">
                <a
                  href="https://github.com/Goobergreve09?tab=overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Goobergreve09&show_icons=true&theme=radical"
                    alt="Goobergreve09's GitHub Stats"
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="statsBox"
                  />
                </a>
              </Col>
              <Col lg={4} md={12} className="d-flex justify-content-center ">
                <a
                  href="https://github.com/Goobergreve09?tab=overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Goobergreve09&layout=compact&langs_count=9&theme=radical&exclude_repo=Optifine-Mod-Coder-Pack-1.16.1,Projects"
                    alt="Greg's most used languages"
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="statsBox"
                  />
                </a>
              </Col>
              <Col lg={4} md={12} className="d-flex justify-content-center">
                <a
                  href="https://github.com/Goobergreve09?tab=overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=Goobergreve09&theme=radical"
                    alt="More Goobergreve09 Stats"
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="statsBox"
                  />
                </a>
              </Col>
            </Row>
            <Container className="skillsContainer">
              <Row>
                <Col className="text-center">
                  <Button
                    onClick={() => setShowSkills(!showSkills)}
                    className="skillsBtn"
                  >
                    <img src={statsGif} style={{ maxWidth: "25px" }} />
                    Show Skills <FontAwesomeIcon icon={faChevronDown} />
                  </Button>
                </Col>
              </Row>
              {showSkills && (
                <Row className="skillsRow ">
                  <Col xs={12} sm={6} md={4} className="text-center p-3">
                    <h6>Languages</h6>
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=fff" />
                  </Col>
                  <Col xs={12} sm={6} md={4} className="text-center p-3">
                    <h6>Frameworks</h6>
                    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
                    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
                    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                  </Col>
                  <Col xs={12} sm={6} md={4} className="text-center p-3">
                    <h6>Databases</h6>
                    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
                    <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />
                    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
                    <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" />
                  </Col>
                  <Col xs={12} sm={6} md={4} className="text-center p-3">
                    <h6>Cloud Computing Platforms</h6>
                    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
                    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
                  </Col>
                  <Col xs={12} sm={6} md={4} className="text-center p-3">
                    <h6>IDE</h6>
                    <img src="https://img.shields.io/badge/PyCharm-000?style=for-the-badge&logo=pycharm&logoColor=fff)" />
                    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
                  </Col>
                  <Col xs={12} sm={6} md={4} className="text-center p-3">
                    <h6>Operating Systems</h6>
                    <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
                    <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" />
                    <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" />
                    <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
                  </Col>
                  <Col xs={12} sm={12} md={12} className="text-center p-3">
                    <h6>Other Tools and Technologies</h6>
                    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
                    <img src="https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white" />
                    <img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" />
                    <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
                    <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" />
                    <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
                    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
                    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
                    <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" />
                    <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" />
                    <img src="https://img.shields.io/badge/Wix-000?style=for-the-badge&logo=wix&logoColor=white" />
                    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
                    <img src="https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white" />
                  </Col>
                </Row>
              )}
            </Container>
          </div>
        )}
      </Container>
    </>
  );
}

export default GitHub;
