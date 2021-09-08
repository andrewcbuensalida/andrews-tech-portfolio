import { useState } from "react";
import Filter from "./components/Filter";
import Parallax from "./components/parallax";
import Project from "./components/Project";
import { blackjack, books, instagram, starwars, todo } from "./data";

function App() {
	Parallax();
	const [filters, setFilters] = useState([]);
	function handleFilter(e) {
		const clickedFilter = e.target.textContent.toLowerCase();
		setFilters((prev) => {
			if (prev.includes(clickedFilter)) {
				return prev.filter((filter) => filter != clickedFilter);
			} else {
				return [...prev, clickedFilter];
			}
		});
		console.log(filters);
	}
	return (
		<div>
			<header>
				<h1>Andrew Love - Software Engineer</h1>
				<h2>Full-stack and cloud developer</h2>
				<h2>
					For hire - Email: andrewcbuensalida@gmail.com - Phone: 661-964-9268
				</h2>
			</header>
			<Filter filters={filters} handleFilter={handleFilter} />
			<div className="projects">
				<Project filters={filters} data={instagram} />
				<Project filters={filters} data={books} />
				<Project filters={filters} data={blackjack} />
				<Project filters={filters} data={starwars} />
				<Project filters={filters} data={todo} />
			</div>
		</div>
	);
}

export default App;
