export default function AboutMe() {
    return (
      <div className="container pt-4 about-me-container ">
        <div className="row">
          <div className="col-md-4">
            {/* Include a recent photo or avatar of the developer */}
            <img
              src="src\assets\images\Lumii_20231124_1832597415757 - Copy.jpg"
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
            />
          </div>
          <div className="col-md-8">
            {/* Include a short bio about the developer */}
            <h2 className="mb-4">About the Developer</h2>
            <p className="bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }