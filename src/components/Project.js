import Tilt from "react-tilt";

function Project({ filters, data }) {
	const { image, alt, description, stack, URL, title, githubLinks } = data;
	let isIncluded = false;

	// if all the languages in the filter are in the languages that the project uses, the project is included
	isIncluded = filters.every((filter) => {
		return stack.includes(filter);
	});
	// stack.forEach((lang) => {
	// 	if (filters.includes(lang)) {
	// 		isIncluded = true;
	// 	}
	// });

	return (
		isIncluded && (
			<div className={`project`}>
				{/* Tilting makes it seem like it's clickable, so if there's no URL to go to, it shouldn't tilt */}
				<Tilt
					className="Tilt"
					options={{
						max: URL && 15,
						perspective: URL && 1500,
						scale: URL && 1.05,
					}}
				>
					{/*if url is null, dont go anywhere. if there is a url, go to url*/}
					<a href={URL}>
						<img className="preview" src={image} alt={alt} />
					</a>
				</Tilt>

				<h1 className="title">
					{title}
					{githubLinks.map((link) => (
						<a href={link} className="github">
							<img alt="github" src=".\images\github.png" />
						</a>
					))}
				</h1>
				<p>{description}</p>
				<h2>
					{/* URL link. if null, dont show*/}
					<a href={URL}>
						{URL &&
							URL.replace("http://", "")
								.replace("https://", "")
								.slice(0, 34)}
						{URL && URL.length > 34 && "..."}
					</a>
				</h2>
			</div>
		)
	);
}

export default Project;
