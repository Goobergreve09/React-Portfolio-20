const Project = ({ title, image, deployedLink, githubLink, description }) => {
    return (
      <div className="project">
        <div className="project-info">
          <img src={image} alt={title} />
          <div className="project-details">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
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
        </div>
      </div>
    );
  };
  
  export default Project;