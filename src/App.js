import { useState, useEffect } from 'react';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';

function App() {
	let [fetchURL, updateURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
	let [List, updateList] = useState();
	let [category, updateCategory] = useState('all');
	let [categoryOptions, setCategoryOptions] = useState('Select an option');
	let [optionsURL, setOptionsURL] = useState();
	let [cardRenderURL, setCardRenderURL] = useState();

	function handleCategory(val) {
		updateCategory(val.target.value);

		switch (val.target.value) {
			case 'all':
				updateURL('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
				break;

			case 'type':
				updateURL('https://pokeapi.co/api/v2/type/');
				break;

			case 'habitat':
				updateURL('https://pokeapi.co/api/v2/pokemon-habitat/');
				break;

			case 'ability':
				updateURL('https://pokeapi.co/api/v2/ability/');
				break;

			case 'color':
				updateURL('https://pokeapi.co/api/v2/pokemon-color');
				break;

			case 'shape':
				updateURL('https://pokeapi.co/api/v2/pokemon-shape');
				break;

			default:
				alert('Error !!!!!');
				break;
		}
	}

	function handleOptions(action) {
		optionsURL.forEach(el => {
			if (el.name === action.target.value) {
				setCardRenderURL(el.url);
			}
		});
	}

	useEffect(() => {
		fetch(fetchURL)
			.then(res => res.json())
			.then(data => {
				if (category !== 'all') {
					setOptionsURL(data.results);
					setCategoryOptions(
						data.results.map(el => (
							<option key={el.name} value={el.name}>
								{el.name}
							</option>
						))
					);
					console.log(data);
					//updateList(data.pokemon.map(el => <PokemonCard key={el.pokemon.name} Name={el.pokemon.name} infoURL={el.pokemon.url} />));
				} else {
					setCategoryOptions(<option>Select a category</option>);
					updateList(data.results.map(el => <PokemonCard key={el.name} Name={el.name} infoURL={el.url} />));
				}
			})
			.catch(console.log);
	}, [fetchURL]);

	useEffect(() => {
		fetch(cardRenderURL)
			.then(res => res.json())
			.then(data => {
				if (category === 'type' || category === 'ability') {
					updateList(data.pokemon.map(el => <PokemonCard key={el.pokemon.name} Name={el.pokemon.name} infoURL={el.pokemon.url} />));
				} else if (category === 'habitat' || category === 'color' || category === 'shape') {
					updateList(
						data.pokemon_species.map(el => (
							<PokemonCard key={el.name} Name={el.name} infoURL={`https://pokeapi.co/api/v2/pokemon/${el.name}`} />
						))
					);
				} else {
					alert('There seemes to be some kind of error');
				}
			})
			.catch(console.log);
	}, [cardRenderURL]);

	return (
		<div className='App'>
			<Header categoryHandler={handleCategory} optionsHandler={handleOptions} categoryOptionsList={categoryOptions} />
			<div className='card-container'>{List}</div>
		</div>
	);
}

export default App;
