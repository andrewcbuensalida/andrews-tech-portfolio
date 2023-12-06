import { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
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
				<h2>
					<a href="https://www.linkedin.com/in/andrewcbuensalida/">
						<LinkedInIcon style={{ fontSize: "3rem" }} />
					</a>
					<a href="mailto:andrewcbuensalida@gmail.com">
						<EmailIcon style={{ fontSize: "3rem" }} />
					</a>
					<a href="https://github.com/andrewcbuensalida">
						<GitHubIcon style={{ fontSize: "3rem" }} />
					</a>{" "}
					<a href="tel:661-964-9268">
						<LocalPhoneIcon style={{ fontSize: "3rem" }} />
					</a>
				</h2>
			</header>
			<Filter projects={projects} handleFilter={handleFilter} />
			<div className="projects">{projectsComponents}</div>
			<img
				style={{ width: "90%", borderRadius: "5%" }}
				src="./images/architecture.png"
				alt="architecture"
			/>
			<div>
				<div
					style={{
						width: "90%",
						height: "720px",
						margin: "0 auto",
						position: "relative",
						borderRadius: "20px",
                        overflow:'hidden'
					}}
				>
					<iframe
						allowfullscreen
						frameborder="0"
						style={{ width: "100%", height: "720px" }}
						src="https://lucid.app/documents/embedded/af494c35-4f01-4e28-a26d-59b6985689ee"
						id="nL.pczGAFalA"
					></iframe>
				</div>
			</div>
			<div className="youtubeContainer">
				<iframe
					// height="100%"
					// width="100%"
					className="youtube"
					src="https://www.youtube.com/embed/videoseries?list=PLr0FiiHGmtJEx7os_nly2U-z5dqq2EZp3"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				></iframe>
			</div>
			<PieChart />
		</div>
	);
}

export default App;
