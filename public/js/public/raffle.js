const socket = io();
let current = null;
function render(state){
  current=state;
  document.getElementById('status').textContent = state.status;
  document.getElementById('status').className = state.status;
  document.getElementById('schedTxt').textContent = state.scheduleISO ? `Schedule: ${new Date(state.scheduleISO).toLocaleString()}` : 'Schedule: Not set';
  document.getElementById('winner').textContent = state.winner ? `🏆 Winner: ${state.winner.name}` : '';
  document.getElementById('drawAt').textContent = state.drawTimestamp ? `Draw Time: ${new Date(state.drawTimestamp).toLocaleString()}` : '';
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
