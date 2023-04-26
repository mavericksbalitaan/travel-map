import { Tooltip } from "@mui/material";
import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import data from "./DataMap";
import "../../stylesheets/continents.scss";

const Continents = () => {
  const continents = [
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "South America",
    "Australia/Oceania",
    "Antarctica",
  ];


  return (
    <>
      <Navbar />
      <div className="worldmap__container">
        <svg
          viewBox="0 0 1009.6727 665.96301"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data.map((el, idx) => {
            return (
              <Fragment key={idx}>
                <Tooltip title={el.title}>
                  <path
                    d={el.d}
                    id={el.id}
                    className={el.continent}
                    fill="#242424"
                  />
                </Tooltip>
              </Fragment>
            )
          })}
        </svg>
        <div className="legend">
          <h4>
            Continents
          </h4>
          <ol>
            {continents.map((continent, idx) => {
              return (
                <li className={continent} key={idx}>{continent}</li>
              )
            })}
          </ol>
        </div>
      </div >
    </>
  );
};

export default Continents;
