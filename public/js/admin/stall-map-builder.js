const GRID_COLS = 20;
const GRID_ROWS = 12;
let activeFloor = 'first';
const floorMaps = { first: {}, second: {} };
let dragType = 'stall';

function initGrid() {
  const grid = document.getElementById('grid-canvas');
  grid.innerHTML = '';
  for (let i = 0; i < GRID_COLS * GRID_ROWS; i += 1) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.index = i;
    tile.ondragover = (e) => e.preventDefault();
    tile.ondrop = (e) => { e.preventDefault(); placeBox(i, dragType); };
    tile.onclick = () => placeBox(i, 'stall');
    grid.appendChild(tile);
  }
  renderFloor();
}

function placeBox(index, type) {
  floorMaps[activeFloor][index] = { type, label: `${type.toUpperCase()}-${index + 1}` };
  renderFloor();
}

function renderFloor() {
  document.querySelectorAll('.tile').forEach((tile) => {
    const idx = tile.dataset.index;
    const cell = floorMaps[activeFloor][idx];
    tile.innerHTML = '';
    if (cell) {
      const box = document.createElement('div');
      box.className = `box ${cell.type}`;
      box.contentEditable = 'true';
      box.textContent = cell.label;
      box.oninput = () => { floorMaps[activeFloor][idx].label = box.textContent.trim(); };
      box.ondblclick = (e) => { e.stopPropagation(); delete floorMaps[activeFloor][idx]; renderFloor(); };
      tile.appendChild(box);
    }
  });
}

function setBuilderFloor(floor, el) {
  activeFloor = floor;
  document.querySelectorAll('.floor-btn').forEach((b) => b.classList.remove('active'));
  el.classList.add('active');
  renderFloor();
}

function clearFloor() { floorMaps[activeFloor] = {}; renderFloor(); }

function downloadMapJson() {
  const payload = { createdAt: new Date().toISOString(), floors: floorMaps, cols: GRID_COLS, rows: GRID_ROWS };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `stall-map-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

document.querySelectorAll('.palette-item').forEach((item) => {
  item.addEventListener('dragstart', () => { dragType = item.dataset.type || 'stall'; });
});

initGrid();
