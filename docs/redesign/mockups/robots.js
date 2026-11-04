// Robots and award counts, from src/content/history/*.md
const CDN = 'https://stuypulse.nyc3.cdn.digitaloceanspaces.com/site/img/', OLD = CDN + 'old-bots/', PUB = '../../../public';
const ROBOTS = [
  ['Stuyle', 2001, 1, OLD + '2001_Stuyle.jpg'], ['Jack', 2002, 2, OLD + '2002_Jack.jpg'], ['Lola', 2003, 2, OLD + '2003_Lola.jpg'],
  ['Larry', 2004, 2, OLD + '2004_Larry.jpg'], ['Yvette', 2005, 5, OLD + '2005_Yvette.jpg'], ['Joshua', 2006, 3, OLD + '2006_Joshua.jpg'],
  ['Tom', 2007, 5, OLD + '2007_Tom.jpg'], ['DESbot', 2008, 4, OLD + '2008_DESbot.jpg'], ['Michael1', 2009, 2, OLD + '2009_Michael1.jpg'],
  ['Donovan', 2010, 5, OLD + '2010_Donovan.jpg'], ['DESdroid', 2011, 4, OLD + '2011_DESdroid.jpg'], ['JoeBot', 2012, 4, OLD + '2012_Joebot.jpg'],
  ['DESiree', 2013, 4, OLD + '2013_DESiree.jpg'], ['DESmond', 2014, 2, OLD + '2014_DESmond.jpg'], ['PEGasus1', 2015, 5, OLD + '2015_PEGasus1.jpg'],
  ['DEStiny', 2016, 6, OLD + '2016_DEStiny.jpg'], ['Rafael', 2017, 8, OLD + '2017-Rafael.jpg'], ['Wildcard', 2018, 10, OLD + '2018-Wildcard-single.jpg'],
  ['Alfred', 2019, 11, 'https://stuypulse.nyc3.digitaloceanspaces.com/site/img/Alfred.jpg'], ['Edwin', 2020, 2, CDN + 'edwin.jpg'],
  ['Elektra', 2021, 2, OLD + '2021_Elektra.jpg'], ['Excelsior', 2022, 8, CDN + 'Excelsior.JPG'], ['Jim', 2023, 8, OLD + '2023_Jim.jpg'],
  ['Izzi', 2024, 4, OLD + 'Izzi.jpeg'], ['Aunt Mary', 2025, 9, PUB + '/robots/2025_Aunt_Mary.jpg'], ['Tribecbot', 2026, 10, PUB + '/home/tribecbot.jpg'],
];

// Draws the heartbeat: one spike per season, height = awards. Robots in `withPhoto` sit on their peak.
function drawHeartbeat(el, withPhoto) {
  const W = 1000, H = 300, base = 260, s = W / ROBOTS.length, pts = [];
  let d = `M0 ${base}`;
  ROBOTS.forEach(([, , n], i) => {
    const x = i * s + s / 2, y = base - n * 20;
    d += ` L${x - s * .3} ${base} L${x - s * .12} ${base + 12} L${x} ${y} L${x + s * .14} ${base + 18} L${x + s * .3} ${base}`;
    pts.push([x / W * 100, y / H * 100]);
  });
  let html = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><path d="${d} L${W} ${base}"/></svg><div class="tip" role="status"></div>`;
  ROBOTS.forEach(([name, year, n, img], i) => {
    const pic = withPhoto.includes(year), big = year === 2026;
    html += `<button class="spike${pic ? ' pic' : ''}${big ? ' big' : ''}" style="left:${pts[i][0]}%;top:${pts[i][1]}%" data-i="${i}" aria-label="${name}, ${year}, ${n} award${n === 1 ? '' : 's'}">${pic ? `<img src="${img}" alt="">` : ''}</button>`;
  });
  el.innerHTML = html;
  const tip = el.querySelector('.tip');
  const show = b => { const [name, year, n] = ROBOTS[b.dataset.i]; tip.innerHTML = `<b>${name}</b> ${year}, ${n} award${n === 1 ? '' : 's'}`; tip.style.left = b.style.left; tip.style.top = b.style.top; tip.classList.add('show') };
  el.querySelectorAll('.spike').forEach(b => { b.addEventListener('mouseenter', () => show(b)); b.addEventListener('focus', () => show(b)); b.addEventListener('mouseleave', () => tip.classList.remove('show')); b.addEventListener('blur', () => tip.classList.remove('show')) });
}
