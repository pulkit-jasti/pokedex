const Header = ({ categoryHandler, optionsHandler, categoryOptionsList, searchHandler, searchInputHandler }) => {
	return (
		<header>
			<div>
				<div className='select select-1'>
					<select name='category' id='category-menu' onChange={categoryHandler}>
						<option value='all'>All</option>
						<option value='type'>Type</option>
						<option value='habitat'>Habitat</option>
						<option value='ability'>Ability</option>
						<option value='color'>Colour</option>
						<option value='shape'>Shape</option>
					</select>
				</div>
				<div className='select select-2'>
					<select name='category' id='category-menu' onChange={optionsHandler}>
						{categoryOptionsList}
					</select>
				</div>
			</div>
			<div className='title-container'>
				<img src='https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' alt='' />
			</div>
			<h5>Or</h5>
			<form action='' onSubmit={searchHandler}>
				<input type='text' placeholder='Enter the name of a pokemon' onChange={searchInputHandler} />
				<button type='submit'>Search</button>
			</form>
		</header>
	);
};

export default Header;
