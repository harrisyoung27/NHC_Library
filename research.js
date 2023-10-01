const gradea = document.getElementById("gradea");
const stranda = document.getElementById("stranda");
        gradea.addEventListener("click", function () {
            if (stranda.style.display === "none") {
                stranda.style.display = "block";
                strandb.style.display = "none";
            } else {
                stranda.style.display = "none";
            }
        });

        const gradeb = document.getElementById("gradeb");
const strandb = document.getElementById("strandb");
        gradeb.addEventListener("click", function () {
            if (strandb.style.display === "none") {
                strandb.style.display = "block";
                stranda.style.display = "none";
            } else {
                strandb.style.display = "none";
            }
        });


        const customWords = [
    "apple",
    "banana",
    "berry",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon"
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

// Event listener for the search button
document.getElementById("searchButton").addEventListener("click", searchWords);
