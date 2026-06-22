import "./App.css";
function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav>
        <h2>Thameem.</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Resume</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">

          <h1>
            Hi, I'm <span>Ahammed Thameem</span>
          </h1>

          <h2>University Student</h2>

          <p>
            I am a passionate developer and freelance writer who creates
            modern, responsive and user-friendly websites using React,
            JavaScript and frontend technologies.
          </p>

          <div>
            <button className="outline">
              <a href="#contact">Contact</a>
            </button>

            <button className="outline">
              <a href="#projects">View Projects</a>
            </button>
          </div>

        </div>

       <div className="profile">

          <div>
            T
          </div>

        </div>


      </section>

      {/* About */}
      <section id="about" className="card">

        <h1>About Me</h1>

        <p>
          My name is Ahammed Thameem. I am a secondary school graduate
          interested in web development and technology.
        </p>

        <p>
          I enjoy building clean and elegant websites with great user
          experiences. I am improving my skills in React, JavaScript
          and modern frontend development.
        </p>

        <p>
          I also work as a freelance writer and create creative content.
        </p>

        <p>
          Languages: English, Malayalam, Tamil
        </p>

      </section>

      {/* Skills */}
      <section id="skills">

        <h1>Skills</h1>

        <div className="skills">
          <div>HTML5</div>
          <div>CSS3</div>
          <div>JavaScript</div>
          <div>React JS</div>
          <div>Git & GitHub</div>
          <div>Responsive Design</div>
          <div>UI Design</div>
          <div>Content Writing</div>
        </div>

      </section>

      {/* Projects */}
      <section id="projects">

        <h1>Projects</h1>

        <div className="projects">

          <div className="project">
            <h2>Freelance Writing</h2>
            <p>
              Freelance writing projects focused on creativity and communication.
            </p>
          </div>

          <div className="project">
            <h2>Personal Portfolio</h2>
            <p>
              A personal portfolio website built with React.
            </p>
          </div>

          <div className="project">
            <h2>React Web Applications</h2>
            <p>
              Creating responsive and interactive websites using React and JavaScript.
            </p>
          </div>

          <div className="project">
            <h2>Internship</h2>
            <p>
              I started my internship program at ThoughtMind where I am learning
              and practicing new skills through different tasks and projects.
            </p>
          </div>

        </div>

      </section>

      {/* Career Goal */}
      <section className="card">

        <h1>Career Goal</h1>

        <p>
          My goal is to become a professional software developer and create
          useful digital experiences through technology.
        </p>

      </section>

      {/* Contact */}
      <section id="contact">

        <h1>Contact</h1>

        <p>Let's build something amazing together.</p>

        <p>Email: ahammedthameem2007@gmail.com</p>

        <button
          onClick={() =>
            window.location.href =
              "mailto:ahammedthameem2007@gmail.com?subject=Portfolio Contact"
          }
        >
          Email Me
        </button>

      </section>

    </div>
  );
}

export default App;