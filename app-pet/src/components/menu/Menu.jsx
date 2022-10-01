import { Link } from "react-router-dom"
import { Header } from "../../styled/styled"

export default function Menu(){
    return(
        <Header>
            <h2>App Pet</h2>
            
            <nav>
                <ul>
                    <li><Link to="/">Cadastrar Pet</Link></li>
                    <li><Link to="/petsCadastrados">Meus Pets</Link></li>
                </ul>
            </nav>
        </Header>
    )
}