
// helpers
const $ = (sel, el=document) => el.querySelector(sel)
const $$ = (sel, el=document) => [...el.querySelectorAll(sel)]

// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in') })
}, {threshold:.15})
$$('.reveal').forEach(el=>io.observe(el))

// year
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear()

// timeline progress (based on data-progress attribute percentage)
const tp = $('.timeline-progress')
if(tp){
  const pct = parseInt(tp.dataset.progress || '85', 10)
  requestAnimationFrame(()=>{ tp.style.width = pct + '%'})
}
