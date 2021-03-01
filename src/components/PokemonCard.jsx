import { useState, useEffect } from 'react';

const PokemonCard = ({ Name, infoURL }) => {
	let [info, updateInfo] = useState('');

	useEffect(() => {
		fetch(infoURL)
			.then(res => res.json())
			.then(data =>
				updateInfo({
					imageURL: data.sprites.front_default,
					type: data.types[0].type.name,
					//data.types[1].type.name
					weight: data.weight,
					hp: data.stats[0].base_stat,
					attack: data.stats[1].base_stat,
					defense: data.stats[2].base_stat,
					specialAttack: data.stats[3].base_stat,
					specialDefense: data.stats[4].base_stat,
					speed: data.stats[5].base_stat,
				})
			)
			.catch(console.log);
	}, []);

	return (
		<div className='pokemon-card'>
			<div className='img-wrapper'>
				<img src={info.imageURL} alt='' />
			</div>
			<h2>{Name}</h2>
			{/* {console.log(info)} */}
			<h5>Weight: {info.weight}</h5>
			<h5>Type: {info.type}</h5>
			<h4>Stats:</h4>
			<ul>
				<li>HP: {info.hp}</li>
				<li>Attack: {info.attack}</li>
				<li>Defense: {info.defense}</li>
				<li>Special Attack: {info.specialAttack}</li>
				<li>Special Defense: {info.specialDefense}</li>
				<li>Speed: {info.speed}</li>
			</ul>
		</div>
	);
};

export default PokemonCard;
