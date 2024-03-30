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
import quiz from '../assets/images/quiz.jpg'
import Blockbuster from '../assets/images/Blockbuster.png'

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="portfolio">
        <div className="projects">
        <Project
            title="Blockbuster 2024 "
            image={Blockbuster}
            alt="Blockbuster Project Thumbnail"
            deployedLink="https://blockbuster2024.onrender.com/"
            githubLink="https://github.com/Goobergreve09/Blockbuster2024"
            description="A web application focused on Movies! This is a throw back built from the foundation
             of BLOCKBUSTER. Back when you used to look forward to going out to pick up that new VHS release, 
             which has now disappeared. Streaming services has since killed the once beloved BLOCKBUSTER. Either
              way we wanted to create a fun interactive site which allows users to be able to research various 
              movies, then can create a watch list and top favorite list. Not to mention how many books were
               written and then made into movie, how great would it be to search for that book too! If you don’t
                have wifi the book for the win! As a group of developers we decided to go with technologies like
                 React.js and React-Bootstrap for front end design and UI, and for the backend we used
                  technologies like Node.js, Express.js, MongoDB Atlas and MongoDB Compass, Apollo GraphQL,
                   bcrypt, and more."
          />
          <Project
            title="Weather Dashboard API"
            image={Weather}
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
          />
                    <Project
            title="Javascript Quiz"
            image={quiz}
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
          />
          <Project
            title="slAPI Social Media Website"
            image={slAPI}
            alt="slAPI Social Media Website Thumbnail"
            deployedLink="https://desolate-sierra-47851-d89056b73f92.herokuapp.com/"
            githubLink="https://github.com/Wruqe/SlApiI"
            description="slAPI, a pun of slappy, is a web application that serves as a repository for
             all things silly and whimsical. Users can explore a collection of funny and quirky data, as well
              as contribute their own by adding new silly entries."
          />
          <Project
            title="Brewery-Zip"
            image={brewZip}
            alt="Brew-Zip Website Thumbnail"
            deployedLink="https://whitney-simpson.github.io/Brewery-Search-Engine/"
            githubLink="https://github.com/Whitney-Simpson/Brewery-Search-Engine"
            description="As a Beer Lover, I want to seek out different breweries based on the city I am in or visiting, get their location on a map, and know the weather at said brewery. End user goal: Find a brewery in the city I am searching and know the weather forcast. End business goal: Provide beer lovers with a searching tool to find different breweries and know the weather."
          />
          <Project
            title="ReadMe Generator"
            image={readMe}
            alt="Read-Me Generator Thumbnail"
            githubLink="https://github.com/Goobergreve09/read-me-generator"
            description="A readME.md is a very important aspect to your project. It is also the go-to file for anyone to open or view your project. I have created an easy way to makeup a readME.md by only answering a few prompts in the terminal. All of the information about your Github project will be accessed here."
          />
          <Project
            title="Employee Manager"
            image={employee}
            alt="Employee Manager Thumbnail"
            githubLink="https://github.com/Goobergreve09/employee-manager-backend"
            description="This application was created and is used for backend development. This is an employee manager created with the mysql2 node package. It's an application designed for company's to view,update,and manage the employees through a database. It allows you to add,view, adelete roles, departments, and employees within a company. The application is used by the user through a series of prompts to be answered in the command line using nodes inquirer package. These answers directly effect the employee manager database."
          />
          <Project
            title="Tech-Blog"
            image={techBlog}
            alt="Tech Blog Thumbnail"
            deployedLink="https://techblogbackend-9bd2896f57e1.herokuapp.com/"
            githubLink="https://github.com/Goobergreve09/tech-blog-backend"
            description="
            As part of module 14 of the EDX web development bootcamp offered by Michigan State University, I developed a tech blog meeting specific criteria. This included implementing functional login and signup forms, enabling signed-in users to create, edit, and delete posts, as well as allowing users to add comments to posts. Additionally, each post and comment displayed the username and date of the content. The blog featured a user-friendly interface with accessible links for seamless navigation."
          />
          <Project
            title="Password Generator"
            image={passwordGen}
            alt="Password Generator Thumbnail"
            deployedLink="https://goobergreve09.github.io/js-password-generate/"
            githubLink="https://github.com/Goobergreve09/js-password-generate"
            description="
           This is a simple password generator using javascript. You will be prompted to use only certain criteria for the password, and then the password is created when generate password is clicked. Try it!"
          />
          <Project
            title="Work Day Scheduler"
            image={workday}
            alt="Work Day Scheduler Thumbnail"
            deployedLink="https://goobergreve09.github.io/js-workday-schedule/"
            githubLink="https://github.com/Goobergreve09/js-workday-schedule"
            description="
            The schedule is setup according to a 9 AM to 5 PM workday schedule routine. When each hour passes, that column will be greyed out, when it is of the current hour, that hour will show in yellow-orange, and when all hours are yet to come, those hours will appear in green. The styling of this challenge was done with bootstrap and CSS. When the user types in a description of the scheduled event and hit the save button at the end of each column the text content of the user description is saved into local storage and then kept there upon closing of the browser or a refreshing of the tab. There is also a date in the header of the page which changes based on the current day using dayjs."
          />
          <Project
            title="Note Taker with Express"
            image={noteTaker}
            alt="Note Taker Thumbnail"
            deployedLink="https://notetakerwithexpress-2bb39f89669b.herokuapp.com/notes"
            githubLink="https://github.com/Goobergreve09/note-taker-js"
            description="
            This was my first project created using express.js. It was created using the GET, POST, and DELETE methods from the express framework. It's a simple application for creating, saving, and deleting notes. This is very handy for anyone with a busy schedule, including myself. Each note is given a unique identifier and is saved in the server as a json object. This application was created using a mixture of frontend and backend."
          />
          <Project
            title="Property Manager with MySQL"
            image={property}
            alt="Property Manager Thumbnail"
            deployedLink=""
            githubLink="https://github.com/Goobergreve09/Property-Manager-with-MySQL"
            description="
            This application was created and is used for backend development. This is a property manager created with the mysql2 node package. It's an application designed for users to view,update,and manage the properties through a database. It allows you to add,view, and delete properties within your database. You can also view cost management by location or state. It automatically calculates cost with a preestimated mortgage cost tax by state that has been integrated into the CLI prompts. Simply answer the prompts given and the calculations with be completed for you.. The application is used by the user through a series of prompts to be answered in the command line using nodes inquirer package. These answers directly effect the property manager database.

My main motivation for this application was to create an application to allow an in"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
