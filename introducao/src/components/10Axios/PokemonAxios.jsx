import { useState, useEffect } from "react"
import axios from "axios"

const PokemonAxios = () => {
    
    const [id, setId] = useState(10)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [image2, setImage2] = useState("")

    useEffect(
        ()=>{

            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    //console.log(response.data.sprites)
                    setName(response.data.name)
                    setImage(response.data.sprites.front_default)
                    setImage2(response.data.sprites.back_default)
                }
            )
            .catch(error=>console.log(error))

        }
        ,
        [id]
    )

    return (
        <div>
            <h1>ID: {id}</h1>
            <h1>Nome: {name.toUpperCase()}</h1>
            <img src={image} alt="pokemon" style={{ width: '200px', }} />
            <img src={image2} alt="pokemon" style={{ width: '200px', }}/>
            <button
                onClick={()=>setId(id+1)}
            >
                Próximo Pokemon
            </button>
            <button
                onClick={()=>setId(id-1)}
            >
                Pokemon Anterior
            </button>
        </div>
    )
}

export default PokemonAxios