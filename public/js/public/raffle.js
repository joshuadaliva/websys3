const socket = io();
let current = null;
function render(state){
  current=state;
  const statusText = state.hasStarted ? state.status : 'waiting';
  document.getElementById('status').textContent = statusText;
  document.getElementById('status').className = statusText;
  document.getElementById('schedTxt').textContent = state.scheduleISO ? `Schedule: ${new Date(state.scheduleISO).toLocaleString()}` : 'Schedule: Not set';
  const canShowResult = statusText === 'completed' && state.winner;
  document.getElementById('winner').textContent = canShowResult ? `🏆 Winner: ${state.winner.name}` : '';
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
