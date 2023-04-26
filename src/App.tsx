import './stylesheets/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import WorldMap from './pages/World/WorldMap';
import VisitedCountries from './pages/World/VisitedCountries';
import Continents from './pages/World/Continents';

import USMap from './pages/US/USMap';
import VisitedStates from './pages/US/VisitedStates';
import Regions from './pages/US/Regions';

import PHMap from './pages/Philippines/PHMap';
import VisitedCities from './pages/Philippines/VisitedCities';
import Provinces from './pages/Philippines/Provinces';

import AFMap from './pages/Africa/AFMap';
import VisitedAfrica from './pages/Africa/VisitedAfrica';
import Countries from './pages/Africa/Countries';

import MapProvider from './contexts/MapContext';

function App() {
  return (
    <>
      <MapProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />

            <Route path="/world_map" element={<WorldMap />} />
            <Route path="/visitedcountries" element={<VisitedCountries />} />
            <Route path="/continents" element={<Continents />} />

            <Route path="/us_map" element={<USMap />} />
            <Route path="/visitedstates" element={<VisitedStates />} />
            <Route path="/regions" element={<Regions />} />

            <Route path="/ph_map" element={<PHMap />} />
            <Route path="/visitedcities" element={<VisitedCities />} />
            <Route path="/provinces" element={<Provinces />} />

            <Route path="/africa_map" element={<AFMap />} />
            <Route path="/visitedafrica" element={<VisitedAfrica />} />
            <Route path="/countries" element={<Countries />} />
          </Routes>
        </BrowserRouter>
      </MapProvider>
    </>
  );
}

export default App;
