import { useState, useEffect } from 'react';
import CategoryType from './CategoryType';
import PokemonCard from './PokemonCard';

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
				switch (category) {
					case 'type':
						updateList(data.pokemon.map(el => <PokemonCard key={el.pokemon.name} Name={el.pokemon.name} infoURL={el.pokemon.url} />));
						break;

					case 'habitat':
						//console.log(data.pokemon_species[0]);
						updateList(
							data.pokemon_species.map(el => (
								<PokemonCard key={el.name} Name={el.name} infoURL={`https://pokeapi.co/api/v2/pokemon/${el.name}`} />
							))
						);
						break;

					case 'color':
						//console.log(data.pokemon_species[0]);
						updateList(
							data.pokemon_species.map(el => (
								<PokemonCard key={el.name} Name={el.name} infoURL={`https://pokeapi.co/api/v2/pokemon/${el.name}`} />
							))
						);
						break;

					case 'shape':
						//console.log(data.pokemon_species[0]);
						updateList(
							data.pokemon_species.map(el => (
								<PokemonCard key={el.name} Name={el.name} infoURL={`https://pokeapi.co/api/v2/pokemon/${el.name}`} />
							))
						);
						break;

					case 'ability':
						updateList(data.pokemon.map(el => <PokemonCard key={el.pokemon.name} Name={el.pokemon.name} infoURL={el.pokemon.url} />));
						break;

					default:
						break;
				}
			})
			.catch(console.log);
	}, [cardRenderURL]);

	return (
		<div className='App'>
			<div className='title-container'>
				<img src='https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' alt='' />
			</div>
			<CategoryType handleCategory={handleCategory} />
			<select name='category' id='category-menu' onChange={handleOptions}>
				{categoryOptions}
			</select>
			<div className='card-container'>{List}</div>
		</div>
	);
}

export default App;
