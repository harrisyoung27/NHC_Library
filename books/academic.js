function goBack() {
    window.history.back();
  }
  
const customWords = [
    "book 1",
    "book 2",
    "book 3",
    "book 4",
    "book 5",
    "book 6",
];

// Function to perform the search
function searchWords() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    
    const matchingWords = customWords.filter(word => word.toLowerCase().includes(searchInput));

    if (matchingWords.length === 0) {
        resultsContainer.innerHTML = "No matching words found.";
    } else {
        matchingWords.forEach(word => {
            const resultElement = document.createElement("p");
            resultElement.textContent = word;
            resultsContainer.appendChild(resultElement);
        });
    }
}

document.getElementById("searchButton").addEventListener("click", searchWords);

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchWords();
    }
});