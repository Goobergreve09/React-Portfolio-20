import Header from "../components/Header";

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
        <h2> Download Resume</h2>
        <a href="public/Gregory M Greve Resume.pdf" download>
          <i className="bi bi-download" style={{ fontSize: "48px" }}></i>
        </a>
        <div className="row">
          {proficiencies.map((proficiency, index) => (
            <div className="col-md-4 mb-4" key={index}>
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
      </div>
    </div>
  );
};

export default Resume;
