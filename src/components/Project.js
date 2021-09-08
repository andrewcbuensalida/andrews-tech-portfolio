import Tilt from "react-tilt";
function Project({ data }) {
	const { image, alt, description, stack, URL, title } = data;
	return (
		<div className="project">
			<Tilt
				className="Tilt"
				options={{ max: 1, perspective: 2000, scale: 1.1 }}
			>
				<a href={URL}>
					<img className="preview" src={image} alt={alt} />
				</a>
			</Tilt>

			<h1>{title}</h1>
			<h2>{description}</h2>
			<h2>
				<a href={URL}>{URL}</a>
			</h2>
		</div>
	);
}

export default Project;
