import React from "react";

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-info">
          <h3>Newsletter</h3>
          <p>Assine Aqui</p>
        </div>
        <div className="newsletter-forms">
          <input type="text" placeholder="Seu e-mail" />
          <button type="submit">Assinar</button>
        </div>
      </section>
      <footer className="footer">
        <p>Vou adicionar</p>
        <a name="sobre"></a>
      </footer>
    </>
  );
};

export default Footer;
