import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightList from '../src/components/FlightLists';
import FlightDetail from '../src/components/FlightDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FlightList />} />
          <Route path="/flights/:id" element={<FlightDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
