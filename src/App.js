import Filter from "./components/Filter";
import Parallax from "./components/parallax";
import Project from "./components/Project";
import { blackjack, books, instagram, starwars, todo } from "./data";

function App() {
	Parallax();
	return (
		<div>
			<header>
				<h1>Andrew Love - Software Engineer</h1>
				<h2>Full-stack and cloud developer</h2>
				<h2>
					For hire - Email: andrewcbuensalida@gmail.com - Phone: 661-964-9268
				</h2>
			</header>
			<Filter />
			<div className="projects">
				<Project data={instagram} />
				<Project data={books} />
				<Project data={blackjack} />
				<Project data={starwars} />
				<Project data={todo} />
			</div>
		</div>
	);
}

export default App;
