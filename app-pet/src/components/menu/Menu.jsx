import { Link } from "react-router-dom"
import './Menu.css'

export default function Menu(){
    return(
        <header>
            <h2>App Pet</h2>
            
            <nav>
                <ul>
                    <li><Link to="/">Cadastrar Pet</Link></li>
                    <li><Link to="/petsCadastrados">Meus Pets</Link></li>
                </ul>
            </nav>
        </header>
    )
}