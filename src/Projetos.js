import React from "react";
import Img from "./Img/produtos1.jpg";

const Projetos = () => {
  return (
    <>
      <section className="projetos">
        <h3>Projetos</h3>
        <div className="projetos-container">
          <div className="projetos-item purple">
            <h2>Página 1</h2>
          </div>
          <div className="projetos-item pink">
            <h2>Página 2</h2>
          </div>
          <div className="projetos-item blue">
            <h2>Página 3</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;
