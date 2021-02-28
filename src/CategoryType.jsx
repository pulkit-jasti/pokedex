const CategoryType = ({ handleCategory }) => {
	return (
		<select name='category' id='category-menu' onChange={handleCategory}>
			<option value='all'>All</option>
			<option value='type'>Type</option>
			<option value='habitat'>Habitat</option>
			<option value='ability'>Ability</option>
			<option value='color'>Colour</option>
			<option value='shape'>Shape</option>
		</select>
	);
};

export default CategoryType;
