const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
      <div className="project">
        <img src={image} alt={title} />
        <div className="project-info">
          <h3>{title}</h3>
          <p>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed Application
            </a>
          </p>
          <p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Project;