// Starfield background with occasional shooting stars
const canvas = document.getElementById('stars')
const ctx = canvas.getContext('2d', { alpha: true })
let w, h, stars = [], shooting = []
const STAR_COUNT = 300
const DPR = Math.min(2, window.devicePixelRatio || 1)
function resize(){
  w = canvas.width = innerWidth * DPR
  h = canvas.height = innerHeight * DPR
  canvas.style.width = innerWidth + 'px'
  canvas.style.height = innerHeight + 'px'
}
addEventListener('resize', resize); resize()
function rand(a,b){return Math.random()*(b-a)+a}
function spawnStars(){
  stars = new Array(STAR_COUNT).fill(0).map(()=>({ x: rand(0,w), y: rand(0,h), z: rand(.2,1.2), tw: rand(.1,.9) }))
}
spawnStars()
function draw(){
  ctx.clearRect(0,0,w,h)
  for(const s of stars){
    const size = s.z * 1.2
    const alpha = 0.6 + Math.sin(performance.now()/800 + s.tw)*0.35
    ctx.fillStyle = `rgba(200,220,255,${alpha})`
    ctx.fillRect(s.x, s.y, size, size)
    s.x += s.z * 0.08; if(s.x > w) s.x = 0
  }
  for(let i=shooting.length-1; i>=0; i--){
    const sh = shooting[i]
    sh.x += sh.vx; sh.y += sh.vy; sh.life--
    const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx*6, sh.y - sh.vy*6)
    grad.addColorStop(0, 'rgba(255,255,255,0.9)')
    grad.addColorStop(1, 'rgba(124,248,255,0.0)')
    ctx.strokeStyle = grad; ctx.lineWidth = 2*DPR; ctx.beginPath()
    ctx.moveTo(sh.x, sh.y); ctx.lineTo(sh.x - sh.vx*6, sh.y - sh.vy*6); ctx.stroke()
    if(sh.life<=0 || sh.x<0 || sh.y>h) shooting.splice(i,1)
  }
  requestAnimationFrame(draw)
}
draw()
setInterval(()=>{
  if(Math.random() < 0.5){
    shooting.push({x: rand(w*0.3,w), y: rand(0,h*0.4), vx: -rand(6,10)*DPR, vy: rand(2,4)*DPR, life: 24})
  }
}, 2500)
