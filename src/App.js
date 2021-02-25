import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

function App() {
	let [List, updateList] = useState();

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
			.then(res => res.json())
			.then(data => {
				//console.log(data.results.map(el => console.log(el.name)));
				//updateList(data.results.map(el => <h3>{el}</h3>));
				updateList(data.results.map(el => <PokemonCard key={el.name} Name={el.name} infoURL={el.url} />));
			})
			.catch(console.log);
	}, []);

	return (
		<div className='App'>
			<div className='title-container'>
				<img src='https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' alt='' />
			</div>
			<div className='card-container'>{List}</div>
		</div>
	);
}

export default App;
