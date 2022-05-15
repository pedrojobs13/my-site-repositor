import React from "react";

const Preco = () => {
  return (
    <section className="preco">
      <div className="preco-item">
        <h2>Cobre</h2>
        <span>
          <sup>R$</sup>19
        </span>
        <ul>
          <li>Planos Ilimitados</li>
          <li>Acesso Restrito</li>
          <li>Conteúdo Secreto</li>
          <li>Suporte 24h</li>
          <li>Planos Ilimitados</li>
        </ul>
        <a href="#">Comprar</a>
      </div>

      <div className="preco-item">
        <h2>Prata</h2>
        <span>
          <sup>R$</sup>39
        </span>
        <ul>
          <li>Planos Ilimitados</li>
          <li>Acesso Restrito</li>
          <li>Conteúdo Secreto</li>
          <li>Suporte 24h</li>
          <li>Compra Exclusiva</li>
        </ul>
        <a href="#">Comprar</a>
      </div>

      <div className="preco-item">
        <h2>Ouro</h2>
        <span>
          <sup>R$</sup>79
        </span>
        <ul>
          <li>Planos Ilimitados</li>
          <li>Acesso Restrito</li>
          <li>Conteúdo Secreto</li>
          <li>Suporte 24h</li>
          <li>Compra Exclusiva</li>
        </ul>
        <a href="#">Comprar</a>
      </div>
    </section>
  );
};

export default Preco;
