import React from "react";
import { Rerousel } from "rerousel";
import Img from "./Img/20945431.jpg";
import Img1 from "./Img/abc.png";
import {ModalForm} from './ModalForm'
export const Sobre = () => {
  const ref = React.useRef(null);
  return (
    <>
      <section className="sobre">
        <div className="sobre-info">
          <h1>Olá,</h1>
          <p className="escrita">Este é o meu Portifólio</p>
        </div>

        <div className="sobre-img">
          <img src={Img} ref={ref} />
        </div>
      </section>
      
    </>
  );
};

export default Sobre;
