document.getElementById("searchButton").addEventListener("click", searchLyrics);

document
	.getElementById("searchInput")
	.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			searchLyrics();
		}
	});

function searchLyrics() {
	const searchQuery = document
		.getElementById("searchInput")
		.value.trim()
		.toLowerCase();
	fetchAndDisplayLyrics(searchQuery);
}

async function fetchAndDisplayLyrics(searchQuery) {
	try {
		const lyricsFilePath = `lyrics_storage/${searchQuery}.txt`;
		const response = await fetch(lyricsFilePath);
		if (!response.ok) {
			throw new Error("Lyrics not found");
		}
		const lyrics = await response.text();
		document.getElementById("lyricsDisplay").innerText = lyrics;
	} catch (error) {
		console.error("Error:", error);
		document.getElementById("lyricsDisplay").innerText = "Lyrics not found";
	}
}
