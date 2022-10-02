import React from "react";
import { useState } from "react";
import PetCadastro from "../petCadastro/PetCadastro";
import Pets from "../pets/Pets";

export default function ListaPets(){
    
    const [pets, setPets] = useState ([
        {   "nome":"",
            "idade": "",
            "raca": "",
            "tamanho": "",
            "nomeDono": "",
            "telDono": "",
            "img": "",
            "obs": ""}
    ])
    const [nPets, setNpets] = useState  (
        {   "nome":"",
            "idade": "",
            "raca": "",
            "tamanho": "",
            "nomeDono": "",
            "telDono": "",
            "img": "",
            "obs": ""}
)

    const addPets = (e)=>{
        e.preventDefault()
        setPets({"nome":"", "idade": "", "raca": "", "tamanho": "", "nomeDono": "", "telDono": "", "img": "", "obs": ""})
        setPets([...pets, nPets])
      }

    const captura=(e)=>{
        const {name,value}=e.target

        if(name==="nomePet"){
            setPets({"nome":value, "idade":nPets.idade, "raca": nPets.raca, "tamanho": nPets.tamanho, "nomeDono": nPets.nomeDono, "telDono": nPets.telDono, "img": nPets.img, "obs": nPets.obs})

        }
        else if(name==="idade"){
            setPets({"nome":nPets.nome, "idade":value, "raca": nPets.raca, "tamanho": nPets.tamanho, "nomeDono": nPets.nomeDono, "telDono": nPets.telDono, "img": nPets.img, "obs": nPets.obs})
        }
        else if(name==="raca"){
            setPets({"nome":nPets.nome, "idade":nPets.idade, "raca": value, "tamanho": nPets.tamanho, "nomeDono": nPets.nomeDono, "telDono": nPets.telDono, "img": nPets.img, "obs": nPets.obs})
        }
        else if(name==="tamanho"){
            setPets({"nome":nPets.nome, "idade":nPets.idade, "raca": nPets.raca, "tamanho": value, "nomeDono": nPets.nomeDono, "telDono": nPets.telDono, "img": nPets.img, "obs": nPets.obs})
        }
        else if(name==="nomeDono"){
            setPets({"nome":nPets.nome, "idade":nPets.idade, "raca": nPets.raca, "tamanho": nPets.tamanho, "nomeDono": value, "telDono": nPets.telDono, "img": nPets.img, "obs": nPets.obs})
        }
        else if(name==="telDono"){
            setPets({"nome":nPets.nome, "idade":value, "raca": nPets.raca, "tamanho": nPets.tamanho, "nomeDono": nPets.nomeDono, "telDono": value, "img": nPets.img, "obs": nPets.obs})
        }
        else if(name==="img"){
            setPets({"nome":nPets.nome, "idade":value, "raca": nPets.raca, "tamanho": nPets.tamanho, "nomeDono": nPets.nomeDono, "telDono": nPets.telDono, "img": value, "obs": nPets.obs})
        }
        else if(name==="obs"){
            setPets({"nome":nPets.nome, "idade":value, "raca": nPets.raca, "tamanho": nPets.tamanho, "nomeDono": nPets.nomeDono, "telDono": nPets.telDono, "img": nPets.img, "obs": value})
        }
        
    }

    
    
    
    return(

      

        <div>
            <PetCadastro addpets={addPets} pet={nPets} digit={captura}/>
            {pets.map((pet, i)=>
            <Pets
            key={i}
            nome={pet.nome} 
            idade={pet.idade}
            raca={pet.raca}
            tamanho={pet.tamanho}
            nmDono={pet.nomeDono}
            telDono={pet.telDono}
            img={pet.img}
            obs={pet.obs}
            />
            )}
            
            
            
        </div>
    )
}