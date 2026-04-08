import Navbar from "../components/Navbar";
import "../stylesheets/home.scss";
import profile from "../assets/images/profile.webp";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home__container">
        <div className="howto__container">
          <h1>How To Use</h1>
          <ul>
 <li>Select a location.</li>
    <li>
      Use the input field or click on a country you have recently visited.
    </li>
    <li>
      Your visited countries will be automatically added to the list.
    </li>
    <li>
      Once finished, you can save the generated image if desired.
    </li>
          </ul>
          <hr />
        </div>
        <div className="about__container">
          <img src={profile} alt="My Profile Picture" />
					<p>
  Hello, my name is Mavericks.
  <br />
  I am a Full Stack Web Developer.
  <br />
  One of my personal aspirations is to travel around the world with my family.
  <br /><br />
  If you have any comments or feedback, please feel free to get in touch. I would greatly appreciate hearing your thoughts on my
  <a href="https://mavericksb.com" target="_blank">
	{" "}
    projects
  </a>.
  <br />
  Thank you, and happy coding.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
