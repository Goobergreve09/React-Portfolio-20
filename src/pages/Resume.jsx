
const Resume = () => {
    return (
      <div className="container pt-4">
      <h2>Resume</h2>
      <a href="src\assets\Gregory M Greve Resume.pdf" download>
      <i className="bi bi-download" style={{ fontSize: '48px' }}></i>
      </a>
          <div className="col-md-6">
            {/* List of proficiencies */}
            <h3>Proficiencies</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Wix & Squarespace Website Solutions</li>
              {/* Add more proficiencies as needed */}
            </ul>
          </div>
        </div>
    );
  };
  
  export default Resume;