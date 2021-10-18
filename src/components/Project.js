import Tilt from "react-tilt";

function Project({ filters, data }) {
	const { image, alt, description, stack, URL, title, githubLink } = data;
	let isIncluded = false;
	stack.forEach((lang) => {
		if (filters.includes(lang)) {
			isIncluded = true;
		}
	});

	return (
		isIncluded && (
			<div className={`project`}>
				<Tilt
					className="Tilt"
					options={{ max: 15, perspective: 1500, scale: 1.05 }}
				>
					<a href={URL}>
						<img className="preview" src={image} alt={alt} />
					</a>
				</Tilt>

				<h1 className="title">
					{title}
					<a href={githubLink} className="github">
						<img src=".\images\github.png" />
					</a>
				</h1>
				<h2>{description}</h2>
				<h2>
					<a href={URL}>
						{URL.replace("http://", "")
							.replace("https://", "")
							.slice(0, 34)}
						{URL.length > 34 && "..."}
					</a>
				</h2>
			</div>
		)
	);
}

export default Project;
