import video from "../assets/videos/earth_rotating.mp4";
import "../stylesheets/intro.scss";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const Intro = () => {
  return (
    <>
      <div className="intro__container">
        <video src={video} width="100%" height="100%" autoPlay loop muted />
        <Typography variant="h2">Travel Map</Typography>
        <Link to="/home">
          <Button
            variant="contained"
            sx={{
              width: "10rem",
              height: "fit-content",
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              margin: "auto",
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Intro;
