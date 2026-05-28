
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.rule-section');
const searchBox = document.getElementById('searchBox');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.getElementById(tab.dataset.target);
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    target.classList.remove('collapsed');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function toggleSection(id) {
  document.getElementById(id).classList.toggle('collapsed');
}

function expandAll() {
  sections.forEach(s => s.classList.remove('collapsed'));
}

function collapseAll() {
  sections.forEach(s => s.classList.add('collapsed'));
}

searchBox.addEventListener('input', () => {
  const term = searchBox.value.toLowerCase().trim();
  sections.forEach(section => {
    const text = section.innerText.toLowerCase();
    const match = text.includes(term);
    section.style.display = match || !term ? 'block' : 'none';
    if (term && match) section.classList.remove('collapsed');
  });
});
