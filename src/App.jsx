import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>MK</h1>
        <nav>
          <a
            href="https://github.com/17BTCS023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/manisha-katiyar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </header>
      <main>
        <section>
          <div className="nameContainer">
            <h2>Manisha Katiyar</h2>
            <p className="aboutMe">
              Tenacious working professional with an experience of almost 3
              years in the space of IT Healthcare and 0.5 years in e-commerce.
              Skilled in web application development and proficient in MERN
              stack and React.js, I am passionate about leveraging technology to
              drive business growth and enhance user experiences. Eager to
              continue learning and contributing to innovative solutions in
              dynamic environments
            </p>
          </div>
          <div className="outreach darkerText">
            <i class="fa-solid fa-arrow-right"></i>
            <a href="mailto:post.mk02@gmail.com">Email me!</a>
          </div>
          <div className="statsContainer">
            <div className="imgContainer">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE0D2Zg_UzpcA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721752682295?e=1732752000&v=beta&t=D9CK224OODrpSmiA58naBZUZx6u2M5H5Z4nA8Tx-lWQ"
                alt=""
              />
            </div>
            <div className="stats darkerText">
              <div>
                <div>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p>64 GitHub Repositories </p>
              </div>
              <div>
                <div>
                  <i class="fa-solid fa-code-commit"></i>
                </div>
                <p>112 Contributions this year</p>
              </div>
            </div>
          </div>
        </section>

        <section className="projectContainer">
          <p className="darkerText headerText">Latest Projects</p>
          <div className="projectItem">
            <div>
              <p className="darkerText">Jan 24, 2024</p>
              <p>Just a Todo App</p>
              <div className="linkContainer">
                <a target="_blank" href="www.google.com" className="linkItem">
                  <div>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <p>Github</p>
                </a>
                <a target="_blank" href="www.google.com" className="linkItem">
                  <div>
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <p>Live</p>
                </a>
              </div>
            </div>
            <div>
              <img src="/public/Todo-App.png" alt="" />
            </div>
          </div>
          <div className="projectItem">
            <div>
              <p className="darkerText">Sept 24, 2024</p>
              <p>Fetching an Astronomy picture a day from NASA's APOD API </p>
              <div className="linkContainer">
                <a target="_blank" href="www.google.com" className="linkItem">
                  <div>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <p>Github</p>
                </a>
                <a target="_blank" href="www.google.com" className="linkItem">
                  <div>
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <p>Live</p>
                </a>
              </div>
            </div>
            <div>
              <img src="/public/APOD.png" alt="" />
            </div>
          </div>
        </section>

        <section>
          <h2>Inspired by</h2>
          <div>Productivity</div>
          <div>Personal Growth</div>
          <div>Spirituality</div>
          <div>Fitness</div>
        </section>

        <section>
          <h2>Books</h2>
        </section>

        <section>
          <h2>Favourite K-Dramas</h2>
          <div></div>
        </section>

        <section>
          <h2>Playlists</h2>
          <div></div>
        </section>

        <section>
          <h2>Places I have visited</h2>
          <div></div>
        </section>

        <section>
          <h2>My Values</h2>
          <div></div>
        </section>

        <section>
          <h2>Non-Negotiables</h2>
          <div></div>
        </section>

        <section>
          <h2>Non-Negotiables</h2>
          <div></div>
        </section>
      </main>
    </>
  );
}

export default App;
