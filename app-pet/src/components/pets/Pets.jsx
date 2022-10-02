import React, { useState } from 'react';


import { DivPet } from "../../styled/styled";
export default function Pets(props){
    

    
    return(
        <DivPet>
            <img src={props.pet.img} alt="" />
            
            <h1>Nome:{props.pet.nome}</h1>
            <h1>Idade:{props.pet.idade}</h1>
            <h1>Tamanho:{props.pet.tamanho}</h1>
            <h1>Nome do dono:{props.pet.nomeDono}</h1>
            <h1>Telefone:{props.pet.telDono}</h1>
            <h1>Raça: {props.pet.raca}</h1>
           
        </DivPet>
       
    )
}