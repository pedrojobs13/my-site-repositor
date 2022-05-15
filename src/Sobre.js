import React from "react";

import Img from "./Img/20945431.jpg";

const Sobre = () => {
  return (
    <>
      <section className="sobre">
        <div className="sobre-info">
          <h1>Olá,</h1>

          <p className="escrita">Este é o meu Portifólio</p>
        </div>

        <div className="sobre-img">
          <img src={Img} />
        </div>
      </section>
    </>
  );
};

export default Sobre;
