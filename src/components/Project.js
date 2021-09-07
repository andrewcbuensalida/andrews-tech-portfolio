// import blackjack from "../../public/images/blackjack.png";
function Project({ src, alt }) {
	return (
		<div className="project">
			<img className="preview" src={src} alt={alt} />
		</div>
	);
}

export default Project;
