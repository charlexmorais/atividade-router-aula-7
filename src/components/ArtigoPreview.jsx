import React from "react";
// criando postimg e importando para component funcional  artigo
import postimg from "../assets/img/css.jpg";
import {Link} from "react-router-dom"
const Artigo = (props) => {
  return (
    // cada item do array deve conter as seguintes propriedades: nome, imagem, conteudo, tipo. carregar o ArtigoPreview de forma dinâmica. (rota: artigos/)
    <article className="artigo">
      <h1>{props.titulo}</h1>
      <h6>{props.categoria}</h6>
      <img src={postimg} alt="" />
      <span> `{props.conteudo}</span>
      <Link to={`/artigos/${props.titulo}`}>saiba mais</Link>
    </article>
  );
};

export default Artigo;
