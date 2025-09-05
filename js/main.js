// helpers
const $ = (sel, el=document) => el.querySelector(sel)
const $$ = (sel, el=document) => [...el.querySelectorAll(sel)]

// tilt effect
$$('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left)/r.width - .5
    const y = (e.clientY - r.top)/r.height - .5
    card.style.transform = `rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg) translateY(-4px)`
  })
  card.addEventListener('mouseleave', () => { card.style.transform = '' })
})

// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in') })
}, {threshold:.15})
$$('.reveal').forEach(el=>io.observe(el))

// year
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear()
