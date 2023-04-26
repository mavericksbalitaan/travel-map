import { Tooltip, Button, TextField } from "@mui/material";
import { Fragment, useContext, useState, useRef, useEffect, useCallback } from "react";
import data from "./DataMap";
import "../../stylesheets/worldmap.scss";
import { MapContext } from "../../contexts/MapContext";
import { ActionTypes } from "../../hooks/Reducer";
import Navbar from "../../components/Navbar";
import { toPng } from 'html-to-image';

const WorldMap = () => {
  const { state, dispatch } = useContext(MapContext);
  const [country, setCountry] = useState();
  const inputRef = useRef<HTMLInputElement>(null!);
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
        link.download = 'my-worldmap.png'
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
    continent: string
  ) => {
    // console.log(e);
    if (e.target.attributes[2].nodeValue === "green") {
      e.target.attributes[2].nodeValue = "#242424";
      dispatch({
        type: ActionTypes.UNVISITED,
        payload: { title: title },
      });
    } else {
      e.target.attributes[2].nodeValue = "green";
      dispatch({
        type: ActionTypes.VISITED,
        payload: { id: id, title: title, continent: continent },
      });
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    for (let i = 0; i < state.country_list.length; i++) {
      if (state.country_list[i].title === country) {
        dispatch({ type: ActionTypes.UNVISITED, payload: { title: state.country_list[i].title } });
      }
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].title === country) {
        dispatch({ type: ActionTypes.VISITED, payload: { id: data[i].id, title: data[i].title, continent: data[i].continent } });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="worldmap__container" ref={ref}>
        <svg
          viewBox="0 0 1009.6727 665.96301"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data.map((el, idx) => {
            for (let i = 0; i < state.country_list.length; i++) {
              if (state.country_list[i].title === el.title) {
                return (
                  <Fragment key={idx}>
                    <Tooltip title={el.title}>
                      <path
                        d={el.d}
                        id={el.id}
                        fill="green"
                        onClick={(e) =>
                          clickHandler(e, el.id, el.title, el.continent!)
                        }
                      />
                    </Tooltip>
                  </Fragment>
                );
              }
            }
            return (
              <Fragment key={idx}>
                <Tooltip title={el.title}>
                  <path
                    d={el.d}
                    id={el.id}
                    fill="#242424"
                    onClick={(e) =>
                      clickHandler(e, el.id, el.title, el.continent!)
                    }
                  />
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
            onChange={(e: any) => setCountry(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
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

export default WorldMap;
