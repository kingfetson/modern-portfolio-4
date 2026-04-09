// ============================================
// CONFIG-DRIVEN PORTFOLIO SCRIPT
// ============================================

// Wait for DOM and CONFIG to load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONFIG === 'undefined') {
    console.error('CONFIG not found. Make sure config.js is loaded before script.js');
    return;
  }

  initNavigation();
  initHero();
  initAbout();
  initStats();
  initResume();
  initCV();
  initContact();
  initAnimations();
  initEventListeners();
});

// --------------------------------------------
// 1. NAVIGATION
// --------------------------------------------
function initNavigation() {
  const navLinksContainer = document.getElementById('navLinks');
  navLinksContainer.innerHTML = CONFIG.navigation
    .map(item => `<a href="#" class="nav-link ${item.id === 'home' ? 'active' : ''}" data-page="${item.id}" onclick="showPage('${item.id}')">${item.label}</a>`)
    .join('');
}

// --------------------------------------------
// 2. HERO SECTION
// --------------------------------------------
function initHero() {
  document.querySelector('.greeting').innerHTML = `${CONFIG.hero.greeting} <span class="green-text">${CONFIG.site.name}</span>`;
  document.querySelector('.description').textContent = CONFIG.hero.description;
  
  const ctaBtn = document.querySelector('.btn-primary');
  ctaBtn.textContent = CONFIG.hero.ctaButton.text;
  ctaBtn.setAttribute('onclick', `showPage('${CONFIG.hero.ctaButton.action}')`);
}

// --------------------------------------------
// 3. ABOUT SECTION
// --------------------------------------------
function initAbout() {
  const detailsHTML = `
    <div class="detail-row"><span class="detail-label">Name:</span><span class="detail-value">${CONFIG.about.name}</span></div>
    <div class="detail-row"><span class="detail-label">Email:</span><span class="detail-value">${CONFIG.about.email}</span></div>
    <div class="detail-row"><span class="detail-label">Age:</span><span class="detail-value">${CONFIG.about.age}</span></div>
    <div class="detail-row"><span class="detail-label">From:</span><span class="detail-value">${CONFIG.about.location}</span></div>
    <div class="detail-row"><span class="detail-label">Freelance:</span><span class="detail-value available">${CONFIG.about.freelance}</span></div>
  `;
  document.querySelector('.about-details').innerHTML = detailsHTML;
  document.querySelector('.about-text').textContent = CONFIG.about.description;
  
  const cvBtn = document.querySelector('.about-right .btn-primary');
  cvBtn.textContent = 'Download CV';
  cvBtn.setAttribute('onclick', `showPage('${CONFIG.about.cvDownloadPage}')`);
}

// --------------------------------------------
// 4. STATS COUNTERS
// --------------------------------------------
function initStats() {
  const statsContainer = document.querySelector('.stats-section');
  statsContainer.innerHTML = CONFIG.stats
    .map(stat => `
      <div class="stat-card">
        <h3 class="stat-number" data-target="${stat.value}">0</h3>
        <p class="stat-label">${stat.label}</p>
      </div>
    `).join('');
}

// --------------------------------------------
// 5. RESUME TIMELINE
// --------------------------------------------
function initResume() {
  const createTimeline = (items) => items.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <h4>${item.title}</h4>
        <p class="timeline-school">${item.institution}</p>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');

  document.querySelector('.resume-column:nth-child(1) .timeline').innerHTML = createTimeline(CONFIG.resume.education);
  document.querySelector('.resume-column:nth-child(2) .timeline').innerHTML = createTimeline(CONFIG.resume.experience);
}

// --------------------------------------------
// 6. CV SECTION
// --------------------------------------------
function initCV() {
  const { contact, skills, languages, interests } = CONFIG.cv;
  
  document.querySelector('.cv-contact-item:nth-child(1) span:last-child').textContent = contact.email;
  document.querySelector('.cv-contact-item:nth-child(2) span:last-child').textContent = contact.phone;
  document.querySelector('.cv-contact-item:nth-child(3) span:last-child').textContent = contact.location;

  document.querySelector('.skills-grid').innerHTML = skills.map(skill => `
    <div class="skill-item">
      <div class="skill-header"><span>${skill.name}</span><span>${skill.level}%</span></div>
      <div class="skill-bar"><div class="skill-fill" data-width="${skill.level}"></div></div>
    </div>
  `).join('');

  document.querySelector('.languages-grid').innerHTML = languages.map(lang => `
    <div class="language-item"><span>${lang.name}</span><span class="green-text">${lang.proficiency}</span></div>
  `).join('');

  document.querySelector('.interests-grid').innerHTML = interests.map(int => `
    <div class="interest-item">${int}</div>
  `).join('');
}

// --------------------------------------------
// 7. CONTACT SECTION
// --------------------------------------------
function initContact() {
  const { email, phone, location, website } = CONFIG.contact;
  const cards = document.querySelectorAll('.contact-card p');
  cards[0].textContent = email;
  cards[1].textContent = phone;
  cards[2].textContent = location;
  cards[3].textContent = website;

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    showToast(CONFIG.contact.successMessage);
    form.reset();
  });
}

// --------------------------------------------
// 8. ANIMATIONS & INTERACTIONS
// --------------------------------------------
function initAnimations() {
  startTypingEffect();
}

let textIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = CONFIG.animation.typing.initialSpeed;

function startTypingEffect() {
  const el = document.getElementById('typedText');
  const current = CONFIG.hero.typingTexts[textIndex];

  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = CONFIG.animation.typing.deleteSpeed;
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = CONFIG.animation.typing.initialSpeed;
  }

  if (!isDeleting && charIndex === current.length) {
    typingSpeed = CONFIG.animation.typing.pauseAtEnd;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % CONFIG.hero.typingTexts.length;
    typingSpeed = CONFIG.animation.typing.pauseAtStart;
  }

  setTimeout(startTypingEffect, typingSpeed);
}

let countersAnimated = false;
function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = CONFIG.animation.counters.duration;
    const step = target / (duration / 16);
    let current = 0;
    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current) + (CONFIG.stats.find(s => s.value === target)?.suffix || '+');
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + (CONFIG.stats.find(s => s.value === target)?.suffix || '+');
      }
    };
    update();
  });
}

let skillsAnimated = false;
function animateSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;
  document.querySelectorAll('.skill-fill').forEach((fill, i) => {
    setTimeout(() => {
      fill.style.width = fill.dataset.width + '%';
    }, i * CONFIG.animation.skills.staggerDelay);
  });
}

// --------------------------------------------
// 9. PAGE NAVIGATION & UI
// --------------------------------------------
window.showPage = function(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${pageName}`).classList.add('active');
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageName);
  });

  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pageName === 'about') setTimeout(animateCounters, CONFIG.animation.counters.startDelay);
  if (pageName === 'cv') setTimeout(animateSkillBars, CONFIG.animation.skills.startDelay);
};

window.toggleMenu = function() {
  document.getElementById('navLinks').classList.toggle('open');
};

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function initEventListeners() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.getElementById('navLinks').classList.remove('open');
  });

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
      navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });
}
