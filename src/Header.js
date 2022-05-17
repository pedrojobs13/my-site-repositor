import React from "react";
import "./style/style.css";
import Modal from "react-modal";
import { ModalForm } from "./ModalForm";

export function Header() {
  var menu = {
    menu: [
      { nome: "HOME", id: 1, href: "#home" },
      { nome: "SOBRE", id: 2, href: "#sobre" },
      { nome: "PROJETOS", id: 3, href: "#projetos" },
      { nome: "CONTATO", id: 4 },
    ],
  };
  var menus = menu.menu.filter((item) => item.id < 4);
  var contato = menu.menu.filter(({ id }) => id > 3);
  const [isNewContactModalOpen, setIsNewContactModalOpen] =
    React.useState(false);
  function handleOpenNewContact() {
    setIsNewContactModalOpen(true);
  }
  function handleCloseNewContact() {
    setIsNewContactModalOpen(false);
  }
  Modal.setAppElement("#root");
  return (
    <a name="home">
      <header className="container">
        <div className="menu">
          <nav className="menu-nav">
            <ul>
              {menus.map(({ nome, id, href }) => (
                <a key={id} href={href}>
                  <li>{nome}</li>
                </a>
              ))}
            </ul>
          </nav>

          <div className="menu-contato">
            {contato.map(({ nome, id }) => (
              <a onClick={handleOpenNewContact} key={id}>
                {nome}
              </a>
            ))}
            <ModalForm
              isOpen={isNewContactModalOpen}
              onRequestClose={handleCloseNewContact}
            />
          </div>
        </div>
      </header>
    </a>
  );
}
