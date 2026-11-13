/* ---------- Build games, groups and Discord servers from content.js ---------- */
(() => {
  if (typeof SITE === 'undefined') return;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const ext = l => l ? ` href="${esc(l)}" target="_blank" rel="noopener"` : '';
  const ICON_DC = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>';
  const ICON_GR = '<svg viewBox="0 0 24 24" fill="currentColor" style="width:60px;height:60px;color:#ff6b78;margin-bottom:14px"><path d="M5.2 2 22 6.6 17.8 22 1 17.4 5.2 2Zm5 7.2-.9 3.6 3.6.9.9-3.6-3.6-.9Z"/></svg>';

  const games = document.getElementById('gamesGrid');
  if (games) games.innerHTML = (SITE.games || []).map((g, i) => `
    <div class="game">
      <div class="thumb t${(i % 6) + 1}">
        ${g.image ? `<img class="slot-img" src="${esc(g.image)}" alt="" onerror="this.remove()">` : ''}
        <span>${esc(g.name)}</span>
      </div>
      <div class="status">${g.status ? `<i class="dot${g.live ? '' : ' dev'}"></i><b>${esc(g.status)}</b>` : ''}</div>
      ${g.link ? `<a class="play"${ext(g.link)}>${esc(g.button || 'Play Now')}</a>` : `<span class="play ghost">Coming Soon</span>`}
    </div>`).join('');

  const groups = document.getElementById('groupsGrid');
  if (groups) groups.innerHTML = (SITE.groups || []).map(g => `
    <div class="group-card reveal">
      ${g.image ? `<img src="${esc(g.image)}" alt="${esc(g.name)} logo" onerror="this.outerHTML='${ICON_GR.replace(/"/g, '&quot;')}'">` : ICON_GR}
      <h2>${esc(g.name)}</h2>
      <div class="role">${esc(g.role)}</div>
      <p>${esc(g.description)}</p>
      ${g.link ? `<a class="btn btn-blue"${ext(g.link)}>View on Roblox</a>` : ''}
    </div>`).join('');

  const servers = document.getElementById('serverList');
  if (servers) servers.innerHTML = (SITE.discord || []).map(d => `
    <div class="server">
      <div class="server-icon">${d.image ? `<img src="${esc(d.image)}" alt="" onerror="this.outerHTML='${ICON_DC.replace(/"/g, '&quot;')}'">` : ICON_DC}</div>
      <div class="server-info">
        <h3>${esc(d.name)}</h3>
        <p><i class="dot"></i><span>${esc(d.subtitle)}</span></p>
      </div>
      <a class="join${d.invite ? '' : ' disabled'}"${ext(d.invite)}>Join</a>
    </div>`).join('');

  const sd = document.getElementById('statDiscord'); if (sd) sd.dataset.count = (SITE.discord || []).length;
  const sg = document.getElementById('statGroups');  if (sg) sg.dataset.count = (SITE.groups || []).length;
})();

/* ---------- Mobile/tablet: tap to open Roblox dropdown ---------- */
const rTab = document.getElementById('robloxTab');
if (rTab) rTab.querySelector('button').addEventListener('click', e => { e.stopPropagation(); rTab.classList.toggle('open'); });
document.addEventListener('click', () => rTab && rTab.classList.remove('open'));
const yEl=document.getElementById('year'); if (yEl) yEl.textContent = new Date().getFullYear();

/* ---------- Animated network lines (gold nodes like the mockup) ---------- */
(() => {
  const c = document.getElementById('network'), ctx = c.getContext('2d');
  let w, h, nodes = [];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function resize(){
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    const n = Math.round(Math.min(60, w * h / 26000));
    nodes = Array.from({length:n}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-.5)*.18, vy: (Math.random()-.5)*.18,
      r: Math.random()*2.2 + 1.2
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    for (const a of nodes){
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
    }
    for (let i=0;i<nodes.length;i++) for (let j=i+1;j<nodes.length;j++){
      const a=nodes[i], b=nodes[j], d=Math.hypot(a.x-b.x,a.y-b.y);
      if (d < 190){ ctx.strokeStyle = `rgba(242,184,75,${.22*(1-d/190)})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
    }
    for (const a of nodes){
      ctx.fillStyle='rgba(242,184,75,.75)'; ctx.shadowColor='#f2b84b'; ctx.shadowBlur=10;
      ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  addEventListener('resize', resize); resize(); draw();
})();

/* ---------- Scroll reveal + stats animation ---------- */
function countUp(el){
  const to = +el.dataset.count, t0 = performance.now();
  const step = t => { const p = Math.min((t-t0)/1200,1); el.textContent = Math.round(to*(1-Math.pow(1-p,3))).toLocaleString('en-US'); if (p<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
function gauges(){
  document.querySelectorAll('.g-arc').forEach(a => { a.style.transition='stroke-dashoffset 1.4s ease'; a.style.strokeDashoffset = 100 - a.dataset.to; });
  document.querySelectorAll('.g-needle').forEach(n => {
    n.style.transformOrigin='60px 62px'; n.style.transition='transform 1.4s ease';
    n.style.transform='rotate(-90deg)'; requestAnimationFrame(()=>requestAnimationFrame(()=>{ n.style.transform=`rotate(${-90 + 180*n.dataset.to/100}deg)`; }));
  });
}
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  if (e.target.classList.contains('stats')){ e.target.querySelectorAll('[data-count]').forEach(countUp); gauges(); }
  io.unobserve(e.target);
}), {threshold:.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Optional: live Discord online counts (needs Server Widget enabled) ---------- */
document.querySelectorAll('[data-guild]').forEach(async p => {
  const id = p.dataset.guild.trim(); if (!id) return;
  try{
    const r = await fetch(`https://discord.com/api/guilds/${id}/widget.json`);
    if (!r.ok) return;
    const d = await r.json();
    p.querySelector('span').textContent = `${d.presence_count.toLocaleString('en-US')} Online`;
  }catch(e){}
});

