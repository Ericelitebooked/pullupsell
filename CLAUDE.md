# Pullupsell Partners — Claude Code Navigation Guide

**This file tells Claude Code how to understand, modify, and deploy your Pullupsell Partners project.**

---

## 📍 Quick Reference

| Question | Answer |
|----------|--------|
| **What is this project?** | Lead generation landing page + quiz for local service providers |
| **Where are the files?** | `C:\Users\erice\OneDrive\Documents\2026 Agentic\personal website\pullupsell-partners\` |
| **What's in this folder?** | Landing page (HTML/CSS/JS), environment config, service definitions, docs |
| **How do I modify it?** | Use Claude Code to edit files, iterate, then push to GitHub |
| **How do I deploy?** | GitHub → Vercel (automatic on push to main) |
| **What's the status?** | Phase 1 MVP (quiz + lead capture + tracking) |

---

## 📁 File Structure

```
pullupsell-partners/
├── PROJECT-PLAN.md              # Master project document (read this first!)
├── CLAUDE.md                    # This file — Claude Code navigation
├── SERVICES.md                  # Three products + niche customization
├── README.md                    # Project overview for GitHub
│
├── landing-page/                # Main deliverable
│   ├── index.html              # Landing page (5 sections: hero, niche, quiz, capture, results)
│   ├── style.css               # Responsive design (mobile-first)
│   ├── script.js               # Quiz logic + UTM tracking + localStorage
│   └── assets/
│       ├── favicon.ico
│       ├── logo.png
│       └── images/
│
├── .env.example                # API key template (copy to .env.local)
├── .env.local                  # ACTUAL API keys (gitignored, local only)
├── vercel.json                 # Vercel deployment config
├── robots.txt                  # Search engine crawling
├── 404.html                    # Error page
│
└── docs/
    ├── n8n-webhook-setup.md    # How to connect n8n webhook
    ├── SEO-CHECKLIST.md        # SEO validation steps
    └── DEPLOYMENT.md           # GitHub + Vercel setup
```

---

## 🎯 What This Project Does

**User Journey:**

1. Visitor arrives via UTM link (email, LinkedIn, Instagram, YouTube, or referral)
2. Sees hero: "Ditch referrals. Build lead pool with AI."
3. Selects niche (HVAC, roofing, real estate, dental, etc.)
4. Answers 3 personalized quiz questions
5. Enters email + name + phone
6. Sees personalized results with ROI calculation
7. Shown recommended product + pricing
8. Offered referral link to earn $50 per friend who books

**Data Flow:**

```
Form Submit
    ↓
JavaScript captures: email, name, phone, quiz answers, UTM params, referral code
    ↓
POST to n8n webhook URL (via fetch API)
    ↓
n8n receives data
    ↓
n8n adds row to Google Sheets
    ↓
Database now has: name, email, phone, niche, quiz answers, source (utm_source, etc.), timestamp
```

---

## 🛠️ Common Tasks & How to Do Them

### Task 1: Change Landing Page Content

**What to edit:** `landing-page/index.html`

**Example prompt to Claude Code:**
> "Update the hero headline from 'Ditch referrals. Build lead pool with AI.' to 'More leads in [NICHE]. Zero referrals needed.'"

**What will change:**
- HTML heading text
- Page meta description
- OG graph title

**After editing:**
- Test locally: `python -m http.server 8000` (then visit localhost:8000)
- Push to GitHub when ready

---

### Task 2: Customize Quiz Questions for a Niche

**What to edit:** `landing-page/script.js` (search for `quizQuestions` object)

**Example prompt:**
> "Customize the quiz for HVAC contractors. The three questions should identify pain points around:
> 1. Seasonal demand management
> 2. Emergency call handling
> 3. Customer retention
> 
> Use the niche customization in SERVICES.md as reference."

**Where questions live:**
```javascript
const quizQuestions = {
  // Format:
  generic: [
    { question: "...", options: [...] },
    { question: "...", options: [...] },
    { question: "...", options: [...] }
  ],
  hvac: [
    // HVAC-specific questions here
  ],
  roofing: [
    // Roofing-specific questions here
  ]
}
```

**After customizing:**
- Test the quiz locally
- Verify results logic matches new questions
- Push to GitHub

---

### Task 3: Change Pricing

**What to edit:** `landing-page/script.js` (search for `productRecommendations` or `pricing`)

**Example prompt:**
> "Update Photo Quote Engine pricing to $1,500 setup + $300/month (was $750-2000 + $150-500). Update the results page to show these new prices."

**Where pricing lives:**
```javascript
const products = {
  photoQuoteEngine: {
    name: "Photo Quote Engine",
    setupCost: "$750–$2,000",
    monthlyCost: "$150–$500/month"
  }
}
```

---

### Task 4: Update Contact Information

**What to edit:** `.env.local` (and `.env.example` as template)

**Variables to change:**
```
REACT_APP_CONTACT_EMAIL=eric.b@pullupsell.com
REACT_APP_CONTACT_PHONE=+1 (XXX) XXX-XXXX
REACT_APP_CALENDLY_ID=your_calendly_username
```

**After updating .env.local:**
- Refresh browser to reload env vars
- Test contact CTA links work
- Do NOT commit .env.local to GitHub

---

### Task 5: Change Design (Colors, Fonts, Layout)

**What to edit:** `landing-page/style.css`

**Example prompt:**
> "Update the brand colors to match our new guidelines:
> - Primary: #0066cc → #1e40af (darker blue)
> - Secondary: #9333ea → #7c3aed (purple)
> - Background: #ffffff → #f0f9ff (light blue tint)
> 
> Update CSS variables at the top of the file."

**Where theme vars live:**
```css
:root {
  --primary-blue: #0066cc;
  --secondary-purple: #9333ea;
  --background: #ffffff;
  --text-dark: #1a1a1a;
}
```

---

### Task 6: Add a New Feature (e.g., Phone Verification)

**What to edit:** `landing-page/index.html`, `landing-page/script.js`

**Example prompt:**
> "Add phone verification before showing results. After user enters phone:
> 1. Send OTP to their phone via SMS
> 2. User enters 4-digit code
> 3. If correct, show results; if wrong, ask to try again or skip
> 
> Use Twilio for SMS. Get API key from .env"

**Process:**
1. Add HTML form section for OTP input
2. Add JavaScript to handle SMS + verification
3. Add .env variables for Twilio credentials
4. Test locally, then push

---

### Task 7: Adjust Quiz Logic

**What to edit:** `landing-page/script.js` (search for `calculateRecommendation()`)

**Example prompt:**
> "If user selects 'Real Estate' niche AND answers 'losing leads to hesitation' for Q1, recommend Photo Quote Engine instead of default. Update the recommendation logic."

**Where logic lives:**
```javascript
function calculateRecommendation(niche, answers) {
  // Current logic: returns product based on niche + Q1 answer
  // Modify these conditions
}
```

---

## 🚀 Deployment Workflow

### Step 1: Make Changes Locally
```bash
# Edit files in landing-page/
# Test: python -m http.server 8000
# Verify in browser
```

### Step 2: Commit & Push to GitHub
```bash
git add landing-page/ SERVICES.md
git commit -m "feat: Update quiz for HVAC niche"
git push origin main
```

### Step 3: Auto-Deploy to Vercel
- Vercel watches your GitHub repo
- On push to `main`, Vercel auto-deploys
- Your site updates live at pullupsell.com

### Step 4: Verify Live
- Visit pullupsell.com
- Test form submission → check Google Sheets for data
- Test UTM tracking → verify parameters appear in Sheets

---

## 🎨 Using the `/frontend-design` Skill

If you want to redesign the landing page:

1. **Give Claude Code this prompt:**
   > "Use the `/frontend-design` skill to redesign the landing page for Pullupsell Partners.
   > 
   > Design inspiration: [Paste Dribbble links]
   > 
   > Key elements:
   > - Hero headline: 'Ditch referrals. Build lead pool with AI.'
   > - 5-step flow: niche selector → quiz → capture → results → CTA
   > - Modern tech aesthetic (blues, purples)
   > - CTAs: Book Call, Request Demo, Share Referral
   > - Mobile responsive
   > 
   > Use vanilla HTML/CSS/JS, no build step."

2. **Claude will output new HTML/CSS**

3. **Copy to `landing-page/index.html` and `landing-page/style.css`**

4. **Test locally, then push**

---

## 📊 Tracking & Analytics Setup

### UTM Parameters (Automatic)

Your landing page reads URL parameters automatically:

```
Example: pullupsell.com/start?utm_source=linkedin&utm_medium=dm&utm_campaign=realestate_q1
```

**JavaScript captures these and sends with form:**
- utm_source (platform: linkedin, email, instagram, youtube, referral, direct)
- utm_medium (type: dm, cold, comment, ad)
- utm_campaign (campaign: realestate_q1)
- utm_content (message variant)

**All data lands in Google Sheets with timestamp.**

---

### Setting Up Google Analytics

1. **Get your GA4 Measurement ID** from Google Analytics
2. **Update `.env.local`:**
   ```
   REACT_APP_GA_ID=G-XXXXXXXXXX
   ```
3. **Reload page** → GA4 tracking is active

**What you can track:**
- Page views
- Quiz completion rate
- Form submissions
- Button clicks
- Time on page

---

## 🔗 Connecting n8n Webhook

### Step 1: Create n8n Account
- Go to n8n.io
- Sign up for free account

### Step 2: Create Webhook Trigger
- Click "Add trigger" → HTTP Request
- Set to POST
- Copy the webhook URL

### Step 3: Update .env
```
N8N_WEBHOOK_URL=https://n8n.yourinstance.com/webhook/pullupsell-leads
```

### Step 4: Set Up n8n Workflow
- Receive POST from landing page form
- Add row to Google Sheets
- (Optional) Send confirmation email
- (Optional) Slack notification

See `docs/n8n-webhook-setup.md` for full instructions.

---

## 🐛 Debugging Tips

### Form Not Submitting?
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for JavaScript errors
4. Check if n8n webhook URL is correct in .env

### UTM Parameters Not Captured?
1. Check if link has ?utm_source=... params
2. Open DevTools → check `localStorage`
3. Look for `utm_source` entry in localStorage

### Data Not in Google Sheets?
1. Verify n8n webhook is connected
2. Check n8n workflow logs
3. Verify Google Sheets permissions
4. Test webhook with curl or Postman

---

## 📞 Contact & Handoff

**If you need to hand this off to another developer:**

Send them:
1. **PROJECT-PLAN.md** — Overview + decisions
2. **This file (CLAUDE.md)** — How to modify
3. **SERVICES.md** — Product definitions
4. **GitHub repo link** — Full codebase
5. **.env.example** — What env vars they need

---

## 🔄 Version Tracking

| Date | Update | Status |
|------|--------|--------|
| 2026-09-10 | Claude.md created | ✅ Current |
| TBD | First landing page deployed | ⏳ Pending |
| TBD | First 10 leads captured | ⏳ Pending |
| TBD | A/B test headline variants | ⏳ Pending |

---

## ✨ Key Reminders

✅ **Always test locally before pushing**
```bash
python -m http.server 8000
# Visit localhost:8000
```

✅ **Never commit .env.local to GitHub** (it's in .gitignore)

✅ **When deploying changes:**
- Edit files locally
- Test locally
- Git commit + push
- Vercel auto-deploys

✅ **When switching niches:**
- Use SERVICES.md customization table
- Update quiz questions
- Update results messaging
- Use `/frontend-design` skill for new hero

---

**You're ready to go! Start with Task 1 or let me know what you need to change first.** 🚀
