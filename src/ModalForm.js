import React from "react";
import Modal from "react-modal";
import CloseImg from "./Img/close.svg";
export function ModalForm({ isOpen, onRequestClose }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [enviado, setEnviado] = React.useState("");
  function handleSubmitForm(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    setEnviado("Formulário Enviado");
   
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar Modal" />
      </button>
      <div className="container-modal">
        <form onSubmit={handleSubmitForm}>
          <h2>Speak to Me</h2>
          <input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="mensagem"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
          <p>{enviado}</p>
        </form>
      </div>
    </Modal>
  );
}
