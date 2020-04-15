import React, {useState, useEffect} from 'react'
import Loading from './Loading'
export default function Pokemons(props) {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        for(let i = 0; i <= props.list.length - 1; i++) {
            fetch(props.list[i])
            .then(response => response.json())
            .then(data => {
                setPokemons(prevState => [...prevState, {
                    id: data.id,
                    image: data.sprites.front_default,
                    name: data.name, 
                    abilities: data.abilities,
                    stats: data.stats,
                    types: data.types
                }])
          })
          setLoading(false)
        }
    }, [props.list])
    return (
        (loading) ? <Loading /> :
                    pokemons.map(pokemon => {
                        const showStat = (statName) => pokemon.stats.map(s => (s.stat.name == statName) ? s.base_stat : null);
                        return (
                            <div key={pokemon.id} className="p-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5>
                                            {pokemon.name[0].toUpperCase() + pokemon.name.substr(1, pokemon.name.length - 1)}
                                        </h5>
                                        <p>{showStat('hp')} HP</p>
                                    </div>
                                    <img className="card-img-top" src={pokemon.image} alt="Pokemon miniature image"/>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {pokemon.types.map(t=> 
                                            <span key={t.type.name} className={
                                                (t.type.name == 'fire' || t.type.name == 'dragon') ? "badge-danger badge p-2 mr-2" : 
                                                (t.type.name == 'water') ? "badge-primary badge p-2 mr-2" :
                                                (t.type.name == 'poison' || t.type.name == 'psychic' || t.type.name == 'dark') ? "badge-dark badge p-2 mr-2" :
                                                (t.type.name == 'flying' || t.type.name == 'ghost') ? "badge-light badge p-2 mr-2" :
                                                (t.type.name == 'normal' || t.type.name == 'rock' || t.type.name == 'fighting' || t.type.name == 'steel') ? "badge-secondary badge p-2 mr-2" :
                                                (t.type.name == 'bug' || t.type.name == 'electric') ? "badge-warning badge p-2 mr-2" :
                                                (t.type.name == 'grass' || t.type.name == 'ground') ? "badge-success badge p-2 mr-2" : "badge-info badge p-2 mr-2"
                                            }>{t.type.name}</span>)}    
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <div className="wrapper">
                                                <img className="mr-2" src="https://cdn2.iconfinder.com/data/icons/pirates-9/100/swords-512.png" width="22.5" height="22.5" alt="Attack"/> 
                                                {showStat('attack')}
                                            </div>
                                            <div className="wrapper">
                                                <img className="mr-2" src="https://icons-for-free.com/iconfiles/png/512/firewall+lock+shield+icon-1320165909407344998.png" width="22.5" height="22.5" alt="Defense"/> 
                                                {showStat('defense')}
                                            </div>
                                            <div className="wrapper">
                                                <img className="mr-2" src="https://www.freeiconspng.com/uploads/faster-icon-png-1.png" width="22.5" height="22.5" alt="Speed"/> 
                                                {showStat('speed')}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }) 
    )
}
