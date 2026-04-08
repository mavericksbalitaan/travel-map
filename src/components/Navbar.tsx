import { useState, useEffect } from "react";
import { Typography, Paper, MenuList, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../stylesheets/navbar.scss";
import { List } from "@mui/icons-material";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
      setMenu(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
      setMenu(false);
    }
  });

  const clickMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const home = document.querySelector(".home");
    const world_map = document.querySelector(".world_map");
    const world_map__lists =
      document.querySelector<HTMLDivElement>(".world_map__lists");
    const us_map = document.querySelector(".us_map");
    const us_map__lists =
      document.querySelector<HTMLDivElement>(".us_map__lists");
    const ph_map = document.querySelector(".ph_map");
    const ph_map__lists =
      document.querySelector<HTMLDivElement>(".ph_map__lists");
    const africa_map = document.querySelector(".africa_map");
    const africa_map__lists =
      document.querySelector<HTMLDivElement>(".africa_map__lists");


    {/* Home */ }
    home?.addEventListener("mouseenter", () => {
      world_map__lists!.style.display = "none";
      us_map__lists!.style.display = "none";
      ph_map__lists!.style.display = "none";
      africa_map__lists!.style.display = "none";
    });

    {/* World Map */ }
    world_map?.addEventListener("mouseenter", () => {
      world_map__lists!.style.display = "flex";
      us_map__lists!.style.display = "none";
      ph_map__lists!.style.display = "none";
      africa_map__lists!.style.display = "none";
    });

    world_map__lists?.addEventListener("mouseenter", () => {
      world_map__lists!.style.display = "flex";
    });

    world_map__lists?.addEventListener("mouseleave", () => {
      world_map__lists!.style.display = "none";
    });

    { /* US Map */ }
    us_map?.addEventListener("mouseenter", () => {
      us_map__lists!.style.display = "flex";
      world_map__lists!.style.display = "none";
      ph_map__lists!.style.display = "none";
      africa_map__lists!.style.display = "none";
    });

    us_map__lists?.addEventListener("mouseenter", () => {
      us_map__lists!.style.display = "flex";
    });

    us_map__lists?.addEventListener("mouseleave", () => {
      us_map__lists!.style.display = "none";
    });

    { /* PH Map */ }
    ph_map?.addEventListener("mouseenter", () => {
      ph_map__lists!.style.display = "flex";
      world_map__lists!.style.display = "none";
      us_map__lists!.style.display = "none";
      africa_map__lists!.style.display = "none";
    });

    ph_map__lists?.addEventListener("mouseenter", () => {
      ph_map__lists!.style.display = "flex";
    });

    ph_map__lists?.addEventListener("mouseleave", () => {
      ph_map__lists!.style.display = "none";
    });

    { /* Africa Map */ }
    africa_map?.addEventListener("mouseenter", () => {
      africa_map__lists!.style.display = "flex";
      world_map__lists!.style.display = "none";
      us_map__lists!.style.display = "none";
      ph_map__lists!.style.display = "none";
    });

    africa_map__lists?.addEventListener("mouseenter", () => {
      africa_map__lists!.style.display = "flex";
    });

    africa_map__lists?.addEventListener("mouseleave", () => {
      africa_map__lists!.style.display = "none";
    });

  });

  return (
    <>
      {!mobile && (
        <>
          <div className="navbar__container">
            <NavLink to="/">
              <Typography variant="h5">Travel Map</Typography>
            </NavLink>
            <ul>
              <li className="home">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="world_map">World</li>
              <div className="world_map__lists">
                <li>
                  <NavLink to="/world_map">World Map</NavLink>
                </li>
                <li>
                  <NavLink to="/visitedcountries">Visited Countries</NavLink>
                </li>
                <li>
                  <NavLink to="/continents">Display Continents</NavLink>
                </li>
              </div>
              <li className="us_map">US</li>
              <div className="us_map__lists">
                <li>
                  <NavLink to="/us_map">US Map</NavLink>
                </li>
                <li>
                  <NavLink to="/visitedstates">Visited States</NavLink>
                </li>
                <li>
                  <NavLink to="/regions">Display Regions</NavLink>
                </li>
              </div>
              <li className="ph_map">Philippines</li>
              <div className="ph_map__lists">
                <li>
                  <NavLink to="/ph_map">Philippine Map</NavLink>
                </li>
                <li>
                  <NavLink to="/visitedcities">Visited Places</NavLink>
                </li>
                <li>
                  <NavLink to="/provinces">Display Regions</NavLink>
                </li>
              </div>
              <li className="africa_map">Africa</li>
              <div className="africa_map__lists">
                <li>
                  <NavLink to="/africa_map">Africa Map</NavLink>
                </li>
                <li>
                  <NavLink to="/visitedafrica">Visited Countries</NavLink>
                </li>
                <li>
                  <NavLink to="/countries">Display Regions</NavLink>
                </li>
              </div>
            </ul>
          </div>
        </>
      )}
      {
        mobile && (
          <div className="mobile_header">
            <List onClick={clickMenu} />
            <NavLink to="/">
              <Typography variant="h5">Travel Map</Typography>
            </NavLink>
          </div>
        )
      }
      {
        menu && (
          <div className="mobile_menu">
            <Paper>
              <MenuList>
                <MenuItem>
                  <NavLink to="/home">Home</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/world_map">World Map</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/visitedcountries">Visited Countries</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/continents">Display Continents</NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink to="/us_map">US Map</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/visitedstates">Visited States</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/regions">Display Regions</NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink to="/ph_map">PH Map</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/visitedcities">Visited Cities</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/provinces">Display Regions</NavLink>
                </MenuItem>

                <MenuItem>
                  <NavLink to="/africa_map">Africa Map</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/visitedafrica">Visited Countries</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/countries">Display Regions</NavLink>
                </MenuItem>

              </MenuList>
            </Paper>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
