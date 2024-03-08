import Header from '../components/Header';

const Resume = () => {
  const proficiencies = [
    { skill: 'React.js', description: 'Build dynamic web applications' },
    { skill: 'JavaScript', description: 'Create interactive user interfaces' },
    { skill: 'HTML', description: 'Structure web pages' },
    { skill: 'CSS', description: 'Style web pages' },
    { skill: 'Bootstrap', description: 'Design responsive layouts' },
    { skill: 'Express.js', description: 'Develop backend APIs' },
    { skill: 'Node.js', description: 'Run JavaScript on the server' },
    { skill: 'MySQL', description: 'Manage relational databases' },
    { skill: 'NoSQL', description: 'Work with non-relational databases' },
    { skill: 'MongoDB', description: 'Store and retrieve data' },
    { skill: 'Wix & Squarespace Website Solutions', description: 'Create professional websites' },
    // Add more proficiencies as needed
  ];

  return (
    <div>
      <Header />
      <div className="container pt-4 resume">
        <h2>Resume</h2>
        <a href="src\assets\Gregory M Greve Resume.pdf" download>
          <i className="bi bi-download" style={{ fontSize: '48px' }}></i>
        </a>
        <div className="row">
          {proficiencies.map((proficiency, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="border p-3 rounded" style={{ backgroundColor: 'white' }}>
                <h3>{proficiency.skill}</h3>
                <p>{proficiency.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
  