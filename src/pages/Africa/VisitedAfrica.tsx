import { Fragment, useContext } from "react";
import Navbar from "../../components/Navbar";
import { MapContext } from "../../contexts/MapContext";
import "../../stylesheets/visited.scss";

const VisitedCities = () => {
  const { state, dispatch } = useContext(MapContext);
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
      <div className="visited__container">
        <h1>African Countries You Visited By Region</h1>
        <div className="visited__container--ulist">
          {regions.map((region, idx) => {
            return (
              <ul className="visited__container--indivlist" key={idx}>
                <h2>{region}</h2>
                {state.af_countries?.map((el, idx) => {
                  if (el.region === `${region}`) {
                    return (
                      <Fragment key={idx}>
                        <li>
                          <a
                            href={`https://www.google.com/search?q=${el.title}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {el.title}
                          </a>
                        </li>
                      </Fragment>
                    );
                  }
                  return null;
                })}
              </ul>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default VisitedCities;
