import { useState } from "react";
import Filter from "./components/Filter";
import Parallax from "./components/parallax";
import Project from "./components/Project";
import projects from "./data";
import PieChart from "./components/PieChart";

function App() {
	Parallax();
	const [filters, setFilters] = useState([]);
	function handleFilter(e) {
		if (e.target.textContent == "All") {
			if (e.target.className.includes("unselected")) {
				let allUnselected = Array.from(
					document.getElementsByClassName("unselected")
				);
				allUnselected.forEach((el) => {
					el.className = "selected";
					setFilters((prev) => [...prev, el.textContent.toLowerCase()]);
				});
			} else {
				let allSelected = Array.from(
					document.getElementsByClassName("selected")
				);
				allSelected.forEach((el) => {
					el.className = "unselected";
					setFilters([]);
				});
			}
		} else {
			if (e.target.className == "unselected") {
				e.target.className = "selected";
			} else {
				e.target.className = "unselected";
			}
			const clickedFilter = e.target.textContent.toLowerCase();
			setFilters((prev) => {
				if (prev.includes(clickedFilter)) {
					return prev.filter((filter) => filter !== clickedFilter);
				} else {
					return [...prev, clickedFilter];
				}
			});
		}
	}
	const projectsComponents = projects.map((project) => (
		<Project filters={filters} data={project} />
	));

	return (
		<div>
			<header>
				<h1>Andrew Buensalida - Software Engineer</h1>
				<h2>A Full-stack and cloud developer in Silicon Valley</h2>
				<h2>
					For hire - Email: andrewcbuensalida@gmail.com - Phone: 661-964-9268
				</h2>
			</header>
			<Filter filters={filters} handleFilter={handleFilter} />
			<div className="projects">{projectsComponents}</div>
			<PieChart />
		</div>
	);
}

export default App;
