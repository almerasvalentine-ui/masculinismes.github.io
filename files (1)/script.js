/* ===== MEDIA LIST: add items here, no HTML editing needed =====
   file: name in /images or /videos | type: image or video */
const MEDIA = [
 {
  "file": "V1.mp4",
  "type": "video",
  "title": "Mépris affiché, conseils vendus",
  "caption": ""
 },
 {
  "file": "R0.mp4",
  "type": "video",
  "title": "Le sentiment de perte de pouvoir",
  "caption": ""
 },
 {
  "file": "R11.mp4",
  "type": "video",
  "title": "La quête de virilité exacerbée",
  "caption": ""
 },
 {
  "file": "R3.mp4",
  "type": "video",
  "title": "Le « mâle alpha » idéalisé",
  "caption": ""
 },
 {
  "file": "R4.mp4",
  "type": "video",
  "title": "Les « types de femmes »",
  "caption": ""
 },
 {
  "file": "R5.mp4",
  "type": "video",
  "title": "Des traits « immuables et universels »",
  "caption": ""
 },
 {
  "file": "R8.mp4",
  "type": "video",
  "title": "La femme « périssable »",
  "caption": ""
 },
 {
  "file": "R6.mp4",
  "type": "video",
  "title": "Soumission et virginité",
  "caption": ""
 },
 {
  "file": "R7.mp4",
  "type": "video",
  "title": "Le « bodycount » comme mesure de valeur",
  "caption": ""
 },
 {
  "file": "R9.mp4",
  "type": "video",
  "title": "Le viol suggéré par un émoji",
  "caption": ""
 },
 {
  "file": "V2.mp4",
  "type": "video",
  "title": "« La séduction et le business, ça se ressemble »",
  "caption": ""
 },
 {
  "file": "V3.mp4",
  "type": "video",
  "title": "De la séduction à la formation payante",
  "caption": ""
 },
 {
  "file": "commentaire.jpg",
  "type": "image",
  "title": "Commentaire : « il spitte des facts »",
  "caption": ""
 },
 {
  "file": "screenlea2.jpg",
  "type": "image",
  "title": "Commentaires : le mariage, « la pire des arnaques »",
  "caption": ""
 },
 {
  "file": "V5.mp4",
  "type": "video",
  "title": "Un extrait de contenu incel",
  "caption": ""
 },
 {
  "file": "screenlea3.jpg",
  "type": "image",
  "title": "Commentaires : le mal-être d’un utilisateur",
  "caption": ""
 },
 {
  "file": "screenlea4.jpg",
  "type": "image",
  "title": "Capture de commentaires incels",
  "caption": ""
 },
 {
  "file": "commentaires-incel.jpg",
  "type": "image",
  "title": "Commentaires de la communauté incel",
  "caption": ""
 },
 {
  "file": "V11.mp4",
  "type": "video",
  "title": "Les femmes qui préfèrent les « Chad »",
  "caption": ""
 },
 {
  "file": "V6.mp4",
  "type": "video",
  "title": "La théorie de la « Black Pill »",
  "caption": ""
 },
 {
  "file": "V7.mp4",
  "type": "video",
  "title": "La théorie du 80-20",
  "caption": ""
 },
 {
  "file": "V8.mp4",
  "type": "video",
  "title": "Le « marché de la séduction » déséquilibré",
  "caption": ""
 },
 {
  "file": "R10.mp4",
  "type": "video",
  "title": "Une mise en scène de podcast",
  "caption": ""
 },
 {
  "file": "R13.mp4",
  "type": "video",
  "title": "Le tableau effaçable du faux professeur",
  "caption": ""
 },
 {
  "file": "R12.mp4",
  "type": "video",
  "title": "Gladiateurs et vikings : le passé mythifié",
  "caption": ""
 },
 {
  "file": "V9.mp4",
  "type": "video",
  "title": "La « doro school » d’AD Laurent",
  "caption": ""
 },
 {
  "file": "screen5lea.jpg",
  "type": "image",
  "title": "Capture : la culture du viol en ligne",
  "caption": ""
 },
 {
  "file": "V10.mp4",
  "type": "video",
  "title": "La « St Elliot » célébrée en ligne",
  "caption": ""
 },
 {
  "file": "manhater.PNG",
  "type": "image",
  "title": "Publication « man hater »",
  "caption": ""
 },
 {
  "file": "womanhater.jpg",
  "type": "image",
  "title": "Publication « woman hater »",
  "caption": ""
 },
 {
  "file": "comptetom.jpg",
  "type": "image",
  "title": "Le compte Instagram créé pour l’enquête",
  "caption": ""
 }
];

/* ===== HELPERS ===== */
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const path = m => (m.type === 'video' ? 'videos/' : 'images/') + m.file;
function placeholder(m) { return `<div class="ph">[ ${m.title} ]</div>`; }

/* Build each <figure data-media="file"> from the MEDIA array */
function buildMedia(fig, m) {
  if (m.type === 'video') {
    fig.innerHTML = `<video controls preload="none" playsinline><source src="${path(m)}"></video>`;
    fig.querySelector('source').addEventListener('error', () => fig.innerHTML = placeholder(m) + cap(m));
  } else {
    fig.innerHTML = `<img loading="lazy" src="${path(m)}" alt="${m.title}">`;
    fig.querySelector('img').addEventListener('error', () => fig.innerHTML = placeholder(m) + cap(m));
  }
  fig.insertAdjacentHTML('beforeend', cap(m));
}
function cap(m) { return `<span class="cap">${m.title}</span>`; }

document.addEventListener('DOMContentLoaded', () => {
  $$('[data-media]').forEach(f => { const m = MEDIA.find(x => x.file === f.dataset.media); if (m) buildMedia(f, m); });
  /* Counter animation */
  const count = el => {
    const to = +el.dataset.to, suf = el.dataset.suffix || '', t0 = performance.now();
    const step = t => { const p = Math.min((t - t0) / 1500, 1); el.textContent = Math.round(to * p) + suf; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };

  /* Scroll fade-ins + counters */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); $$('.count', e.target).forEach(count); io.unobserve(e.target);
  }), { threshold: .12 });
  $$('.fade, .stats').forEach(el => io.observe(el));
  $$('.stats .count').forEach(() => {});

  /* Lightbox for images */
  document.addEventListener('click', e => {
    if (e.target.matches('.media img')) {
      const lb = document.createElement('div'); lb.className = 'lightbox';
      lb.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}">`;
      lb.onclick = () => lb.remove(); document.body.append(lb);
    }
  });
});
