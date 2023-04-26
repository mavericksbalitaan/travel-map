import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import Reducer, { Actions, StateType } from '../hooks/Reducer';

interface ContextType {
  state: StateType,
  dispatch: Dispatch<Actions>
}

export const initialState = {
  country_list: [],
  us_states: [],
  ph_cities: [],
  af_countries: []
}

export const MapContext = createContext({} as ContextType)

interface ChildrenType {
  children: ReactNode;
}

const MapProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  )
}

export default MapProvider;
