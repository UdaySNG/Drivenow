import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// Importeer andere pagina's indien nodig

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Voeg hier andere routes toe voor andere pagina's */}
      </Routes>
    </Router>
  );
};

export default App;
