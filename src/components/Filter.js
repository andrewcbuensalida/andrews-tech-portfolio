import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";

function Filter({ handleFilter, projects }) {
	const [count, setCount] = useState(
		document.getElementsByClassName("project").length
	);
	function toPascalCase(string) {
		let split = string.split(" ");
		let pascalSplit = split.map(
			(word) => word[0].toUpperCase() + word.substr(1)
		);
		let pascalJoin = pascalSplit.join(" ");
		return pascalJoin;
	}
	// could do this, or regular object, or array of arrays, or localecompare, or the one in the return with entries,sort,map
	let filterBtns = new Map();
	for (let project of projects) {
		for (let lang of project.stack) {
			if (!filterBtns.has(lang)) {
				filterBtns.set(
					lang,
					<button
						key={lang}
						className="unselected"
						onClick={handleFilter}
					>
						{toPascalCase(lang)}
					</button>
				);
			}
		}
	}

	useEffect(() => {
		setCount(document.getElementsByClassName("project").length);
	});

	return (
		<div>
			<ul className="filter">
				<li>Filter:</li>
				<button className="clear" onClick={handleFilter}>
					Clear ({count})
				</button>
				{/* sorting [['a',<h1...>],['b',<h1...>]] seems to be just comparing the first elements, a to b */}
				{[...filterBtns.entries()].sort().map((lang) => lang[1])}
			</ul>
		</div>
	);
}

export default Filter;
