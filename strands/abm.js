function goBack() {
    window.history.back();
  }
  
// Sample JSON data for PPT files (replace with your own data)
const pptFiles = [
    { name: "Research", url: "./ABM/research.pptx" },
    { name: "Project Report", url: "project_report.pptx" },
    { name: "Sales Pitch", url: "sales_pitch.pptx" },
    // Add more PPT files as needed
];

// Function to perform the search and display results
function searchPPTFiles() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter PPT files based on the search query
    const filteredFiles = pptFiles.filter((file) =>
        file.name.toLowerCase().includes(query)
    );

    // Display the filtered files
    filteredFiles.forEach((file) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = file.name;
        link.href = file.url;
        link.target = "_blank"; // Open links in a new tab

        listItem.appendChild(link);
        resultsContainer.appendChild(listItem);
    });
}

// Add an event listener for the search input
document.getElementById("searchInput").addEventListener("input", searchPPTFiles);

// Initial search on page load (optional)
searchPPTFiles();
