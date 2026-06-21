import "./App.css";

function App() {
  return (
    <div>

      {/* Hero Section */}
      <section className="DC">
        <h1>Hi, I'm Ahammed Thameem</h1>

        <h2>university student</h2>

        <p>
          I create responsive and modern websites using React,
          JavaScript and frontend technologies.
        </p>

        <button>Contact Me</button>
        <button>View Projects</button>
      </section>


      {/* About Section */}
      <section>
        <h1>About Me</h1>

        <p>
          I completed my schooling and am currently pursuing my university
          studies. My college provides me with knowledge, practical skills,
          and opportunities to learn new technologies. I am focused on
          improving my technical skills and preparing for a successful career
          in the software industry.
        </p>

        <p>
          Education: Secondary School Graduate
        </p>

        <p>
          Interests: Web Development, UI Design, Learning new technologies
        </p>

      </section>


      {/* Skills Section */}
      <section>

        <h1>Skills</h1>

        <div className="cards">

          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Git</div>

        </div>

      </section>


      {/* Projects Section */}
      <section>

        <h1>Projects</h1>

        <div className="project">

          <h2>React Counter App</h2>

          <p>
            A simple counter application built using React useState.
          </p>

        </div>

      </section>


      {/* Contact Section */}
      <section>

        <h1>Contact</h1>

        <p>
          Email: ahammedthameem2007@gmail.com
        </p>

        <p>
          GitHub: github.com/AhammedThameem
        </p>

      </section>


    </div>
  );
}

export default App;