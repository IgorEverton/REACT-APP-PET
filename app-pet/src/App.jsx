import { BrowserRouter, Routes, Route } from "react-router-dom";

import PetCadastro from "./components/petCadastro/PetCadastro";
import Menu from "./components/menu/Menu";
import ListaPets from "./components/listaPets/ListaPets";


export default function App(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<PetCadastro/>}/>
                <Route path="/petsCadastrados" element={<ListaPets/>}/>
            </Routes>
        </BrowserRouter>
    )
}