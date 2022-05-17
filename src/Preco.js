import React from "react";
import { GoMarkGithub, GoGitPullRequest, GoCode } from "react-icons/go";

const Preco = () => {
  return (
    <section className="preco">
      <div className="preco-item">
        <h2>1º Project</h2>
        <span>
          <div className="enter-github-page">
            <GoGitPullRequest />
            <GoMarkGithub />
            <GoCode />
          </div>
        </span>
        <ul>
          <li>
            Um ToDo List da Rockeaset básico, mas não completo, que faz CRUD sem
            o Update
          </li>
        </ul>
      </div>

      <div className="preco-item">
        <h2>2º Project</h2>
        <span>
          <div className="enter-github-page">
            <GoGitPullRequest />
            <GoMarkGithub />
            <GoCode />
          </div>
        </span>
        <ul>
          <li>Projeto simples de dois botões para a verificação dos mesmos</li>
        </ul>
      </div>

      <div className="preco-item">
        <h2>3º Project</h2>
        <span>
          <div className="enter-github-page">
            <GoGitPullRequest />
            <GoMarkGithub />
            <GoCode />
          </div>
        </span>
        <ul>
          <li>
            Projetos da Rockeseat dtmoney, que verifica as entradas e saídas
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Preco;
