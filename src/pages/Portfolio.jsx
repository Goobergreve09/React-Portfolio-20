import Header from "../components/Header";
import Project from "../components/Project";

import Weather from "../assets/images/weather.jpg";
import slAPI from "../assets/images/slAPI.png";
import brewZip from "../assets/images/brew-zip.png";
import readMe from "../assets/images/read-me.jpg";
import employee from "../assets/images/employee.jpg";
import techBlog from "../assets/images/tech-blog.jpg";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="portfolio">
        <div className="projects">
          <Project
            title="Weather API"
            image=  {Weather}
            alt="Weather API Project Thumbnail"
            deployedLink="https://goobergreve09.github.io/weather-dashboard-api/"
            githubLink="https://github.com/Goobergreve09/weather-dashboard-api"
            description="I created a weather dashboard for a user to easily find the weather of a specified city. When the user types in the city into the search bar the Current weather as well as the 5 day forecast will show for the city. The weather conditions include temperature, feels like temperature, humidity percentage, wind at miles per hour, sunset/sunrise, and a brief and unique description of the weather with an icon. The past 10 city searches for the user will be saved into local storage and can be clicked to bring up the dashboard for that respective city. There were no errors upon deployment."
          />
          <Project
            title="slAPI Social Media Website"
            image= {slAPI}
            alt="slAPI Social Media Website Thumbnail"
            deployedLink="https://desolate-sierra-47851-d89056b73f92.herokuapp.com/"
            githubLink="https://github.com/Wruqe/SlApiI"
            description="slAPI, a pun of slappy, is a web application that serves as a repository for all things silly and whimsical. Users can explore a collection of funny and quirky data, as well as contribute their own by adding new silly entries."
          />
          <Project
            title="Brewery-Zip"
            image=  {brewZip}
            alt="Brew-Zip Website Thumbnail"
            deployedLink="https://whitney-simpson.github.io/Brewery-Search-Engine/"
            githubLink="https://github.com/Whitney-Simpson/Brewery-Search-Engine"
            description="As a Beer Lover, I want to seek out different breweries based on the city I am in or visiting, get their location on a map, and know the weather at said brewery. End user goal: Find a brewery in the city I am searching and know the weather forcast. End business goal: Provide beer lovers with a searching tool to find different breweries and know the weather."
          />
          <Project
            title="ReadMe Generator"
            image= {readMe}
            alt="Read-Me Generator Thumbnail"
            githubLink="https://github.com/Goobergreve09/read-me-generator"
            description="A readME.md is a very important aspect to your project. It is also the go-to file for anyone to open or view your project. I have created an easy way to makeup a readME.md by only answering a few prompts in the terminal. All of the information about your Github project will be accessed here."
          />
          <Project
            title="Employee Manager"
            image= {employee}
            alt="Employee Manager Thumbnail"
            githubLink="https://github.com/Goobergreve09/employee-manager-backend"
            description="This application was created and is used for backend development. This is an employee manager created with the mysql2 node package. It's an application designed for company's to view,update,and manage the employees through a database. It allows you to add,view, adelete roles, departments, and employees within a company. The application is used by the user through a series of prompts to be answered in the command line using nodes inquirer package. These answers directly effect the employee manager database."
          />
          <Project
            title="Tech-Blog"
            image= {techBlog}
            alt="Tech Blog Thumbnail"
            deployedLink="https://techblogbackend-9bd2896f57e1.herokuapp.com/"
            githubLink="https://github.com/Goobergreve09/tech-blog-backend"
            description="
            As part of module 14 of the EDX web development bootcamp offered by Michigan State University, I developed a tech blog meeting specific criteria. This included implementing functional login and signup forms, enabling signed-in users to create, edit, and delete posts, as well as allowing users to add comments to posts. Additionally, each post and comment displayed the username and date of the content. The blog featured a user-friendly interface with accessible links for seamless navigation."
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
