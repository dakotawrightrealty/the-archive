const archiveEntries = [
  {
    title: "Constitution",
    type: "Core Document",
    description: "The laws and boundaries that protect the identity of the universe.",
    url: "constitution.html"
  },
  {
    title: "Encyclopedia",
    type: "Database",
    description: "Species, planets, civilizations, technology, and events.",
    url: "encyclopedia.html"
  },
  {
    title: "Discoveries",
    type: "Research Log",
    description: "New concepts, unresolved ideas, and expanding canon.",
    url: "discoveries.html"
  },
  {
    title: "Writer’s Journal",
    type: "Development Record",
    description: "Creative notes, decisions, and worldbuilding history.",
    url: "journal.html"
  }
];

const input = document.getElementById("archiveSearch");
const results = document.getElementById("searchResults");

function searchArchive() {
  const query = input.value.toLowerCase().trim();

  if (!query) {
    results.innerHTML = "";
    return;
  }

  const matches = archiveEntries.filter(entry =>
    entry.title.toLowerCase().includes(query) ||
    entry.type.toLowerCase().includes(query) ||
    entry.description.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    results.innerHTML = "<p>No archive records found.</p>";
    return;
  }

  results.innerHTML = matches.map(entry => `
    <a class="result-item" href="${entry.url}">
      <strong>${entry.title}</strong>
      <span>${entry.type}</span>
      <p>${entry.description}</p>
    </a>
  `).join("");
}

input.addEventListener("input", searchArchive);