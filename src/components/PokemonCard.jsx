import { useState, useEffect } from 'react';

const PokemonCard = ({ Name, infoURL }) => {
	let [info, updateInfo] = useState('');

	Name = Name[0].toUpperCase() + Name.slice(1);

	useEffect(() => {
		fetch(infoURL)
			.then(res => res.json())
			.then(data => {
				let typeString = [];
				data.types.forEach(el => {
					typeString.push(el.type.name[0].toUpperCase() + el.type.name.slice(1));
				});
				updateInfo({
					imageURL: data.sprites.front_default,
					type: typeString.join(', '),
					weight: data.weight,
					hp: data.stats[0].base_stat,
					attack: data.stats[1].base_stat,
					defense: data.stats[2].base_stat,
					specialAttack: data.stats[3].base_stat,
					specialDefense: data.stats[4].base_stat,
					speed: data.stats[5].base_stat,
				});
			})
			.catch(console.log);
	}, [infoURL]);

	return (
		<div className='pokemon-card'>
			<div className='img-wrapper'>
				<img src={info.imageURL} alt='' />
			</div>
			<h2>{Name}</h2>
			<h4>Weight: {info.weight}</h4>
			<h4>Type: {info.type}</h4>
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
