import React from "react";
import { DivCadastro } from "../../styled/styled";


export default function PetCadastro(props) {
    return (
        <DivCadastro>
            <div className="principal">
                <form method="post" onSubmit={props.addPets}>
                    <div>
                        <label>Nome do seu Pet</label>
                            <input type="text" name="nomePet" value={props.pet.nome} onChange={props.digit} />
                    </div>
                    <div>
                        <label>Idade do seu Pet</label>
                        <input type="number" name="idade" value={props.pet.idade} onChange={props.digit}/>
                    </div>
                    <div>
                        <label>Raça do seu Pet</label>
                        <input type="text" name="raca" value={props.pet.raca} onChange={props.digit}/>
                    </div>
                    <div>
                        <label>Tamanho do seu Pet</label>
                        <input type="number" name="tamanho" value={props.pet.tamanhp} onChange={props.digit}/>
                    </div>
                    <div>
                        <label>Nome do dono do Pet</label>
                        <input type="text" name="nomeDono" value={props.pet.nomeDono} onChange={props.digit}/>
                    </div>
                    <div>
                        <label>Telefone do dono do Pet</label>
                        <input type="tel" name="telDono" value={props.pet.telDono} onChange={props.digit}/>
                    </div>
                    <div>
                        <label>Foto do seu Pet</label>
                        <input type="imt" name="imgPet" value={props.pet.foto} onChange={props.digit} />
                    </div>
                    <div>
                        <label>Oberservações</label>
                        <textarea name="obs" cols="30" rows="10" value={props.pet.obs} onChange={props.digit}></textarea>
                    </div>
                    <div>
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </DivCadastro>
    )
}