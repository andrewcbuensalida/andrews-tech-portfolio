// github languages
async function getLanguages() {
	const reposResponse = await fetch(
		"https://api.github.com/users/andrewcbuensalida/repos"
	);

	const repos = await reposResponse.json();
	if (repos.length > 0) {
		let totalLanguagesBytes = {};
		const reposLanguagesURL = repos.map((repo) => repo.languages_url);
		const reposLanguagesBytes = await Promise.all(
			reposLanguagesURL.map(async (repoLanguageURL) => {
				const languagesBytesResponse = await fetch(repoLanguageURL);
				const languagesBytes = await languagesBytesResponse.json();
				return languagesBytes;
			})
		);
		reposLanguagesBytes.forEach((repoLanguagesBytes) => {
			for (const lang in repoLanguagesBytes) {
				totalLanguagesBytes = {
					...totalLanguagesBytes,
					[lang]:
						(totalLanguagesBytes[lang] || 0) +
						(repoLanguagesBytes[lang] || 0),
				};
			}
		});
		return totalLanguagesBytes;
	}
}

export default getLanguages;
