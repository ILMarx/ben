function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildOrcidLink(orcid) {
  if (!orcid) return "";

  return `
    <p class="meta">
      <a href="${escapeHtml(orcid)}" target="_blank" rel="noopener">ORCID</a>
    </p>
  `;
}

function buildPersonCard(person, role) {
  const label = person.roleLabels && person.roleLabels[role]
    ? person.roleLabels[role]
    : "";

  const picture = person.picture
    ? person.picture
    : "assets/images/people/placeholder.png";

  const objectPosition = person.picturePosition
    ? ` style="object-position: ${escapeHtml(person.picturePosition)};"`
    : "";

  const academicTitle = person.academicTitle
    ? `<p class="meta">${escapeHtml(person.academicTitle)}</p>`
    : "";

  const affiliation = person.affiliation
    ? `<p class="meta">${escapeHtml(person.affiliation)}</p>`
    : "";

  const roleLabel = label
    ? `<p>${escapeHtml(label)}</p>`
    : "";

  const bio = person.bio
    ? `<p>${escapeHtml(person.bio)}</p>`
    : "";

  return `
    <a class="card card-link" href="person.html?id=${encodeURIComponent(person.id)}">
      <img src="${escapeHtml(picture)}" alt="" class="card-image person-card-image"${objectPosition}>
      <h3>${escapeHtml(person.name)}</h3>
      ${academicTitle}
      ${affiliation}
      ${roleLabel}
      ${buildOrcidLink(person.orcid)}
      ${bio}
    </a>
  `;
}

function renderPeopleGrid(containerId, role) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  if (typeof PEOPLE === "undefined" || !Array.isArray(PEOPLE)) {
    container.innerHTML = '<p class="note">People data could not be loaded.</p>';
    console.error("PEOPLE is undefined or not an array. Check that people.js is loaded before people-render.js.");
    return;
  }

  const filtered = PEOPLE.filter(person =>
    Array.isArray(person.roles) && person.roles.includes(role)
  );

  if (filtered.length === 0) {
    container.innerHTML = '<p class="note">No profiles are currently available.</p>';
    console.warn(`No people found for role: ${role}`);
    return;
  }

  container.innerHTML = filtered
    .map(person => buildPersonCard(person, role))
    .join("");
}

function initPeopleRendering() {
  renderPeopleGrid("governance-cards", "board");
  renderPeopleGrid("scientific-committee-cards", "scientific-committee");
  renderPeopleGrid("training-fellowship-cards", "training-fellow");
  renderPeopleGrid("scholarly-fellowship-cards", "scholarly-fellow");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPeopleRendering);
} else {
  initPeopleRendering();
}
