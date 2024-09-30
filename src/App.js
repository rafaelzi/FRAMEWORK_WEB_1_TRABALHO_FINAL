import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail"; // Importando o componente de detalhes

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />{" "}
          <Route path="/pokemon/:name" element={<PokemonDetail />} />{" "}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
