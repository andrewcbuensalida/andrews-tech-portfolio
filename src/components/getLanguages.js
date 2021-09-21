// github languages
async function getLanguages() {
	const reposResponse = await fetch(
		"https://api.github.com/users/andrewcbuensalida/repos"
	);
	const repos = await reposResponse.json();
	const reposLanguagesURL = repos.map((repo) => repo.languages_url);
	const reposLanguagesBytes = await Promise.all(
		reposLanguagesURL.map(async (repoLanguageURL) => {
			const languagesBytesResponse = await fetch(repoLanguageURL);
			const languagesBytes = await languagesBytesResponse.json();
			// console.log(languagesBytes);
			return languagesBytes;
		})
	);
	// console.log(reposLanguagesBytes);
	let totalLanguagesBytes = {};
	reposLanguagesBytes.forEach((repoLanguagesBytes) => {
		for (const lang in repoLanguagesBytes) {
			// console.log(repoLanguagesBytes[lang]);
			totalLanguagesBytes = {
				...totalLanguagesBytes,
				[lang]:
					(totalLanguagesBytes[lang] || 0) + (repoLanguagesBytes[lang] || 0),
			};
		}
	});
	// return "hello";
	// console.log(totalLanguagesBytes);
	return totalLanguagesBytes;
}

export default getLanguages;
