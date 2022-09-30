import React, { useState } from 'react';

export default function Pets(){
    
    const [pets, setPets] = useState ([
        {"nome":"", "idade": "", "raca": "", "tamanho": "", "nomeDono": "", "telDono": "", "img": "", "obs": ""}
    ])

    
    return(
        <div>
            <h1>Pets Cadastrados</h1>
        </div>
    )
}