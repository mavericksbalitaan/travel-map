import { Fragment, useContext } from "react";
import Navbar from "../../components/Navbar";
import { MapContext } from "../../contexts/MapContext";
import "../../stylesheets/visited.scss";

const VisitedCountries = () => {
  const { state, dispatch } = useContext(MapContext);
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
      <div className="visited__container">
        <h1>Countries You Visited By Continent</h1>
        <div className="visited__container--ulist">
          {continents.map((continent, idx) => {
            return (
              <ul className="visited__container--indivlist" key={idx}>
                <h2>{continent.toUpperCase()}</h2>
                {state.country_list?.map((el, idx) => {
                  if (el.continent === `${continent}`) {
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

export default VisitedCountries;
