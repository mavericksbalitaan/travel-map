export interface Country {
  id: string;
  title: string;
  continent: string;
}

export interface US {
  id: string;
  title: string;
  region: string;
}

export interface PH {
  id: string;
  title: string;
  region: string;
}

export interface AF {
  id: string;
  title: string;
  region: string;
}

export interface StateType {
  country_list: Country[];
  us_states: US[];
  ph_cities: PH[];
  af_countries: AF[]
}

export enum ActionTypes {
  VISITED,
  UNVISITED,
  STATE_VISITED,
  STATE_UNVISITED,
  PROV_VISITED,
  PROV_UNVISITED,
  AF_VISITED,
  AF_UNVISITED,
}

export type Actions =
  | { type: ActionTypes.VISITED; payload: Country }
  | { type: ActionTypes.UNVISITED; payload: { title: string } }
  | {
    type: ActionTypes.STATE_VISITED | ActionTypes.PROV_VISITED | ActionTypes.AF_VISITED;
    payload: { id: string; title: string; region: string };
  }
  | {
    type: ActionTypes.STATE_UNVISITED | ActionTypes.PROV_UNVISITED | ActionTypes.AF_UNVISITED;
    payload: { title: string };
  };

const Reducer = (state: StateType, action: Actions) => {
  switch (action.type) {
    case ActionTypes.VISITED:
      return {
        ...state,
        country_list: [...state.country_list, action.payload],
      };
    case ActionTypes.UNVISITED:
      return {
        ...state,
        country_list: [
          ...state.country_list.filter(
            (country) => country.title !== action.payload.title
          ),
        ],
      };
    case ActionTypes.STATE_VISITED:
      return { ...state, us_states: [...state.us_states, action.payload] };
    case ActionTypes.STATE_UNVISITED:
      return {
        ...state,
        us_states: [
          ...state.us_states.filter(
            (state) => state.title !== action.payload.title
          ),
        ],
      };
    case ActionTypes.PROV_VISITED:
      return { ...state, ph_cities: [...state.ph_cities, action.payload] };
    case ActionTypes.PROV_UNVISITED:
      return {
        ...state,
        ph_cities: [
          ...state.ph_cities.filter(
            (state) => state.title !== action.payload.title
          ),
        ],
      };
    case ActionTypes.AF_VISITED:
      return { ...state, af_countries: [...state.af_countries, action.payload] };
    case ActionTypes.AF_UNVISITED:
      return {
        ...state,
        af_countries: [
          ...state.af_countries.filter(
            (state) => state.title !== action.payload.title
          ),
        ],
      };

    default:
      return state;
  }
};

export default Reducer;
