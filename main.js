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

/* ---------- Image slots: loads images/<name>.png / .jpg / .jpeg / .webp if the file exists ---------- */
document.querySelectorAll('[data-img]').forEach(el => {
  const base = el.dataset.img, exts = ['png','jpg','jpeg','webp'];
  const tryExt = i => {
    if (i >= exts.length) return;
    const test = new Image();
    test.onload = () => {
      if (el.tagName === 'IMG') { el.src = test.src; return; }
      el.querySelectorAll('img,svg').forEach(n => n.remove());
      test.alt = ''; test.className = 'slot-img';
      el.prepend(test); el.classList.add('has-img');
    };
    test.onerror = () => tryExt(i + 1);
    test.src = `${base}.${exts[i]}`;
  };
  tryExt(0);
});
