import { BrowserRouter, Routes, Route } from "react-router-dom";

import PetCadastro from "./components/petCadastro/PetCadastro";
import Menu from "./components/menu/Menu";
import Pets from "./components/pets/Pets";

export default function App(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<PetCadastro/>}/>
                <Route path="/petsCadastrados" element={<Pets/>}/>
            </Routes>
        </BrowserRouter>
    )
}