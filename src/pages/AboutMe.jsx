import Header from "../components/Header";

export default function AboutMe() {
  return (
    <div>
      <Header />
      <div className="container pt-4 about-me-container">
        <div className="row">
          <div className="col-md-4">
            {/* Include a recent photo or avatar of the developer */}
            <img
              src="src/assets/images/Lumii_20231124_1832597415757 - Copy.jpg"
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
            />
          </div>
          <div className="col-md-8 about-text">
            <h2 className="mb-4">About the Developer</h2>
            <p className="bio-text">
              Hello and welcome to my portfolio! I'm Greg, a dedicated
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
          </div>
        </div>
      </div>
    </div>
  );
}
