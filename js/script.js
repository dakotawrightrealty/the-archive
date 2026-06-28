const archiveEntries = [
  {
    title: "Current State",
    type: "Operational Dashboard",
    description: "Where the project stands now, what we are protecting, and what comes next.",
    url: "current-state.html"
  },
  {
    title: "Constitution",
    type: "Core Document",
    description: "The laws and boundaries that protect the identity of the universe.",
    url: "constitution.html"
  },
  {
    title: "Encyclopedia",
    type: "Database",
    description: "Species, planets, civilizations, technology, physics, and factual records.",
    url: "encyclopedia.html"
  },
  {
    title: "Book of Discoveries",
    type: "Discovery Record",
    description: "The ideas the universe teaches through experience: choice, community, curiosity, possibility, exploration, and awe.",
    url: "discoveries.html"
  },
  {
    title: "Writer's Journal",
    type: "Development Record",
    description: "Creative decisions, rejected ideas, open questions, and worldbuilding history.",
    url: "journal.html"
  },
  {
    title: "Discovery 001 · Choice",
    type: "Discovery",
    description: "The first meaningful choice: the moment a conscious being realizes action can shape what comes next.",
    url: "discoveries.html"
  },
  {
    title: "Discovery 002 · Community",
    type: "Discovery",
    description: "The recognition that existence is shared, and that others shape the self.",
    url: "discoveries.html"
  },
  {
    title: "Discovery 003 · Curiosity",
    type: "Discovery",
    description: "The pull toward what is unknown.",
    url: "discoveries.html"
  },
  {
    title: "Discovery 004 · Possibility",
    type: "Discovery",
    description: "The first recognition that reality contains more than the familiar.",
    url: "discoveries.html"
  },
  {
    title: "Session 000 · Foundation",
    type: "Writer's Journal",
    description: "The founding session that established the Constitution, Archive structure, and opening creative direction.",
    url: "journal.html"
  }
];

const input = document.getElementById("archiveSearch");
const results = document.getElementById("searchResults");

function searchArchive() {
  if (!input || !results) return;

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

if (input) {
  input.addEventListener("input", searchArchive);
}
