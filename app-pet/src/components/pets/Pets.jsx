import React, { useState } from 'react';

import styled from 'styled-components';

export default function Pets(props){
    
    const DivPet =styled.div`
    img{
        border-radius:50%;
        height:100px;

    }
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    background-Color:white;
    color:yellow;
    padding:10px;
    box-shadow:2px 2px 10px rgba(0,0,0,0.7);
    margin:30px;
    
   

    `
    
    
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