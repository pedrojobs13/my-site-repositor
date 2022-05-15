import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Texto from "./Texto";
import Preco from "./Preco";
var App = () => {
  return (
    <>
      <Header />
      <Sobre />
      <Texto />
      <Projetos />
      <Preco/>
      <Footer />
    </>
  );
};

export default App;
