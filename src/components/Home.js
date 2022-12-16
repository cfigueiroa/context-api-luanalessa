import { useContext } from 'react'
import { PokeContext } from '../context/index';

const Home = () => {
    const { selected, setSelected, pokes, setPokes } = useContext(PokeContext);
    return (
        <div>
            <h1 onClick={() => setSelected(!selected)}> Gotta --Click-- 'Em All! </h1>
            {pokes && selected && pokes.map(poke =>
                <ul key={poke.name}>
                    <li>Name: {poke.name}</li>
                    <li>Type: {poke.type}</li>
                </ul>
            )}
            {selected && <button onClick={() => setPokes()}>Delete all</button>}
        </div>
    )
}

export default Home;