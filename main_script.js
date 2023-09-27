const SuB = document.getElementById("SuB");
        const selection1 = document.getElementById("selectiona");
        SuB.addEventListener("click", function () {
            if (selectiona.style.display === "none") {
                selectiona.style.display = "block";
		selectionb.style.display = "none";
		searchbox.style.display = "none"
            } else {
                selectiona.style.display = "none";
            }
        });

// This toggles the ubjectbooks ^^

const Academic = document.getElementById("Acads");
        const selectionb = document.getElementById("selectionb");
        Acads.addEventListener("click", function () {
            if (selectionb.style.display === "none") {
                selectionb.style.display = "block";
		selectiona.style.display = "none";
		searchbox.style.display = "none"
            } else {
                selectionb.style.display = "none";
            }
        });

// This toggles the Academic books



const research = document.getElementById("RePa");
        const seacrhbox = document.getElementById("searchbox");
        RePa.addEventListener("click", function () {
            if (searchbox.style.display === "none") {
                searchbox.style.display = "block";
		selectiona.style.display = "none";
		selectionb.style.display = "none"
            } else {
                searchbox.style.display = "none";
            }
        });

// THIS TOGGLES THE SEARCH BOX ^^



const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark');
            } else {
                body.classList.remove('dark');
            }
        });

// This toggles the DARK MODE ^^

// This is a Custom search box for research papers vv

const customWords = 
      // PUT YOUR RESEARCH TITLES HERE
      [
    "apple",
    "banana",
    "berry",
    "ICT - Technology - 1990 - Harry",
    "Ibong adarna - isle#4 top-cabinet",
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

// PUT YOUR RESEARCH TITLES HERE

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

// This is a Custom search box for research papers ^^
