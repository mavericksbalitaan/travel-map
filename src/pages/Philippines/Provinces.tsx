import { Tooltip } from "@mui/material";
import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import data from "./DataMap-PH";
import "../../stylesheets/provinces.scss";

const Provinces = () => {
  const regions = [
    "Ilocos",
    "Cagayan Valley",
    "Central Luzon",
    "Calabarzon",
    "Mimaropa",
    "Bicol",
    "Western Visayas",
    "Central Visayas",
    "Eastern Visayas",
    "Zamboanga Peninsula",
    "Northern Mindanao",
    "Davao",
    "Soccsksargen",
    "Caraga",
    "National Capital",
    "Cordillera",
    "Bangsamoro",
  ];

  return (
    <>
      <Navbar />
      <div className="worldmap__container">
        <svg
          viewBox="0 0 702.39001 1209.4381"
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
            Regions of the Philippines
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

export default Provinces;
