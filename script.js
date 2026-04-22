function loadFragment(id, file) {
  const target = document.getElementById(id);
  if (!target) return Promise.resolve(false);

  return fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Could not load ${file}`);
      }
      return response.text();
    })
    .then(html => {
      target.innerHTML = html;
      return true;
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}

function updateLastModified() {
  const target = document.getElementById('last-updated');
  if (!target) return;

  fetch('https://api.github.com/repos/ILMarx/ben/commits?per_page=1')
    .then(response => {
      if (!response.ok) {
        throw new Error('GitHub API error');
      }
      return response.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const commitDate = data[0].commit.committer.date;
        const formattedDate = new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }).format(new Date(commitDate));
        target.textContent = formattedDate;
      } else {
        target.textContent = 'Unavailable';
      }
    })
    .catch(() => {
      target.textContent = 'Unavailable';
    });
}

document.addEventListener('DOMContentLoaded', function () {
  loadFragment('header-placeholder', 'header.html');
  loadFragment('nav-placeholder', 'nav.html');
  loadFragment('footer-placeholder', 'footer.html')
    .then(function (loaded) {
      if (loaded) {
        updateLastModified();
      }
    });
});

function loadFragment(id, file) {
  const target = document.getElementById(id);
  if (!target) return Promise.resolve(false);

  return fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Could not load ${file}`);
      }
      return response.text();
    })
    .then(html => {
      target.innerHTML = html;
      return true;
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}

function updateLastModified() {
  const target = document.getElementById('last-updated');
  if (!target) return;

  fetch('https://api.github.com/repos/ILMarx/ben/commits?per_page=1')
    .then(response => {
      if (!response.ok) {
        throw new Error('GitHub API error');
      }
      return response.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const commitDate = data[0].commit.committer.date;
        const formattedDate = new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }).format(new Date(commitDate));
        target.textContent = formattedDate;
      } else {
        target.textContent = 'Unavailable';
      }
    })
    .catch(() => {
      target.textContent = 'Unavailable';
    });
}

document.addEventListener('DOMContentLoaded', function () {
  loadFragment('header-placeholder', 'header.html');
  loadFragment('nav-placeholder', 'nav.html');
  loadFragment('footer-placeholder', 'footer.html')
    .then(function (loaded) {
      if (loaded) {
        updateLastModified();
      }
    });
