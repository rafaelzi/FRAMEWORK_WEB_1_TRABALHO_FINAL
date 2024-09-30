/*Página sobre o site*/
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <h1>Sobre</h1>
      <p>Esta é apenas uma páginas para explicar o projeto.</p>
      <p>Trabalho Final FrameworkWeb 1</p>
      <p>Alunos: Rafael Campos Cabral de Menezes</p>
      <Link to="/">
        <button>Voltar à Home</button>
      </Link>
    </div>
  );
}

export default About;
