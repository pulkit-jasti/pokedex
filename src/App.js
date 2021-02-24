import { useState, useEffect } from 'react';
//import CardList from './components/CardList';
import PokemonCard from './components/PokemonCard';

function App() {
	let [List, updateList] = useState();

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/')
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
			<h1>nkj</h1>
			{List}
			<button>add</button>
		</div>
	);
}

export default App;
