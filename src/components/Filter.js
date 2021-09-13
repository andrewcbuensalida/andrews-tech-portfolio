function Filter({ handleFilter }) {
	return (
		<div>
			<ul className="filter">
				<li>Filter:</li>
				<button className="unselected" onClick={handleFilter}>
					All
				</button>
				<button className="unselected" onClick={handleFilter}>
					Node
				</button>
				<button className="unselected" onClick={handleFilter}>
					React
				</button>
				<button className="unselected" onClick={handleFilter}>
					Web Scraping
				</button>
				<button className="unselected" onClick={handleFilter}>
					Javascript
				</button>
				<button className="unselected" onClick={handleFilter}>
					Amazon Web Services
				</button>
				<button className="unselected" onClick={handleFilter}>
					GraphQL
				</button>
				<button className="unselected" onClick={handleFilter}>
					MongoDB
				</button>
				<button className="unselected" onClick={handleFilter}>
					CI/CD
				</button>
				<button className="unselected" onClick={handleFilter}>
					Firebase
				</button>
				<button className="unselected" onClick={handleFilter}>
					HTML/CSS
				</button>{" "}
				<button className="unselected" onClick={handleFilter}>
					Google Cloud Platform
				</button>{" "}
				<button className="unselected" onClick={handleFilter}>
					EJS
				</button>{" "}
				<button className="unselected" onClick={handleFilter}>
					MVC Pattern
				</button>
			</ul>
		</div>
	);
}

export default Filter;
