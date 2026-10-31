// ============================================================
// 1. DATA — This is a simplified example. You'll need to expand this
//    by converting your GENS, REGIONAL_FORMS, and VARIANT_FORMS
//    from Python into a structured JavaScript array.
// ============================================================
const POKEMON_DATA = [
    // { dex: 1, name: "Bulbasaur", slug: "1", page: 1, slot: 1 },
    // ... you will generate this full list.
    // For now, here's a small sample to test with:
    { dex: 1, name: "Bulbasaur", slug: "1", page: 1, slot: 1 },
    { dex: 2, name: "Ivysaur", slug: "2", page: 1, slot: 2 },
    { dex: 3, name: "Venusaur", slug: "3", page: 1, slot: 3 },
    { dex: 25, name: "Pikachu", slug: "25", page: 1, slot: 4 },
    { dex: 52, name: "Meowth - Alolan", slug: "10107", page: 1, slot: 5 },
    { dex: 201, name: "Unown - A", slug: "201", page: 1, slot: 6 },
    // ... add more for testing
];

const SPRITE_CDN = "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/{}.png";

// ============================================================
// 2. DOM ELEMENTS
// ============================================================
const tbody = document.getElementById('pokedex-body');
const progressDisplay = document.getElementById('progress-display');
const countDisplay = document.getElementById('count-display');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFile = document.getElementById('import-file');

// ============================================================
// 3. RENDER TABLE
// ============================================================
function renderTable() {
    tbody.innerHTML = ''; // Clear existing rows
    POKEMON_DATA.forEach((pkmn, index) => {
        const tr = document.createElement('tr');
        // Use dex + slug as a unique key for forms/variants
        const uniqueKey = `pkmn_${pkmn.dex}_${pkmn.slug}`;

        tr.innerHTML = `
            <td><input type="checkbox" class="have-checkbox" data-key="${uniqueKey}"></td>
            <td>${index + 1}</td>
            <td>${pkmn.page}</td>
            <td>${pkmn.slot}</td>
            <td><img src="${SPRITE_CDN.replace('{}', pkmn.slug)}" alt="${pkmn.name}" loading="lazy"></td>
            <td>${pkmn.name}</td>
            <td>${pkmn.dex}</td>
        `;
        tbody.appendChild(tr);
    });
    loadProgress(); // After rendering, load saved state
}

// ============================================================
// 4. LOCALSTORAGE: LOAD & SAVE
// ============================================================
function loadProgress() {
    document.querySelectorAll('.have-checkbox').forEach(cb => {
        const key = cb.dataset.key;
        const saved = localStorage.getItem(key);
        cb.checked = saved === 'true';
    });
    updateProgress();
}

document.addEventListener('change', (e) => {
    if (e.target.classList.contains('have-checkbox')) {
        const key = e.target.dataset.key;
        localStorage.setItem(key, e.target.checked);
        updateProgress();
    }
});

function updateProgress() {
    const total = document.querySelectorAll('.have-checkbox').length;
    const checked = document.querySelectorAll('.have-checkbox:checked').length;
    const percent = total > 0 ? ((checked / total) * 100).toFixed(1) : 0;
    progressDisplay.textContent = `Collected: ${percent}%`;
    countDisplay.textContent = `(${checked} / ${total})`;
}

// ============================================================
// 5. EXPORT / IMPORT
// ============================================================
exportBtn.addEventListener('click', () => {
    const data = {};
    document.querySelectorAll('.have-checkbox').forEach(cb => {
        data[cb.dataset.key] = cb.checked;
    });
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pokedex_progress.json';
    a.click();
    URL.revokeObjectURL(url);
});

importBtn.addEventListener('click', () => importFile.click());

importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            for (const key in data) {
                const checkbox = document.querySelector(`.have-checkbox[data-key="${key}"]`);
                if (checkbox) {
                    checkbox.checked = data[key];
                    localStorage.setItem(key, data[key]);
                }
            }
            updateProgress();
            alert('Progress imported successfully!');
        } catch (err) {
            alert('Error importing file. Please make sure it is a valid JSON export.');
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset file input
});

// ============================================================
// 6. INITIALIZE
// ============================================================
renderTable();
