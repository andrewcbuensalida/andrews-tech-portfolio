import { useState } from "react";
import Filter from "./components/Filter";
import Parallax from "./components/parallax";
import Project from "./components/Project";
import projects from "./data";
import PieChart from "./components/PieChart";

function App() {
	// filter buttons selected
	const [filters, setFilters] = useState([]);
	Parallax();

	// loop through projects, if at least one filter isn't included in that project's stack, disable all of it's
	//languages that aren't selected
	// [1,2]
	// [2,3]

	function handleFilter(e) {
		if (e.target.textContent === "Clear") {
			let allSelected = Array.from(
				document.getElementsByClassName("selected")
			);
			let allDisabled = Array.from(
				document.getElementsByClassName("disabled")
			);
			let all = [...allDisabled, ...allSelected];
			all.forEach((el) => {
				el.className = "unselected";
			});
			setFilters([]);
		} else {
			if (e.target.className === "unselected") {
				e.target.className = "selected";
			} else if (e.target.className === "selected") {
				e.target.className = "unselected";
			}
			if (e.target.className !== "disabled") {
				const clickedFilter = e.target.textContent.toLowerCase();
				setFilters((prev) => {
					let newFilters;
					if (prev.includes(clickedFilter)) {
						newFilters = prev.filter(
							(filter) => filter !== clickedFilter
						);
					} else {
						newFilters = [...prev, clickedFilter];
					}
					projects.forEach((project) => {
						let filtersFitInProject = newFilters.every((filter) => {
							return project.stack.includes(filter);
						});
						if (!filtersFitInProject) {
							let allUnselected = Array.from(
								document.getElementsByClassName("unselected")
							);
							allUnselected.forEach((el) => {
								if (
									project.stack.includes(
										el.textContent.toLowerCase()
									)
								) {
									el.className = "disabled";
								}
							});
						}
					});
					projects.forEach((project) => {
						let filtersFitInProject = newFilters.every((filter) => {
							return project.stack.includes(filter);
						});
						if (filtersFitInProject) {
							let allDisabled = Array.from(
								document.getElementsByClassName("disabled")
							);
							allDisabled.forEach((el) => {
								if (
									project.stack.includes(
										el.textContent.toLowerCase()
									)
								) {
									el.className = "unselected";
								}
							});
						}
					});
					return newFilters;
				});
			}
		}
	}
	const projectsComponents = projects.map((project) => (
		<Project key={project.title} filters={filters} data={project} />
	));

	return (
		<div>
			<header>
				<h1>Andrew Buensalida - Software Engineer</h1>
				<h2>A Full-stack and cloud developer in Silicon Valley</h2>
				<h2>
					For hire - Email: andrewcbuensalida@gmail.com - Phone:
					661-964-9268
				</h2>
			</header>
			<Filter projects={projects} handleFilter={handleFilter} />
			<div className="projects">{projectsComponents}</div>
			<PieChart />
			{/* <img
				style={{ width: "75%", margin: "30px", borderRadius: "5%" }}
				src="./images/architecture.png"
				alt="architecture"
			/> */}
			<h2>
				{/* Javascript Leetcode Tutorials
				<a href="https://www.youtube.com/playlist?list=PLr0FiiHGmtJEx7os_nly2U-z5dqq2EZp3">
					https://www.youtube.com/playlist?list=PLr0...
				</a>
				<br />
				Python Leetcode Tutorials
				<a href="https://www.youtube.com/playlist?list=PLr0FiiHGmtJHEtE3fTprJKodg7bqtk6bg">
					https://www.youtube.com/playlist?list=P...
				</a>{" "}
				<br /> */}
				LinkedIn
				<a href="https://www.linkedin.com/in/andrewcbuensalida/">
					https://www.linkedin.com/in/andrewcbuensalida/
				</a>
			</h2>
		</div>
	);
}

export default App;
