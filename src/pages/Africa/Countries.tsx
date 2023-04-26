import { Tooltip } from "@mui/material";
import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import data from "./DataMap-AF";
import "../../stylesheets/countries.scss";

const Countries = () => {
  const regions = [
    "Northern",
    "Eastern",
    "Middle",
    "Southern",
    "Western",
  ];

  return (
    <>
      <Navbar />
      <div className="worldmap__container">
        <svg
          viewBox="0 0 239.05701 217.31789"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data.map((el, idx) => {
            return (
              <Fragment key={idx}>
                <Tooltip title={el.title}>
                  <path
                    d={el.d}
                    id={el.id}
                    className={el.region}
                    fill="#242424"
                  />
                </Tooltip>
              </Fragment>
            )
          })}
        </svg>
        <div className="legend">
          <h4>
            African Regions
          </h4>
          <ol>
            {regions.map((region, idx) => {
              return (
                <li className={region} key={idx}>{region}</li>
              )
            })}
          </ol>
        </div>
      </div >
    </>
  );
};

export default Countries;
