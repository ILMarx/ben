function buildPersonCard(person, role) {
  const label = person.roleLabels && person.roleLabels[role]
    ? person.roleLabels[role]
    : "";

  const objectPosition = person.picturePosition
    ? ` style="object-position: ${person.picturePosition};"`
    : "";

  return `
    <a class="card card-link" href="person.html?id=${person.id}">
      <img src="${person.picture}" alt="" class="card-image person-card-image"${objectPosition}>
      <h3>${person.name}</h3>
      <p class="meta">${person.academicTitle}</p>
      ${label ? `<p>${label}</p>` : ""}
      <p>${person.bio}</p>
    </a>
  `;
}

function renderPeopleGrid(containerId, role) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (typeof PEOPLE === "undefined" || !Array.isArray(PEOPLE)) {
    container.innerHTML = '<p class="note">People data could not be loaded.</p>';
    console.error("PEOPLE is undefined or not an array.");
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

  container.innerHTML = filtered.map(person => buildPersonCard(person, role)).join("");
}

function initPeopleRendering() {
  renderPeopleGrid("governance-cards", "board");
  renderPeopleGrid("training-fellowship-cards", "training-fellow");
  renderPeopleGrid("scholarly-fellowship-cards", "scholarly-fellow");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPeopleRendering);
} else {
  initPeopleRendering();
}
