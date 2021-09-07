import Filter from "./components/Filter";
import Parallax from "./components/parallax";
import Project from "./components/Project";

function App() {
	Parallax();
	return (
		<div>
			<h1>Andrew Buensalida - Software Engineer</h1>
			<h3>Full-stack and cloud developer</h3>
			<Filter />
			<div className="projects">
				<Project src="./images/blackjack.png" alt="blackjack" />
				<Project src="./images/books.png" alt="books" />
				<Project src="./images/instagram.png" alt="isntagram" />
				<Project src="./images/starwars.png" alt="starwars" />
				<Project src="./images/todo.png" alt="todo" />
			</div>
		</div>
	);
}

export default App;
