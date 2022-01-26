import { Pie } from "react-chartjs-2";
import getLanguages from "./getLanguages";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

function PieChart() {
	const [languages, setLanguages] = useState([]);
	const [percentages, setPercentages] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const totalLanguagesBytes = await getLanguages();
			if (totalLanguagesBytes) {
				setLanguages(Object.keys(totalLanguagesBytes));
				const totalBytes = Object.values(totalLanguagesBytes).reduce(
					(prev, curr) => prev + curr
				);
				const percentages = Object.values(totalLanguagesBytes).map(
					(languageBytes) =>
						Math.floor((languageBytes / totalBytes) * 100)
				);
				setPercentages(percentages);
			}
		}
		fetchData();
	}, []);
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
				<div id="pie">
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
						height={365}
						width={365}
						options={{
							maintainAspectRatio: false,
							plugins: {
								title: {
									display: true,
									text: "Languages by bytes % (from Github)",
								},
								tooltip: {
									backgroundColor: "grey",
									callbacks: {
										label: function (tooltipItem) {
											return `${tooltipItem.label} ${tooltipItem.raw} %`;
										},
									},
								},
							},
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default PieChart;
