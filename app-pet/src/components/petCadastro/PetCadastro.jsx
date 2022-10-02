import React from "react";
import { DivCadastro } from "../../styled/styled";


export default function PetCadastro(props) {
    return (
        <DivCadastro>
            <div className="principal">
                <form method="post" onSubmit={props.addPets}>
                    <div>
                        <label>Nome do seu Pet</label>
                        <input type="text" name="nomePet" value='' />
                    </div>
                    <div>
                        <label>Idade do seu Pet</label>
                        <input type="number" name="idade" value="" />
                    </div>
                    <div>
                        <label>Raça do seu Pet</label>
                        <input type="text" name="raca" value="" />
                    </div>
                    <div>
                        <label>Tamanho do seu Pet</label>
                        <input type="number" name="tamanho" value="" />
                    </div>
                    <div>
                        <label>Nome do dono do Pet</label>
                        <input type="text" name="nomeDono" value="" />
                    </div>
                    <div>
                        <label>Telefone do dono do Pet</label>
                        <input type="tel" name="telDono" value="" />
                    </div>
                    <div>
                        <label>Foto do seu Pet</label>
                        <input type="imt" name="imgPet" value="" />
                    </div>
                    <div>
                        <label>Oberservações</label>
                        <textarea name="obs" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </DivCadastro>
    )
}