import { useState } from "react"

export default function Usuario({imagem, username, nome}) {
    const [nameUser, setNameUser] = useState(nome)
    const [CurrentPic, setCurrentPic] = useState(imagem)

    function changeName(){
        const newName = prompt("Insira o novo nome")
        if(!newName){
            alert("Escreva um nome válido")
        } else {
            setNameUser(newName)
        }
    }

    function changePic(){
        const newPic = prompt("Insira o link da sua foto")
        if(!newPic){
            alert("Escreva um link válido")
        } else {
            setCurrentPic(newPic)
        }

    }

    return (
        <div class="usuario">
            <img onClick={changePic} src={CurrentPic} />
            <div class="texto">
                <strong>{nameUser}</strong>
                <span>
                    {nameUser}
                    <ion-icon onClick={changeName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}


