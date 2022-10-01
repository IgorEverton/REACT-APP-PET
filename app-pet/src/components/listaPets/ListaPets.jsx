import React from "react";
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
    const [nPets, setNpets] = useState  ([
        {   "nome":"",
            "idade": "",
            "raca": "",
            "tamanho": "",
            "nomeDono": "",
            "telDono": "",
            "img": "",
            "obs": ""}
    ])

    const addPets = (e)=>{
        e.preventDefault()
        setPets({"nome":"", "idade": "", "raca": "", "tamanho": "", "nomeDono": "", "telDono": "", "img": "", "obs": ""})
        setPets([...pets, nPets])
      }

    
    
    
    return(
        <div>
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