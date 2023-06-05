
import Artigo from "./ArtigoPreview";
import "./components.css";

const ArtigoLista = (props) => {
  const Lista = [
    {
      titulo: "docker",
      conteudo: "lorem20",
      categoria: "devops",
    },
    {
      titulo: "lambda function",
      conteudo: "lorem20",
      categoria: "back-end",
    },
    {
      titulo: "react",
      conteudo: "lorem20",
      categoria: "front-end",
    },
  ];
  return (
    <article className="artigo-lista">
      {Lista.map((artigo) => (
        <Artigo
          
          id={artigo.id}
          titulo={artigo.titulo}
          conteudo={artigo.conteudo}
          categoria={artigo.categoria}
        />
      ))}
    </article>
  );
};

export default ArtigoLista;
