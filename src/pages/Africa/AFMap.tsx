import { Tooltip, Button, TextField } from "@mui/material";
import { Fragment, useContext, useState, useRef, useEffect, useCallback } from "react";
import data from "./DataMap-AF";
import "../../stylesheets/worldmap.scss";
import { MapContext } from "../../contexts/MapContext";
import { ActionTypes } from "../../hooks/Reducer";
import Navbar from "../../components/Navbar";
import { toPng } from 'html-to-image';

const USMap = () => {
  const { state, dispatch } = useContext(MapContext);
  const [afcountry, setAFCountry] = useState();
  const inputRef = useRef<HTMLInputElement>(null!)
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-afmap.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const clickHandler = (
    e: any,
    id: string,
    title: string,
    region: string,
  ) => {
    // console.log(e);
    if (e.target.attributes[2].nodeValue === "green") {
      e.target.attributes[2].nodeValue = "#242424";
      dispatch({
        type: ActionTypes.AF_UNVISITED,
        payload: { title: title },
      });
    } else {
      e.target.attributes[2].nodeValue = "green";
      dispatch({
        type: ActionTypes.AF_VISITED,
        payload: { id: id, title: title, region: region },
      });
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    for (let i = 0; i < state.af_countries.length; i++) {
      if (state.af_countries[i].title === afcountry) {
        dispatch({ type: ActionTypes.AF_UNVISITED, payload: { title: state.af_countries[i].title } });
      }
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].title === afcountry) {
        dispatch({ type: ActionTypes.AF_VISITED, payload: { id: data[i].id, title: data[i].title, region: data[i].region } });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="worldmap__container" ref={ref}>
        <svg
          viewBox="0 0 239.05701 217.31789"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data.map((el, idx) => {
            for (let i = 0; i < state.af_countries.length; i++) {
              if (state.af_countries[i].title === el.title) {
                return (
                  <Fragment key={idx}>
                    <Tooltip title={el.title}>
                      <g>
                        <path
                          d={el.d}
                          id={el.id}
                          fill="green"
                          onClick={(e) =>
                            clickHandler(e, el.id, el.title, el.region)
                          }
                        />
                      </g>
                    </Tooltip>
                  </Fragment>
                );
              }
            }
            return (
              <Fragment key={idx}>
                <Tooltip title={el.title}>
                  <g>
                    <path
                      d={el.d}
                      id={el.id}
                      fill="#242424"
                      onClick={(e) =>
                        clickHandler(e, el.id, el.title, el.region)
                      }
                    />
                  </g>
                </Tooltip>
              </Fragment>
            );
          })}
        </svg>
      </div>
      <div className="input">
        <form onSubmit={(e) => submitHandler(e)}>
          <TextField
            id="filled-basic" variant="filled"
            placeholder="Please input a country..."
            onChange={(e: any) => setAFCountry(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
            ref={inputRef}
            margin="normal"
            sx={{ backgroundColor: "#fff" }}
          />
        </form>
        <Button variant="contained" onClick={onButtonClick} id="saveImg">Save Map</Button>
      </div>
    </>
  );
};

export default USMap;

