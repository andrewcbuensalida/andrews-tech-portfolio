import { Pie } from "react-chartjs-2";
import getLanguages from "./getLanguages";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

function PieChart() {
	const [languages, setLanguages] = useState([]);
	const [percentages, setPercentages] = useState([]);
	useEffect(async () => {
		const totalLanguagesBytes = await getLanguages();
		// console.log(totalLanguagesBytes);
		setLanguages(Object.keys(totalLanguagesBytes));
		const totalBytes = Object.values(totalLanguagesBytes).reduce(
			(prev, curr) => prev + curr
		);
		const percentages = Object.values(totalLanguagesBytes).map(
			(languageBytes) => Math.floor((languageBytes / totalBytes) * 100)
		);
		setPercentages(percentages);
	}, []);
	// console.log(languages);
	// console.log(percentages);
	const randomColors = languages.map(
		() => `#${Math.floor(Math.random() * 16777215).toString(16)}`
	);
	return (
		<div>
			{!languages ? (
				<Skeleton
					count={1}
					width={300}
					height={300}
					style={{ borderRadius: "50%" }}
				/>
			) : (
				<Pie
					data={{
						labels: languages,
						datasets: [
							{
								label: "Percentage",
								data: percentages,
								backgroundColor: randomColors,
								borderColor: randomColors,
							},
						],
					}}
					height={300}
					width={300}
					options={{
						maintainAspectRatio: false,
						plugins: {
							title: {
								display: true,
								text: "Languages by % (as per Github)",
							},
							tooltip: {
								backgroundColor: "grey",
								callbacks: {
									label: function (tooltipItem, data) {
										console.log(tooltipItem.raw);
										return tooltipItem.raw + "%";
									},
								},
							},
						},
					}}
				/>
			)}
		</div>
	);
}

export default PieChart;
