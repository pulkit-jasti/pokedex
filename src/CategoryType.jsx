const CategoryType = ({ handleCategory }) => {
	return (
		<select name='category' id='category-menu' onChange={handleCategory}>
			<option value='all'>All</option>
			<option value='type'>Type</option>
			<option value='habitat'>Habitat</option>
			<option value='ability'>Ability</option>
		</select>
	);
};

export default CategoryType;
