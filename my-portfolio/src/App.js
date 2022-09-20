
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Music from './components/Music/Music';
import Projects from './components/Projects/Projects';
import file from './assets/files/Data.csv';
import Papa from 'papaparse';
import React, {useState} from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [data, setData] = useState([]);
  
  Papa.parse(file, {
    header: true,
    download: true,
    complete: function (results) {
      setData(results.data);
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/About"
          element={<About data={data} />}
        />
        <Route
          path="/Contact"
          element={<Contact />}
        />
        <Route
          path="/Music"
          element={<Music />}
        />
        <Route
          path="/Projects"
          element={<Projects />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
