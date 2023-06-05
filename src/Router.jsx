import { Routes, Route}from "react-router-dom";
import ArtigoLista from "./components/artigo-lista";
import OneArtigo from "./components/artigo";

function Router(){
return(
    <Routes>
        <Route path="artigos"  element={<ArtigoLista/>}/>
        <Route path="artigos/:id" element={<OneArtigo/>}/>
    </Routes>
);
}
export default Router;