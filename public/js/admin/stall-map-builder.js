const GRID_COLS = 20;
const GRID_ROWS = 12;
let activeFloor = 'first';
const floorMaps = { first: {}, second: {} };
let dragType = 'stall';
let draggingBoxId = null;

function idForCell(index) {
  return `cell-${index}-${Date.now()}`;
}

function initGrid() {
  const grid = document.getElementById('grid-canvas');
  grid.innerHTML = '';
  for (let i = 0; i < GRID_COLS * GRID_ROWS; i += 1) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.index = i;
    tile.ondragover = (e) => e.preventDefault();
    tile.ondrop = (e) => {
      e.preventDefault();
      if (draggingBoxId) moveExistingBox(i, draggingBoxId);
      else placeBox(i, dragType);
    };
    grid.appendChild(tile);
  }
  renderFloor();
}

function placeBox(index, type) {
  const col = (index % GRID_COLS) + 1;
  const row = Math.floor(index / GRID_COLS) + 1;
  const id = idForCell(index);
  floorMaps[activeFloor][id] = { id, type, label: `${type.toUpperCase()}-${index + 1}`, col, row, w: 1, h: 1 };
  renderFloor();
}

function moveExistingBox(index, boxId) {
  const box = floorMaps[activeFloor][boxId];
  if (!box) return;
  box.col = (index % GRID_COLS) + 1;
  box.row = Math.floor(index / GRID_COLS) + 1;
  renderFloor();
}

function clampBoxSize(box) {
  box.w = Math.max(1, Math.min(box.w, GRID_COLS - box.col + 1));
  box.h = Math.max(1, Math.min(box.h, GRID_ROWS - box.row + 1));
}

function startResize(e, boxId) {
  e.preventDefault();
  e.stopPropagation();
  const grid = document.getElementById('grid-canvas');
  const box = floorMaps[activeFloor][boxId];
  if (!box) return;
  const startX = e.clientX;
  const startY = e.clientY;
  const startW = box.w;
  const startH = box.h;
  const tile = grid.querySelector('.tile');
  const tileRect = tile.getBoundingClientRect();
  const stepX = tileRect.width + 4;
  const stepY = tileRect.height + 4;

  function onMove(ev) {
    const dx = ev.clientX - startX;
    const dy = ev.clientY - startY;
    box.w = startW + Math.round(dx / stepX);
    box.h = startH + Math.round(dy / stepY);
    clampBoxSize(box);
    renderFloor();
  }

  function onUp() {
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onUp);
  }

  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
}

function renderFloor() {
  document.querySelectorAll('.placed-box').forEach((el) => el.remove());
  const grid = document.getElementById('grid-canvas');
  const map = floorMaps[activeFloor];

  Object.values(map).forEach((cell) => {
    clampBoxSize(cell);
    const box = document.createElement('div');
    box.className = `box ${cell.type} placed-box`;
    box.draggable = true;
    box.style.gridColumn = `${cell.col} / span ${cell.w}`;
    box.style.gridRow = `${cell.row} / span ${cell.h}`;
    box.dataset.boxId = cell.id;

    const label = document.createElement('div');
    label.className = 'box-label';
    label.contentEditable = 'true';
    label.textContent = cell.label;
    label.oninput = () => { cell.label = label.textContent.trim(); };

    const del = document.createElement('button');
    del.className = 'box-del';
    del.type = 'button';
    del.textContent = '✕';
    del.onclick = (e) => { e.stopPropagation(); delete map[cell.id]; renderFloor(); };

    const res = document.createElement('div');
    res.className = 'box-resize';
    res.onmousedown = (e) => startResize(e, cell.id);

    box.ondragstart = () => { draggingBoxId = cell.id; };
    box.ondragend = () => { draggingBoxId = null; };

    box.appendChild(label);
    box.appendChild(del);
    box.appendChild(res);
    grid.appendChild(box);
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
  item.addEventListener('dragstart', () => { dragType = item.dataset.type || 'stall'; draggingBoxId = null; });
});

initGrid();
