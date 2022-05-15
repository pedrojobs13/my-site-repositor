import React from "react";

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-info">
          <h3>Newsletter</h3>
          <p>Assine Aqui</p>
        </div>
        <form>
          <input type="text" placeholder="Seu e-mail" />
          <button type="submit">Assinar</button>
        </form>
      </section>
      <footer className="footer">
        <p>Vou adicionar</p>
      </footer>
    </>
  );
};

export default Footer;
