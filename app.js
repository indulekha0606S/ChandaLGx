/**
 * ChandaLGx — App Logic
 * Handles: navbar scroll, scroll-reveal, detection flow
 */

/* ─────────────────────────────────────
   NAVBAR SCROLL EFFECT
───────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─────────────────────────────────────
   SCROLL REVEAL (IntersectionObserver)
───────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

// Observe all section headers, cards, about-grid children
document.querySelectorAll(
    '.section-header, .about-grid > *, .about-card, .meter-card, .about-body, .result-step'
).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

/* ─────────────────────────────────────
   METER CARD FILL HELPER
───────────────────────────────────── */
window.fillVerse = (text) => {
    const input = document.getElementById('verseInput');
    input.value = text;
    input.focus();
    document.getElementById('detect').scrollIntoView({ behavior: 'smooth' });
};

/* ─────────────────────────────────────
   HERO TITLE — letter split animation
───────────────────────────────────── */
function animateHeroLetters() {
    // Already handled via CSS animation delays
}

/* ─────────────────────────────────────
   DETECTION FLOW
───────────────────────────────────── */
const detectBtn   = document.getElementById('detectBtn');
const verseInput  = document.getElementById('verseInput');
const resultsEl   = document.getElementById('results');
const loadingEl   = document.getElementById('loading');
const syllableList = document.getElementById('syllableList');
const patternList  = document.getElementById('patternList');
const detectedName = document.getElementById('detectedName');
const meterDesc    = document.getElementById('meterDesc');
const patternReadout = document.getElementById('patternReadout');

async function runDetection() {
    const verse = verseInput.value.trim();
    if (!verse) {
        // Shake the input bar
        const bar = document.getElementById('detectBar');
        bar.style.animation = 'shake 0.4s ease';
        bar.addEventListener('animationend', () => { bar.style.animation = ''; }, { once: true });
        return;
    }

    // Reset visibility and show loading spinner for cinematic effect
    resultsEl.classList.add('hidden');
    loadingEl.classList.remove('hidden');
    resultsEl.style.opacity = '0';
    
    // Original 1.1s delay for "analysis drama" that you liked!
    await new Promise(r => setTimeout(r, 1100));

    const analysis = window.chandasDetector.detect(verse);

    loadingEl.classList.add('hidden');
    resultsEl.classList.remove('hidden');
    resultsEl.style.opacity = '1';

    // ── Render syllables ──
    syllableList.innerHTML = '';
    analysis.syllables.forEach((s, i) => {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.textContent = s;
        pill.style.animationDelay = `${i * 0.06}s`;
        syllableList.appendChild(pill);
    });

    // ── Render weight tiles ──
    patternList.innerHTML = '';
    analysis.pattern.forEach((p, i) => {
        const tile = document.createElement('div');
        tile.className = `wt ${p === 'L' ? 'laghu' : 'guru'}`;
        tile.textContent = p === 'L' ? 'ल' : 'ग';
        tile.title = p === 'L' ? 'Laghu (Short)' : 'Guru (Heavy)';
        tile.style.animationDelay = `${i * 0.06}s`;
        patternList.appendChild(tile);
    });

    // ── Render final card ──
    detectedName.textContent = analysis.detectedChandas;
    const finalExplanation = analysis.explanation || 'Pattern recorded. Cross-referencing Chandashastra database...';
    
    const parts = finalExplanation.split('DEBUG LOG:');
    if (parts.length > 1) {
        meterDesc.innerHTML = parts[0].replace(/\n/g, '<br>') + 
            '<div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(212, 175, 55, 0.2); font-family: \'Inter\', sans-serif; font-size: 0.85rem; color: rgba(255,255,255,0.6);">' +
            '<strong style="color: rgba(212, 175, 55, 0.8);">DEBUG LOG:</strong>' + 
            parts[1].replace(/\n/g, '<br>') + 
            '</div>';
    } else {
        meterDesc.innerHTML = finalExplanation.replace(/\n/g, '<br>');
    }

    // Build pattern readout symbols
    patternReadout.innerHTML = '';
    analysis.pattern.forEach((p, i) => {
        const sym = document.createElement('span');
        sym.className = `pattern-symbol ${p === 'L' ? 'laghu' : 'guru'}`;
        sym.textContent = p === 'L' ? 'L' : 'G';
        sym.style.animationDelay = `${i * 0.04}s`;
        sym.style.opacity = '0';
        sym.style.animation = `pillPop 0.3s ease forwards ${i * 0.04}s`;
        patternReadout.appendChild(sym);
    });

    // Trigger step reveal with stagger
    const steps = resultsEl.querySelectorAll('.result-step');
    steps.forEach((step, i) => {
        step.classList.remove('visible');
        setTimeout(() => {
            step.classList.add('visible');
            revealObserver.unobserve(step); // prevent re-trigger
        }, i * 220); // Original slower stagger delay
    });

    // Smooth scroll into results
    setTimeout(() => {
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

detectBtn.addEventListener('click', runDetection);
verseInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') runDetection();
});

/* ─────────────────────────────────────
   SHAKE KEYFRAME (injected dynamically)
───────────────────────────────────── */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
    0%,100% { transform: translateX(0); }
    20%      { transform: translateX(-8px); }
    40%      { transform: translateX(8px); }
    60%      { transform: translateX(-5px); }
    80%      { transform: translateX(5px); }
}`;
document.head.appendChild(shakeStyle);

/* ─────────────────────────────────────
   PARALLAX HERO ORBS on mouse move
───────────────────────────────────── */
const hero = document.getElementById('hero');
const orbs = hero.querySelectorAll('.orb');

hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (clientX - cx) / cx;
    const dy = (clientY - cy) / cy;

    orbs.forEach((orb, i) => {
        const factor = (i + 1) * 12;
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    });
}, { passive: true });
