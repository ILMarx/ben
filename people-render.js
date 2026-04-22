function buildPersonCard(person, role) {
  const label = person.roleLabels && person.roleLabels[role]
    ? person.roleLabels[role]
    : "";

  return `
    <a class="card card-link" href="person.html?id=${person.id}">
      <img src="${person.picture}" alt="" class="card-image">
      <h3>${person.name}</h3>
      <p class="meta">${person.academicTitle}</p>
      ${label ? `<p>${label}</p>` : ""}
      <p>${person.bio}</p>
    </a>
  `;
}

function renderPeopleGrid(containerId, role) {
  const container = document.getElementById(containerId);
  if (!container || typeof PEOPLE === "undefined") return;

  const filtered = PEOPLE.filter(person => Array.isArray(person.roles) && person.roles.includes(role));
  container.innerHTML = filtered.map(person => buildPersonCard(person, role)).join("");
}

function initPeopleRendering() {
  renderPeopleGrid("governance-cards", "board");
  renderPeopleGrid("training-fellowship-cards", "training-fellow");
  renderPeopleGrid("scholarly-fellowship-cards", "scholarly-fellow");
}
