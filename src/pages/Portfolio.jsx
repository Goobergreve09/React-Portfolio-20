import Project from '../components/Project'; // Assuming Project component is in a separate file

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Greg Greve's Portfolio</h2>
      <div className="projects">
        <Project
          title="Weather API"
          image="src\assets\images\weather.jpg"
          deployedLink="https://goobergreve09.github.io/weather-dashboard-api/"
          githubLink="https://github.com/Goobergreve09/weather-dashboard-api"
        />
        <Project
          title="slAPI Social Media Website"
          image="src\assets\images\slAPI.png"
          deployedLink="https://desolate-sierra-47851-d89056b73f92.herokuapp.com/"
          githubLink="https://github.com/Wruqe/SlApiI"
        />
        {/* Add more Project components for other projects */}
      </div>
    </div>
  );
};

export default Portfolio;