import Header from "../components/Header";

import profileImage from "../assets/images/profile.jpg";
import msuLogo from "../assets/images/msuLogo.png";
import edx from "../assets/images/edx.png";

export default function AboutMe() {
  return (
    <div>
      <Header />
      <div className="container pt-4 about-me-container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={profileImage}
              alt="Profile Image"
              className="img-fluid rounded-circle mb-3"
            />

            <div className="text-center credentials">
              <h2 className="mb-4">Graduate of MSU EDX Bootcamp</h2>
              <h4 className="mb-4">Full-Stack Web-Developer</h4>
              <div className="logo-images">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={msuLogo}
                    alt="MSU Logo"
                    className="img-fluid mr-4"
                  />
                  <img src={edx} alt="edX Logo" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 about-text">
            <h2 className="mb-4">About the Developer</h2>
            <p className="bio-text">
            <span id="custom-text">Hello World</span>,  and welcome to my portfolio! I'm Greg, a dedicated
              full-stack web developer fueled by a passion for creating
              immersive digital experiences. I hold a certificate in Full Stack
              Web Development from Michigan State University, where I gained
              hands-on experience and a solid foundation in the latest web
              technologies.
            </p>
            <p className="bio-text">
              My journey into the world of web development began with a
              curiosity for crafting dynamic and user-friendly interfaces. With
              proficiency in HTML, JavaScript, Bootstrap, and CSS. I embarked on
              a journey to bring my creative visions to life. Along the way,
              I've expanded my skill set to include cutting-edge frameworks and
              libraries such as React, as well as backend technologies like
              Node.js and Express.
            </p>
            <p className="bio-text">
              In addition to my technical expertise, I have a keen eye for
              design and user experience, ensuring that every project I
              undertake is not only functional but also visually appealing and
              intuitive to navigate. I believe that effective communication and
              collaboration are key to success, and I take pride in my ability
              to work closely with clients and team members to translate ideas
              into tangible solutions.
            </p>
            <p className="bio-text">
              My experience extends beyond frontend development, as I am also
              proficient in database management using MySQL and other relational
              databases. Whether it's building responsive websites, developing
              scalable web applications, or optimizing performance, I'm
              committed to delivering high-quality solutions that meet the
              unique needs of each project.
            </p>
            <p className="bio-text">
              In addition to my passion for web development, I lead a life
              filled with curiosity, diverse interests and hobbies that enrich
              my creativity and perspective. One of my greatest joys is
              exploring the great outdoors through landscape photography and
              hiking. There's something magical about capturing the beauty of
              nature through the lens of my camera and immersing myself in
              breathtaking landscapes.
            </p>
            <p className="bio-text">
              Traveling is another integral part of my life, as it allows me to
              experience different cultures, cuisines, and landscapes firsthand.
              From bustling cities to serene countryside settings, I find
              inspiration in the diversity of the world around me, which often
              fuels my creative endeavors in web development and beyond.
            </p>
            <p className="bio-text">
              Overall, my diverse interests and hobbies shape who I am as a web
              developer, infusing my work with creativity, curiosity, and a deep
              appreciation for the world around me. Whether I'm coding a website
              or exploring a new hiking trail, I approach each endeavor with
              enthusiasm, dedication, and a commitment to excellence and knowing
              the unknown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
