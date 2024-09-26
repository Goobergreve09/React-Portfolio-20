import { useEffect, useState } from "react";

import Header from "../components/Header";
import Project from "../components/Project";
import Weather from "../assets/images/weatherr.jpg";
import slAPI from "../assets/images/slAPI.png";
import brewZip from "../assets/images/brew-zip.png";
import readMe from "../assets/images/read-me.jpg";
import employee from "../assets/images/employee.jpg";
import techBlog from "../assets/images/tech-blog.jpg";
import passwordGen from "../assets/images/pwg.jpg";
import workday from "../assets/images/workday.jpg";
import noteTaker from "../assets/images/notetaker.jpg";
import property from "../assets/images/property.jpg";
import quiz from "../assets/images/quiz.jpg";
import Blockbuster from "../assets/images/Blockbuster.png";
import adam from "../assets/images/adam.jpg";
import rolePlay from "../assets/images/rolePlay.jpg";
import photography from "../assets/images/photography.jpg";

import reactLogo from "../assets/images/reactLogo.png";
import bootstrapLogo from "../assets/images/bootstrapLogo.png";
import mongoDBlogo from "../assets/images/mongoDB.png";
import javascriptLogo from "../assets/images/javascriptLogo.png";
import apolloLogo from "../assets/images/apolloLogo.png";
import nodeLogo from "../assets/images/nodeLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import htmlLogo from "../assets/images/htmlLogo.png";
import mysqlLogo from "../assets/images/mysqlLogo.png";
import sequelizeLogo from "../assets/images/sequelizeLogo.png";
import tailwindLogo from "../assets/images/tailwindLogo.png";
import handlebarsLogo from "../assets/images/handlebarsLogo.png";
import expressLogo from "../assets/images/expressLogo.png";
import squarespaceLogo from "../assets/images/squarespaceLogo.png";

const Portfolio = () => {
  const [upTimeData, setUpTimeData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const apiUrl = "/.netlify/functions/uptime"; // Updated URL

    const getAverageResponseTimes = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.stat === "ok") {
          setUpTimeData(data.monitors); // Set the monitors data
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    getAverageResponseTimes();
  }, []);

  const getUpTimeForProject = (deployedLink) => {
    const monitor = upTimeData.find((m) => m.url === deployedLink);
    if (monitor) {
      console.log("Monitor data:", monitor); // Debugging: log the monitor data
      const averageResponseTime = parseFloat(monitor.average_response_time);
      console.log(averageResponseTime); // Convert to a float
      return !isNaN(averageResponseTime)
        ? Math.floor(averageResponseTime)
        : null; // Return floored value or null
    }
    return null; // Return null if no monitor found
  };

  const blockbusterAverageResponseTime = getUpTimeForProject(
    "https://blockbuster2024-clone.onrender.com/"
  );
  const javascriptQuizAverageResponseTime = getUpTimeForProject(
    "https://javascript-quiz-2-0.onrender.com/"
  );
  const weatherDashboardAverageResponseTime = getUpTimeForProject(
    "https://weather-dashboard-greg.netlify.app/"
  );
  const photographyAverageResponseTime = getUpTimeForProject(
    "https://weather-dashboard-greg.netlify.app/"
  );

  const blockbusterDescription = ( 
    <>
    This is a web application with a nostalgic Blockbuster theme. Our team went
             for a classic HTML ‘blockbuster’ look integrated with modern movie backgrounds and a
              comfortable UI with user-integration using <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">React-Bootstrap</a>, <a href="https://devdoc.net/web/developer.mozilla.org/en-US/docs/CSS/CSS3.html" target="_blank" rel="noopener noreferrer">CSS3</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">Javascript</a>. It uses RestAPI’s for movies(<a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB API</a>)
               and books(<a href="https://developers.google.com/books" target="_blank" rel="noopener noreferrer">Google Books API</a>) so 
              a user can search for any book or movie that they desire, and not to mention the <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noopener noreferrer">YouTube API</a> from the <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> framework. 
              Not only is this app requesting information
               from API’s, but it allows you as a user to save your favorite movies/books which
                get stored into a database(<a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a>). You can simply create an account, and begin
                 your search. The motivation behind this project was to create an application so for
                  book loves and movie lovers alike, can keep tabs on their favorite movies and 
                  watchlist. Personally, my primary role was a full-stack web developer. I helped 
                  setup queries to the database, implementing the backend server, and creating the 
                  design of the front end interface.
    </>
  )

  return (
    <div>
      <Header />
      <div className="portfolio">
        <div className="projects">
          <Project
            title="Blockbuster 2024"
            technologies={[
              { logoSrc: reactLogo, altText: "React" },
              { logoSrc: bootstrapLogo, altText: "Bootstrap" },
              { logoSrc: mongoDBlogo, altText: "MongoDB" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: apolloLogo, altText: "Apollo & GraphQL" },
              { logoSrc: nodeLogo, altText: "Node.js" },
            ]}
            image={Blockbuster}
            alt="Blockbuster Project Thumbnail"
            deployedLink="https://blockbuster2024-clone.onrender.com/"
            githubLink="https://github.com/Goobergreve09/Blockbuster2024"
            description={blockbusterDescription}
            upTime={blockbusterAverageResponseTime}
          />
          <Project
            title="Weather Dashboard API"
            image={Weather}
            technologies={[
              { logoSrc: reactLogo, altText: "React" },
              { logoSrc: bootstrapLogo, altText: "Bootstrap" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: nodeLogo, altText: "Node.js" },
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: htmlLogo, altText: "HTML5" },
            ]}
            alt="Weather API Project Thumbnail"
            deployedLink="https://weather-dashboard-greg.netlify.app/"
            githubLink="https://github.com/Goobergreve09/Weather-Dashboard-2.0"
            description="I've upgraded an older weather dashboard I created with this new weather dashboard. 
            This was created using react for a much more seamless and simple user experience. Headlining the 
            differences would be it's polished and clean UI.When you are done typing in a city just hit enter and
             your results will appear. You get the current time in that city whether it be yours or across the 
             globe, as well as current weather conditions including temperature to atmospheric pressure. That's
              not all, it also includes a future 5 day forecast of high and low temperatures. The responsiveness
               of React.js grid and flex component experience makes it easy on any user device. I've also added
                in a dark and light mode toggle for an enhanced user experience based on what they prefer. Once
                 the city is searched it will save that into a drop down titled ' recent searches' storing a 
                 maximum of 5 cities."
            upTime={weatherDashboardAverageResponseTime}
          />
          <Project
            title="Javascript Quiz"
            image={quiz}
            technologies={[
              { logoSrc: reactLogo, altText: "React" },
              { logoSrc: bootstrapLogo, altText: "Bootstrap" },
              { logoSrc: mongoDBlogo, altText: "MongoDB" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: apolloLogo, altText: "Apollo & GraphQL" },
              { logoSrc: nodeLogo, altText: "Node.js" },
            ]}
            alt="Javascript Quiz Project Thumbnail"
            deployedLink="https://javascript-quiz-2-0.onrender.com/"
            githubLink="https://github.com/Goobergreve09/Javascript-Quiz-2.0"
            description="The JavaScript Quiz Application deployed on Render is a user-friendly web-based quiz platform designed
             to test users' knowledge of JavaScript programming concepts. Built with simplicity and 
             functionality in mind, this application provides an interactive way for users to assess their 
             understanding of JavaScript while offering an enjoyable learning experience.It is a timed quiz with
              rules to the scoring. Keep results of your highscores and see where you rank among others with a
               global-highscores page all being stored in a MongoDB database. I used React.js for frontend, 
               and for my backend I used technologies like Node.js, Express.js, Apollo GraphQl, and bcrypt. 
               This application is also responsive so you can test your skills on mobile."
            upTime={javascriptQuizAverageResponseTime}
          />
          <Project
            title="Photography Portfolio"
            image={photography}
            technologies={[
              { logoSrc: reactLogo, altText: "React" },
              { logoSrc: bootstrapLogo, altText: "Bootstrap" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: nodeLogo, altText: "Node.js" },
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: htmlLogo, altText: "HTML5" },
            ]}
            alt="Photography Portfolio Thumbnail"
            deployedLink="https://greggrevephotography.netlify.app/"
            githubLink="https://github.com/Goobergreve09/greg-greve-photography-portfolio"
            description="This is my own personal photography portfolio. There is no backend, primarily the front end uses React, Bootstrap, and CSS3.
             The portfolio website is fully-responsive for mobile use. I'm using npm's package manager to organize and keep track of my libraries. 
             This website is hosted using Netlify and its speedy network capabilities with a React front end. I use npm's ModalImage for user's to get a better view of each photo, with 
             downloading capabilities. React-Bootstrap-s flex design was primarily used for a seamless responsive design for an ease of use on all platforms. 
              My motivation for this project was to have a place to store my images. I am an expert in landscape photography. I 
              use this website to store my photos in a way that's a bit more professional than your basic social media outlets."
            upTime={photographyAverageResponseTime}
          />
          <Project
            title="slAPI Social Media Website"
            technologies={[
              { logoSrc: mysqlLogo, altText: "MySQL" },
              { logoSrc: sequelizeLogo, altText: "Sequelize" },
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: handlebarsLogo, altText: "Handlebars.js" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: nodeLogo, altText: "Node.js" },
            ]}
            image={slAPI}
            alt="slAPI Social Media Website Thumbnail"
            deployedLink="https://desolate-sierra-47851-d89056b73f92.herokuapp.com/"
            githubLink="https://github.com/Wruqe/SlApiI"
            description="'slAPI' is a dynamic web application designed to curate a
             diverse array of humorous and whimsical content. Serving as a 
             comprehensive repository for lighthearted and entertaining contributions,
              users can explore a wide range of amusing anecdotes, quirky observations,
               and creative musings. Furthermore, users have the opportunity to 
               actively engage with the platform by submitting their own humorous
                entries, fostering a vibrant community of laughter and creativity.
                 Enhancing user interaction, the platform features a sophisticated 
                 rating system that aggregates user feedback to generate average
                  scores, providing valuable insights into content quality. 
                  Additionally, a real-time chat functionality fosters lively 
                  discussions and spontaneous exchanges, creating a dynamic
                   environment conducive to playful banter and camaraderie. Here 
                   we use Sequelize and MySQL2 for the backend database with frameworks like Express
                    and Node. The frontend is done with CSS3, HTML5, and Javascript."
          />
          <Project
            title="Brewery-Zip"
            technologies={[
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: htmlLogo, altText: "HTML5" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: tailwindLogo, altText: "TailwindCSS" },
            ]}
            image={brewZip}
            alt="Brew-Zip Website Thumbnail"
            deployedLink="https://whitney-simpson.github.io/Brewery-Search-Engine/"
            githubLink="https://github.com/Whitney-Simpson/Brewery-Search-Engine"
            description="As enthusiasts of fine craft beer, our aim is to facilitate the discovery of diverse breweries 
            tailored to the preferences of our users. With a focus on providing comprehensive information and 
            enhanced user experience, our platform enables individuals to effortlessly locate breweries based 
            on their current location or desired destination. Leveraging advanced technologies such as CSS3, 
            HTML5, JavaScript, and Tailwind CSS, we have developed a sophisticated tool that seamlessly 
            integrates brewery location data with real-time weather forecasts. Our overarching objective is to
             furnish beer aficionados with a robust search platform that not only facilitates brewery 
             exploration but also offers invaluable insights into weather conditions, thereby enhancing their 
             overall brewery-visiting experience."
          />
          <Project
            title="ReadMe Generator"
            technologies={[
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: nodeLogo, altText: "Node.js" },
            ]}
            image={readMe}
            alt="Read-Me Generator Thumbnail"
            githubLink="https://github.com/Goobergreve09/read-me-generator"
            description="A readME.md is a very important aspect to your project. It is also the go-to
             file for anyone to open or view your project. I have created an easy way to makeup a readME.md
              by only answering a few prompts in the terminal. All of the information about your Github
               project will be accessed here. The backend application uses the command line to create a readme by answering prompts
                by node's inquirer package. It us Node's fs and readline to create the readMe.md document. 
                This is something I still use on a weekly basis."
          />
          <Project
            title="Employee Manager"
            technologies={[
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: nodeLogo, altText: "Node.js" },
              { logoSrc: mysqlLogo, altText: "MySQL" },
            ]}
            image={employee}
            alt="Employee Manager Thumbnail"
            githubLink="https://github.com/Goobergreve09/employee-manager-backend"
            description="This application was created and is used for backend development. This is an employee manager created with the mysql2 node package. It's an application designed for company's to view,update,and manage the employees through a database. It allows you to add,view, adelete roles, departments, and employees within a company. The application is used by the user through a series of prompts to be answered in the command line using nodes inquirer package. These answers directly effect the employee manager database."
          />
          <Project
            title="Tech-Blog"
            technologies={[
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: nodeLogo, altText: "Node.js" },
              { logoSrc: mysqlLogo, altText: "MySQL" },
              { logoSrc: sequelizeLogo, altText: "Sequelize" },
              { logoSrc: handlebarsLogo, altText: "Handlebars.js" },
              { logoSrc: expressLogo, altText: "Express.js" },
            ]}
            image={techBlog}
            alt="Tech Blog Thumbnail"
            deployedLink="https://techblogbackend-9bd2896f57e1.herokuapp.com/"
            githubLink="https://github.com/Goobergreve09/tech-blog-backend"
            description="
            As part of module 14 of the EDX web development bootcamp offered by Michigan State University, I developed a tech blog meeting specific criteria. This included implementing functional login and signup forms, enabling signed-in users to create, edit, and delete posts, as well as allowing users to add comments to posts. Additionally, each post and comment displayed the username and date of the content. The blog featured a user-friendly interface with accessible links for seamless navigation."
          />
          <Project
            title="Password Generator"
            technologies={[
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: htmlLogo, altText: "HTML5" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
            ]}
            image={passwordGen}
            alt="Password Generator Thumbnail"
            deployedLink="https://goobergreve09.github.io/js-password-generate/"
            githubLink="https://github.com/Goobergreve09/js-password-generate"
            description="
           This is a simple password generator using javascript. You will be prompted to use only certain criteria for the password, and then the password is created when generate password is clicked. Try it!"
          />
          <Project
            title="Work Day Scheduler"
            technologies={[
              { logoSrc: bootstrapLogo, altText: "Bootstrap" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: htmlLogo, altText: "HTML5" },
            ]}
            image={workday}
            alt="Work Day Scheduler Thumbnail"
            deployedLink="https://goobergreve09.github.io/js-workday-schedule/"
            githubLink="https://github.com/Goobergreve09/js-workday-schedule"
            description="
            The schedule is setup according to a 9 AM to 5 PM workday schedule routine. When each hour passes, that column will be greyed out, when it is of the current hour, that hour will show in yellow-orange, and when all hours are yet to come, those hours will appear in green. The styling of this challenge was done with bootstrap and CSS. When the user types in a description of the scheduled event and hit the save button at the end of each column the text content of the user description is saved into local storage and then kept there upon closing of the browser or a refreshing of the tab. There is also a date in the header of the page which changes based on the current day using dayjs."
          />
          <Project
            title="Note Taker with Express"
            technologies={[
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: htmlLogo, altText: "HTML5" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: expressLogo, altText: "Express.js" },
            ]}
            image={noteTaker}
            alt="Note Taker Thumbnail"
            deployedLink="https://notetakerwithexpress-2bb39f89669b.herokuapp.com/notes"
            githubLink="https://github.com/Goobergreve09/note-taker-js"
            description="
            This was my first project created using express.js. It was created using the GET, POST, and DELETE methods from the express framework. It's a simple application for creating, saving, and deleting notes. This is very handy for anyone with a busy schedule, including myself. Each note is given a unique identifier and is saved in the server as a json object. This application was created using a mixture of frontend and backend."
          />
          <Project
            title="Property Manager with MySQL"
            technologies={[
              { logoSrc: javascriptLogo, altText: "Javascript" },
              { logoSrc: nodeLogo, altText: "Node.js" },
              { logoSrc: mysqlLogo, altText: "MySQL" },
            ]}
            image={property}
            alt="Property Manager Thumbnail"
            deployedLink=""
            githubLink="https://github.com/Goobergreve09/Property-Manager-with-MySQL"
            description="
            This application was created and is used for backend development. This is a property manager created with the mysql2 node package. It's an application designed for users to view,update,and manage the properties through a database. It allows you to add,view, and delete properties within your database. You can also view cost management by location or state. It automatically calculates cost with a preestimated mortgage cost tax by state that has been integrated into the CLI prompts. Simply answer the prompts given and the calculations with be completed for you.. The application is used by the user through a series of prompts to be answered in the command line using nodes inquirer package. These answers directly effect the property manager database.
            My main motivation for this application was to create an application to allow an in"
          />
          <Project
            title="Squarespace Web Design"
            technologies={[
              { logoSrc: squarespaceLogo, altText: "Squarespace" },
              { logoSrc: cssLogo, altText: "CSS3" },
            ]}
            image={adam}
            alt="Adam-Degi-Comedy Thumbnail"
            deployedLink="https://www.adamdegicomedy.com/"
            githubLink=""
            description="
            My skills in development are not just limited to VS code. I designed Stand-up Comedian Adam Degi's comedy 
            page on square space for an enhanced UI and easier accessible user experience. His concern was that his 
            page was not easy to navigate and it had an unorganized UI, so I reduced the amount of links and scrolling, and created a
              homepage with nav links. The page is used to display upcoming shows and events, a calendar of those upcoming shows
              and events, a contact form for clubs and organizations to reach him for bookings, and a cool about me page
              designed to meet his personality. The final product displays all of the above, I also integrated some photos I took of him as
               I am also a photographer, and I only needed to integrate code to remove the footer. "
          />
          <Project
            title="Role-Playing Game"
            technologies={[
              { logoSrc: cssLogo, altText: "CSS3" },
              { logoSrc: htmlLogo, altText: "HTML5" },
              { logoSrc: javascriptLogo, altText: "Javascript" },
            ]}
            image={rolePlay}
            alt="Password Generator Thumbnail"
            deployedLink="https://dragonrepel.netlify.app//"
            githubLink="https://github.com/Goobergreve09/Data-Structures-Algorithms"
            description="
           This is a fun project found on freecodecamp.org using basic fundamental javascript. These concepts helped create a Role Playing Game to help the town defeat the monsters and eventually the Dragon. This game involves strategic decision making as well as images that resemble the choices you make.

I wanted to keep my coding skills fresh while creating a fun game for friends or anybody else who wants to give it a shot and fight the dragon."
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
