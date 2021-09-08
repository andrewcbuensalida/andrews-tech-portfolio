function Filter({ handleFilter }) {
	return (
		<div>
			<ul className="filter">
				<li>Filter:</li>
				<li onClick={handleFilter}>Node</li>
				<li onClick={handleFilter}>React</li>
				<li onClick={handleFilter}>Web Scraping</li>
				<li onClick={handleFilter}>Javascript</li>
				<li onClick={handleFilter}>AWS</li>
				<li onClick={handleFilter}>GraphQL</li>
				<li onClick={handleFilter}>MongoDB</li>
				<li onClick={handleFilter}>CI/CD</li>
				<li onClick={handleFilter}>Firebase</li>
				<li onClick={handleFilter}>HTML/CSS</li>
			</ul>
		</div>
	);
}

export default Filter;
