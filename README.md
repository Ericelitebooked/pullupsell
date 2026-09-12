# Pullupsell Partners — AI Lead Generation Landing Page

**Status:** Phase 1 MVP ✅ Ready for deployment  
**Tagline:** "Ditch referrals. Build lead pools with AI."

---

## 🎯 What This Is

A modern, responsive landing page + interactive quiz that:
- Qualifies prospects by industry (HVAC, roofing, real estate, etc.)
- Identifies their pain point through personalized questions
- Captures contact info (email, name, phone)
- Shows personalized product recommendation
- Tracks every lead source (email, LinkedIn, Instagram, YouTube, referrals)
- Generates unique referral codes for viral growth

---

## 🚀 Quick Start

### Local Testing

```bash
# Navigate to project folder
cd "C:\Users\erice\OneDrive\Documents\2026 Agentic\personal website\pullupsell-partners"

# Start local server
python -m http.server 8000

# Visit http://localhost:8000
```

### Configuration

1. Copy `.env.example` to `.env.local`
2. Update values (GA ID, email, phone, Calendly username)
3. **IMPORTANT:** Never commit `.env.local` to GitHub

### Deployment

See [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md) for complete instructions:

```bash
git add .
git commit -m "feat: Initial Phase 1 MVP"
git push origin main
# Vercel auto-deploys to production
```

---

## 📁 Project Structure

```
pullupsell-partners/
├── landing-page/
│   ├── index.html          # 5-step quiz + results
│   ├── style.css           # Modern, responsive design
│   └── script.js           # Quiz logic + tracking
│
├── docs/
│   ├── N8N-WEBHOOK-SETUP.md        # Webhook configuration
│   └── DEPLOYMENT-CHECKLIST.md     # Pre-flight checklist
│
├── PROJECT-PLAN.md          # Complete project overview
├── CLAUDE.md                # How to modify with Claude Code
├── SERVICES.md              # Three products + niche templates
├── README.md                # This file
│
├── .env.example             # API key template
├── .env.local               # ACTUAL keys (gitignored)
├── vercel.json              # Deployment config
├── robots.txt               # SEO
├── 404.html                 # Error page
│
└── .gitignore               # Don't commit .env.local
```

---

## 🎨 Design

- **Aesthetic:** Modern AI/B2B SaaS (inspired by Dribbble)
- **Typography:** Inter font, responsive sizing
- **Colors:** Primary blue (#0066cc), secondary purple (#7c3aed)
- **Responsive:** Mobile-first, desktop-optimized
- **Accessibility:** WCAG AA, keyboard navigation, skip links

---

## 🔧 Technology Stack

**Frontend:**
- Vanilla HTML5 (no framework)
- CSS3 (responsive, dark mode support)
- JavaScript (no dependencies, native ES6)

**Backend & Data:**
- n8n (webhook processor)
- Google Sheets (database)
- Vercel (static hosting)
- Google Analytics 4 (tracking)

**No build step.** Deploy raw files to Vercel.

---

## 📊 User Flow

```
1. Visitor Arrives
   ↓
2. Hero Section (CTA: "See Which Solution Fits You")
   ↓
3. Niche Selector (Pick: HVAC, Roofing, Real Estate, etc.)
   ↓
4. Quiz (3 personalized questions based on niche)
   ↓
5. Contact Capture (Email, Name, Phone)
   ↓
6. Data Sent to n8n → Google Sheets
   ↓
7. Results Page (Personalized product recommendation)
   ↓
8. Referral Link (Share and earn $50)
```

---

## 🎯 Lead Tracking

Every link includes UTM parameters:

```
pullupsell.com?utm_source=linkedin&utm_medium=dm&utm_campaign=realestate_q1&utm_content=message1
```

**Captured data:**
- Email, name, phone
- Niche selected
- Quiz answers (pain points)
- UTM source (channel)
- UTM medium (type of outreach)
- UTM campaign (campaign name)
- UTM content (message variant)
- Referral code (if applicable)
- Timestamp

**Database:** Google Sheets with one row per lead

---

## 📦 Three Core Products

### 1. Photo Quote Engine
- **For:** Contractors, roofers, painters
- **Problem:** Unqualified phone calls
- **Solution:** "Customers upload photos → AI creates estimate request → Qualified leads"
- **Price:** $750–$2,000 setup + $150–$500/month

### 2. Repeat Booking Engine
- **For:** HVAC, dental, pest control, maintenance
- **Problem:** Lost repeat revenue
- **Solution:** "Past customers auto-flagged when due → Team sends reminders → More repeat business"
- **Price:** $500–$1,500 setup + $100–$300/month

### 3. Local Prospect Hunter
- **For:** B2B service providers
- **Problem:** Outdated leads, generic outreach
- **Solution:** "Pick area + buyer type → AI finds prospects + drafts outreach → 80% less prospecting time"
- **Price:** $1,000–$3,000 setup + $300–$1,000/month

---

## 🔌 Integration Setup

### n8n Webhook (Receives Form Data)

See [N8N-WEBHOOK-SETUP.md](docs/N8N-WEBHOOK-SETUP.md) for complete instructions.

**Quick overview:**
1. Create n8n account
2. Set up HTTP webhook trigger
3. Add Google Sheets node
4. Copy webhook URL
5. Update `landing-page/script.js` with webhook URL

### Google Analytics

1. Create GA4 property
2. Get measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local`: `REACT_APP_GA_ID=G-XXXXXXXXXX`
4. Refresh page to start tracking

### Calendly (Optional - For "Book Call" CTA)

1. Create Calendly account
2. Get your username
3. Add to `.env.local`: `REACT_APP_CALENDLY_ID=your_username`
4. Button links to your Calendly page

---

## 📝 Customization

### Change Quiz Questions

Edit `landing-page/script.js`, find `quizDefinitions` object:

```javascript
const quizDefinitions = {
  hvac: [
    {
      question: "Your question here?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    },
    // ... more questions
  ]
}
```

### Change Product Recommendations

Edit the recommendation logic in `landing-page/script.js`, function `getProductRecommendation()`.

### Change Colors

Edit CSS variables in `landing-page/style.css`:

```css
:root {
  --primary-blue: #0066cc;
  --secondary-purple: #7c3aed;
  /* ... update as needed */
}
```

### Customize for Different Niche

Use [SERVICES.md](SERVICES.md) to adapt messaging for any industry. Duplicate the landing page and customize:
- Hero headline
- Quiz questions
- Product recommendation
- ROI messaging

---

## 🧪 Testing Checklist

### Before Deployment

- [ ] Quiz flow works (all 5 steps)
- [ ] Form validation works
- [ ] No console errors
- [ ] Mobile responsive
- [ ] UTM parameters captured
- [ ] Referral code generated

### After Deployment

- [ ] Page loads on production URL
- [ ] Form submits to Google Sheets
- [ ] n8n webhook logs show data
- [ ] Google Analytics shows page views
- [ ] All links work (Calendly, email, referral)

See [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md) for full pre-flight checklist.

---

## 🚀 Deployment

### Prerequisites

- GitHub account
- Vercel account (free)
- Google Sheets account
- n8n account (free)

### Deploy in 3 Steps

```bash
# 1. Push to GitHub
git add .
git commit -m "feat: Phase 1 landing page"
git push origin main

# 2. Connect GitHub to Vercel (one-time)
# Go to vercel.com → Import Project → Select this repo

# 3. Done! Vercel auto-deploys on every push to main
```

See [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md) for detailed instructions.

---

## 📞 Usage

### Send Tracked Links

Share tracked links in your outreach:

**Email:**
```
https://pullupsell.com?utm_source=email&utm_medium=cold&utm_campaign=hvac_q1&utm_content=email1
```

**LinkedIn DM:**
```
https://pullupsell.com?utm_source=linkedin&utm_medium=dm&utm_campaign=hvac_q1
```

**Instagram:**
```
https://pullupsell.com?utm_source=instagram&utm_medium=dm&utm_campaign=hvac_promo
```

**Referral:**
```
https://pullupsell.com?ref=eric_1234
```

### View Leads

All submissions appear in Google Sheets with:
- Contact info
- Niche selected
- Quiz answers
- Source of the lead
- Timestamp

---

## 🔧 Troubleshooting

### Form not submitting?

1. Check browser console (F12) for errors
2. Verify n8n webhook URL in `script.js`
3. Check n8n workflow is activated
4. Test locally first

### Data not in Google Sheets?

1. Check n8n webhook logs
2. Verify Google Sheets authentication
3. Verify column mappings in n8n
4. Check for typos in field names

### Styling looks broken?

1. Hard refresh browser (Ctrl+Shift+R)
2. Clear browser cache
3. Check CSS file is loading (F12 → Network)

See [CLAUDE.md](CLAUDE.md) for more debugging tips.

---

## 📈 Metrics to Track

**Week 1:**
- Visitors
- Quiz completion rate (%)
- Form submission rate (%)

**Ongoing:**
- Conversion rate by UTM source
- Most popular niche
- Most common pain point
- Time to complete quiz
- Referral generation rate

---

## 🔄 Phases

### Phase 1 (Current) ✅
- Landing page + quiz
- Lead capture
- UTM tracking
- Basic product recommendation

### Phase 2 (After 50 leads)
- Referral rewards system
- Email confirmations
- Automated follow-up sequences
- Slack notifications

### Phase 3 (After 500 leads)
- Referral dashboard
- AI voice call follow-up
- Advanced analytics
- A/B testing framework

See [PROJECT-PLAN.md](PROJECT-PLAN.md) for full roadmap.

---

## 📚 Documentation

- **[PROJECT-PLAN.md](PROJECT-PLAN.md)** — Complete project overview
- **[CLAUDE.md](CLAUDE.md)** — How to modify with Claude Code
- **[SERVICES.md](SERVICES.md)** — Products + niche customization
- **[N8N-WEBHOOK-SETUP.md](docs/N8N-WEBHOOK-SETUP.md)** — Webhook configuration
- **[DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md)** — Pre-flight checklist

---

## 🤝 Support

For issues or questions:
1. Check [CLAUDE.md](CLAUDE.md) debugging section
2. Review [PROJECT-PLAN.md](PROJECT-PLAN.md) for context
3. Check [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md) for common issues

---

## 📄 License

MIT — Use freely, modify as needed, no attribution required.

---

**Built with Claude Code | Deployed on Vercel | Powered by n8n**

🚀 Ready to launch!
