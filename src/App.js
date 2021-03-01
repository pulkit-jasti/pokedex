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
	let [searchValue, setSearchValue] = useState();

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
				console.log('This is from lineeee: 43');
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

	function handleSearch(event) {
		event.preventDefault();

		fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
			.then(res => res.json())
			.then(data =>
				updateList([<PokemonCard key={searchValue} Name={searchValue} infoURL={`https://pokeapi.co/api/v2/pokemon/${searchValue}`} />])
			)
			.catch(err => {
				console.log(err);
				updateList(<h1>The pokemon '{searchValue}' does not exist in the pokedex</h1>);
			});
	}

	function handleSearchInput(event) {
		setSearchValue(event.target.value);
	}

	useEffect(() => {
		fetch(fetchURL)
			.then(res => res.json())
			.then(data => {
				if (category === 'all') {
					setCategoryOptions(<option>Select a category</option>);
					updateList(data.results.map(el => <PokemonCard key={el.name} Name={el.name} infoURL={el.url} />));
				} else {
					setOptionsURL(data.results);
					setCategoryOptions(
						data.results.map(el => (
							<option key={el.name} value={el.name}>
								{el.name}
							</option>
						))
					);
				}
			})
			.catch(console.log);
	}, [fetchURL, category]);

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
				}
			})
			.catch(console.log);
	}, [cardRenderURL, category]);

	return (
		<div className='App'>
			<Header
				categoryHandler={handleCategory}
				optionsHandler={handleOptions}
				categoryOptionsList={categoryOptions}
				searchHandler={handleSearch}
				searchInputHandler={handleSearchInput}
			/>
			<div className='card-container'>{List}</div>
			<footer>
				<p>
					Created by <a href='https://linktr.ee/pulkit_jasti'>Pulkit Jasti</a> | Source:{' '}
					<a href='https://github.com/pulkit-jasti'>GitHub</a> (Star the repo please)
				</p>
				<p>
					API Used: <a href='https://pokeapi.co/'>https://pokeapi.co/</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
