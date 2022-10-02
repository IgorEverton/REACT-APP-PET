import React from "react";
import { useState } from "react";
import PetCadastro from "../petCadastro/PetCadastro";
import Pets from "../pets/Pets";

export default function ListaPets(){
    
    const [pets, setPets] = useState ([
        {   "nome":"Zezinho",
            "idade": "1",
            "raca": "Bulldog",
            "tamanho": "34cm",
            "nomeDono": "Nooah",
            "telDono": "11323424",
            "img": "https://th.bing.com/th/id/R.9a9c01e729c174722b160176bd032f87?rik=rwdSBROxC6xxpg&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f10%2fBulldog-Widescreen.jpg&ehk=SC1q5neHuPnJ6%2fBQ0nFFQG3Yjp%2bpJgXvyq8DFQtvAo4%3d&risl=&pid=ImgRaw&r=0",
            "obs": "Não gosta de tomar bamho"},

            {   "nome":"Urso",
            "idade": "4",
            "raca": "Salsicha",
            "tamanho": "34cm",
            "nomeDono": "Luke Kane",
            "telDono": "11323424",
            "img":"data:image/jpeg;base64,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",
            "obs": "Comilão"}
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
                pet={pet}
            />
            )}
            
            
            
        </div>
    )
}