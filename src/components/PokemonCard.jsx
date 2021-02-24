import { useState, useEffect } from 'react';

const PokemonCard = ({ Name, infoURL }) => {
	let [info, updateInfo] = useState('');

	useEffect(() => {
		fetch(infoURL)
			.then(res => res.json())
			.then(data =>
				updateInfo({
					imageURL: data.sprites.front_default,
					types: () => {
						console.log('jjjj');
						// let type = '';
						// data.types.forEach(el => {
						// 	type += el.type.name;
						// });
						// return type;
					},
					//data.types[1].type.name
					weight: data.weight,
					stats: {
						hp: data.stats[0].base_stat,
						attack: data.stats[1].base_stat,
						defense: data.stats[2].base_stat,
						specialAttack: data.stats[3].base_stat,
						specialDefense: data.stats[4].base_stat,
						speed: data.stats[5].base_stat,
					},
				})
			)
			.catch(console.log);
	}, []);

	return (
		<div className='pokemon-card'>
			<img src={info.imageURL} alt='' />
			<h3>{Name}</h3>
			{/* <img src={ImgSrc} alt={Name} /> */}
			{console.log(info)}
			<h4>{info.weight}</h4>
			<h4>k</h4>
		</div>
	);
};

export default PokemonCard;
