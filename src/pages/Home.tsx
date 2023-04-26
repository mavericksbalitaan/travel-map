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
            <li>Go to your preferred map.</li>
            <li>Either input or click the location.</li>
            <p>
              ** A list of visited locations will be updated appropriately. You
              can then save the image.
            </p>
          </ul>
          <hr />
        </div>
        <div className="about__container">
          <img src={profile} alt="My Profile Picture" />
          <p>
            Hi there! <br /> My name is Mavericks and I am a Filipino full-stack
            web developer. <br />
            One of my goals in life is to travel around the world. If you have
            any comments, please get in touch! I'll be more than happy to hear
            your thoughts on my <a href="https://mavericks-db.tech" target="_blank">
              projects
            </a>. Cheers and happy coding!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
