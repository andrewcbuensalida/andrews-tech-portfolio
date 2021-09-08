function Project({ data }) {
	const { image, alt, description, stack, URL, title } = data;
	console.log(image);
	console.log(data);
	return (
		<div className="project">
			<a href={URL}>
				<img className="preview" src={image} alt={alt} />
			</a>
			<h1>{title}</h1>
			<h2>{description}</h2>
		</div>
	);
}

export default Project;
