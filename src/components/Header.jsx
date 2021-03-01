const Header = ({ categoryHandler, optionsHandler, categoryOptionsList, searchHandler, searchInputHandler }) => {
	return (
		<header>
			<div>
				<select name='category' id='category-menu' onChange={categoryHandler}>
					<option value='all'>All</option>
					<option value='type'>Type</option>
					<option value='habitat'>Habitat</option>
					<option value='ability'>Ability</option>
					<option value='color'>Colour</option>
					<option value='shape'>Shape</option>
				</select>
				<select name='category' id='category-menu' onChange={optionsHandler}>
					{categoryOptionsList}
				</select>
			</div>
			<div className='title-container'>
				<img src='https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' alt='' />
			</div>
			<form action='' onSubmit={searchHandler}>
				<input type='text' onChange={searchInputHandler} />
				<button type='submit'>Search</button>
			</form>
		</header>
	);
};

export default Header;
