import React, { useState, useEffect } from 'react'
import './MiApi.css';

const MiApi = () => {
   
    const [aves, setAves] = useState([])
    const [search, setSearch] = useState("")

    const URL = 'https://aves.ninjas.cl/api/birds'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setAves(data)
    }
 
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? aves : aves.filter((dato) => dato.name.spanish.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        showData()
    }, [])

    return (
        <div class="contenedor">

            <div class="buscador">
                <p>Buscar:</p> <input value={search} onChange={searcher} type="text" placeholder=' Nombre de Ave' size="30" />
            </div>
            <div class="contenedorAves">
                {results.map((ave) => (
                    <div class="card" key={ave.uid}>

                        <div class="card-title">{ave.name.spanish}</div>
                        <img src={ave.images.main}></img>

                        <p class="card-desc">
                            <span> <b>Nombre en Español:</b></span><br></br>
                            <span>{ave.name.spanish}</span>
                            <br></br>
                            <span><b> Nombre en Ingles: </b></span><br></br>
                            <span>{ave.name.english}</span>
                            <br></br>
                            <span><b> Nombre en Latin: </b></span><br></br>
                            <span>{ave.name.latin}</span>
                            <br></br><br></br>
                            <a href={ave.images.full} target="_blank"> Click aquí para ver imagen Full-Size </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MiApi