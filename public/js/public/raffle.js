const socket = io();
let current = null;

function maskDisplayName(name = '') {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  if (parts.length === 1) return parts[0];
  const first = parts[0];
  const rest = parts.slice(1).map((part) => {
    const cleaned = part.replace(/[^A-Za-z]/g, '');
    if (!cleaned) return '';
    return part.length === 2 && part.endsWith('.') ? `${cleaned[0].toUpperCase()}.` : cleaned[0].toUpperCase();
  }).filter(Boolean);
  return `${first} ${rest.join(' ')}`.trim();
}

function render(state){
  current=state;
  const statusKey = (state.status || 'waiting').toLowerCase();
  const statusLabelMap = { waiting: 'WAITING', scheduled: 'WAITING', live: 'LIVE DRAWING', completed: 'COMPLETED' };
  const statusText = statusLabelMap[statusKey] || statusKey.toUpperCase();
  document.getElementById('status').textContent = statusText;
  document.getElementById('status').className = statusKey;
  const drawViz = document.getElementById('liveDrawViz');
  if (drawViz) {
    const drawCopy = drawViz.querySelector('.draw-copy');
    const drawRing = drawViz.querySelector('.draw-ring');
    const drawCenter = drawViz.querySelector('.draw-center');
    const showDrawBox = statusKey === 'live' || statusKey === 'waiting' || statusKey === 'scheduled';
    drawViz.style.display = showDrawBox ? 'flex' : 'none';
    drawViz.classList.remove('is-waiting', 'is-live');
    if (statusKey === 'live') {
      drawViz.classList.add('is-live');
      if (drawCopy) drawCopy.textContent = 'Drawing winner...';
      if (drawRing) drawRing.style.display = '';
      if (drawCenter) drawCenter.style.display = '';
    } else {
      drawViz.classList.add('is-waiting');
      if (drawCopy) drawCopy.textContent = 'Waiting for draw';
      if (drawRing) drawRing.style.display = 'none';
      if (drawCenter) drawCenter.style.display = 'none';
    }
  }
  document.getElementById('schedTxt').textContent = state.scheduleISO ? `Schedule: ${new Date(state.scheduleISO).toLocaleString()}` : 'Schedule: Not set';
  const applicants = state.qualifiedApplicants || [];
  const listEl = document.getElementById('list');
  if (listEl && applicants.length) {
    listEl.innerHTML = applicants
      .map((a) => `<div class='row'><span>#${a.raffleNumber}</span><strong>${maskDisplayName(a.name || a.masked || '')}</strong></div>`)
      .join('');
  }
  const totalEl = document.getElementById('total');
  if (totalEl && applicants.length) totalEl.textContent = applicants.length;
  const canShowResult = statusKey === 'completed' && state.winner;
  document.getElementById('winner').textContent = canShowResult ? `🏆 Winner: ${maskDisplayName(state.winner.name)}` : '';
  document.getElementById('drawAt').textContent = canShowResult && state.drawTimestamp ? `Draw Time: ${new Date(state.drawTimestamp).toLocaleString()}` : '';
  document.getElementById('logs').innerHTML = (state.logs||[]).map(l=>`<li>${l}</li>`).join('');
}
function tick(){
 if(!current||!current.scheduleISO)return; const diff=new Date(current.scheduleISO)-new Date();
 const el=document.getElementById('countdown');
 el.textContent = diff>0?`Countdown: ${Math.floor(diff/1000)}s`:'Event started/ended';
}
socket.on('raffle:update', render);
fetch('/api/raffle/state').then(r=>r.json()).then(d=>render(d.raffleState));
setInterval(tick,1000);
