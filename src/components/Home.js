import React, { useContext } from 'react'
import { PokeContext } from '../context/index';

const Home = () => {
    const { pokes } = useContext(PokeContext);
    return (
        <div>
            <h1>Gotta Catch 'Em All!</h1>
            {pokes && pokes.map(poke =>
                <ul key={poke.name} style={{ listStyleType: "none", border: "1px solid black" }}>
                    <li>Name: {poke.name}</li>
                    <li>Type: {poke.type.charAt(0).toUpperCase() + poke.type.slice(1)}</li>
                    <li><img src={poke.img} alt={poke.name}></img></li>
                    <li>Health: {poke.health}</li>
                </ul>
            )}
        </div>
    )
}

export default Home;