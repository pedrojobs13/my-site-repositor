import React from "react";
import "./style.css";
var Header = (props) => {
  var menu = {
    menu: [
      { nome: "HOME", id: 1 },
      { nome: "SOBRE", id: 2 },
      { nome: "PROJETOS", id: 3 },
      { nome: "CONTATO", id: 4 },
    ],
  };
  var menus = menu.menu.filter((item) => item.id < 4);
  var contato = menu.menu.filter(({ id }) => id > 3);
  

  
  return (
    <>
      <header className="container">
        <div className="menu">
          <nav className="menu-nav">
            <ul>
              {menus.map(({ nome, id }) => (
                <a key={id}>
                  <li>{nome}</li>
                </a>
              ))}
            </ul>
          </nav>
          <div className="menu-contato">
            {contato.map(({ nome }) => (
              <a>{nome}</a>
            ))}
          </div>
          <p>{props.nome}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
