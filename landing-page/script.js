// Landing Page State & Logic
const state = {
  currentStep: 'hero',
  selectedNiche: null,
  quiz: { q1: null, q2: null, q3: null },
  leadData: {},
  referralCode: ''
};

// Product Recommendations (based on niche + quiz answers)
const products = {
  hvac: {
    name: 'Repeat Booking Engine',
    tagline: 'Keep customers coming back automatically',
    description: 'Turn one-time HVAC jobs into recurring maintenance contracts. AI schedules follow-ups and qualifies repeat customers automatically.',
    setup: 0,
    monthly: 149
  },
  roofing: {
    name: 'Photo Quote Engine',
    tagline: 'Instantly qualify photo-based roof inspections',
    description: 'Stop wasting time on unqualified photo inquiries. AI pre-screens images and only delivers qualified leads to your inbox.',
    setup: 0,
    monthly: 199
  },
  plumbing: {
    name: 'Local Prospect Hunter',
    tagline: 'Find targeted plumbing service customers in your area',
    description: 'AI identifies and qualifies local prospects who need your services. Get daily qualified lead recommendations specific to your service area.',
    setup: 99,
    monthly: 129
  },
  'real-estate': {
    name: 'Local Prospect Hunter',
    tagline: 'Find and qualify real estate prospects in your market',
    description: 'AI discovers qualified prospects actively looking for real estate services in your area. Get daily lead recommendations with contact info.',
    setup: 99,
    monthly: 159
  },
  dental: {
    name: 'Repeat Booking Engine',
    tagline: 'Maximize recurring dental patient visits',
    description: 'Automate patient follow-ups and get them back for routine cleanings and checkups. AI remembers when patients are due.',
    setup: 0,
    monthly: 129
  },
  'pest-control': {
    name: 'Local Prospect Hunter',
    tagline: 'Find pest control customers in high-demand areas',
    description: 'AI targets neighborhoods with pest complaints and identifies qualified prospects. Get weekly leads with decision-maker info.',
    setup: 99,
    monthly: 119
  },
  landscaping: {
    name: 'Repeat Booking Engine',
    tagline: 'Keep landscaping customers on seasonal contracts',
    description: 'Automate seasonal service reminders and upsell opportunities. AI identifies customers ready for spring/fall maintenance.',
    setup: 0,
    monthly: 99
  },
  other: {
    name: 'Photo Quote Engine',
    tagline: 'Qualify any photo-based service request instantly',
    description: 'AI pre-screens and qualifies leads submitted via photos. Save time on unqualified inquiries and focus on high-quality leads.',
    setup: 0,
    monthly: 149
  }
};

// Utility: Get UTM parameters from URL
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || 'direct',
    utm_medium: params.get('utm_medium') || 'none',
    utm_campaign: params.get('utm_campaign') || 'none',
    utm_content: params.get('utm_content') || 'none',
    ref: params.get('ref') || ''
  };
}

// Generate referral code: email_prefix_XXXX
function generateReferralCode(email) {
  const prefix = email.split('@')[0];
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}_${random}`;
}

// Update progress bar
function updateProgress(percent) {
  const bar = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');
  bar.style.width = percent + '%';
  label.textContent = percent + '%';
}

// Navigate to next step
function goToStep(stepName) {
  document.querySelectorAll('.step').forEach(s => {
    s.classList.remove('active');
  });

  const nextStep = document.getElementById(stepName + '-section');
  if (nextStep) {
    nextStep.classList.add('active');
    state.currentStep = stepName;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update progress
    const progressMap = { hero: 0, niche: 20, quiz1: 40, quiz2: 60, quiz3: 80, contact: 80, results: 100 };
    updateProgress(progressMap[stepName] || 0);
  }
}

// ===== NICHE SELECTOR =====
document.querySelectorAll('input[name="niche"]').forEach(input => {
  input.addEventListener('change', function() {
    state.selectedNiche = this.value;
    document.querySelector('[data-next="quiz1"]').disabled = false;
  });
});

// ===== QUIZ VALIDATION =====
document.querySelectorAll('input[name="quiz1"]').forEach(input => {
  input.addEventListener('change', function() {
    state.quiz.q1 = this.value;
    document.querySelector('#quiz1-section [data-next="quiz2"]').disabled = false;
  });
});

document.querySelectorAll('input[name="quiz2"]').forEach(input => {
  input.addEventListener('change', function() {
    state.quiz.q2 = this.value;
    document.querySelector('#quiz2-section [data-next="quiz3"]').disabled = false;
  });
});

document.querySelectorAll('input[name="quiz3"]').forEach(input => {
  input.addEventListener('change', function() {
    state.quiz.q3 = this.value;
    document.querySelector('#quiz3-section [data-next="contact"]').disabled = false;
  });
});

// ===== BUTTON NAVIGATION =====
document.querySelectorAll('[data-next]').forEach(btn => {
  btn.addEventListener('click', function() {
    const nextStep = this.getAttribute('data-next');
    goToStep(nextStep);
  });
});

// ===== CONTACT FORM SUBMISSION =====
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // Basic validation
  if (!name || !email) {
    alert('Please fill in all required fields');
    return;
  }

  // Generate referral code
  const referralCode = generateReferralCode(email);
  state.referralCode = referralCode;

  // Store lead data
  const utmParams = getUTMParams();
  state.leadData = {
    name,
    email,
    phone,
    niche: state.selectedNiche,
    quiz_answers: [state.quiz.q1, state.quiz.q2, state.quiz.q3].join('; '),
    ...utmParams,
    referral_code: referralCode,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  localStorage.setItem('pullupsell_lead', JSON.stringify(state.leadData));

  // Go to results
  showResults();
});

// ===== RESULTS PAGE =====
function showResults() {
  const product = products[state.selectedNiche] || products.other;

  // Update greeting
  document.getElementById('results-greeting').textContent = `Here's what we found, ${state.leadData.name}`;

  // Update product recommendation
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-tagline').textContent = product.tagline;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-setup').textContent = `$${product.setup}`;
  document.getElementById('product-monthly').textContent = `$${product.monthly}/mo`;

  // Update referral section
  const referralLink = `${window.location.origin}?ref=${state.referralCode}`;
  document.getElementById('referral-link').value = referralLink;
  document.getElementById('referral-code').textContent = state.referralCode;

  // Copy to clipboard
  document.getElementById('copy-referral-btn').addEventListener('click', function() {
    navigator.clipboard.writeText(referralLink);
    this.textContent = '✓ Copied!';
    setTimeout(() => {
      this.textContent = 'Copy Link';
    }, 2000);
  });

  // CTAs
  document.getElementById('consultation-btn').addEventListener('click', function() {
    window.open('https://calendly.com/pullupsell', '_blank');
  });

  document.getElementById('demo-btn').addEventListener('click', function() {
    window.location.href = `mailto:eric.b@pullupsell.com?subject=Demo Request&body=Hi, I'm interested in a demo. My referral code is: ${state.referralCode}`;
  });

  goToStep('results');
}

// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');

// Check for saved preference or system preference
function initializeDarkMode() {
  const saved = localStorage.getItem('pullupsell_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    modeIcon.textContent = saved === 'light' ? '🌙' : '☀️';
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    modeIcon.textContent = '☀️';
  }
}

darkModeToggle.addEventListener('click', function() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('pullupsell_theme', next);
  modeIcon.textContent = next === 'light' ? '🌙' : '☀️';
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  initializeDarkMode();

  // Check for referral code in URL
  const params = getUTMParams();
  if (params.ref) {
    console.log('Referred by:', params.ref);
  }

  // Restore progress if user revisits
  const savedLead = localStorage.getItem('pullupsell_lead');
  if (savedLead) {
    const restored = JSON.parse(savedLead);
    console.log('Restored previous lead data:', restored);
  }
});
