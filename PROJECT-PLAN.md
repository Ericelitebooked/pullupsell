# Pullupsell Partners — Complete Project Plan & Progress

**Last Updated:** 2026-09-10  
**Status:** 🟡 Planning Phase (Ready to Build Phase 1)  
**Project Owner:** Eric (Founder & CEO, eric.b@pullupsell.com)

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Strategic Goals](#strategic-goals)
3. [Core Architecture](#core-architecture)
4. [Technology Stack](#technology-stack)
5. [Service Offerings](#service-offerings)
6. [Landing Page Design](#landing-page-design)
7. [Lead Tracking & Database](#lead-tracking--database)
8. [Implementation Phases](#implementation-phases)
9. [Project Structure](#project-structure)
10. [Decisions Made](#decisions-made)
11. [Next Steps](#next-steps)

---

## Project Overview

**Company:** Pullupsell Partners  
**Type:** Lead generation & sales enablement agency  
**Tagline:** "Ditch referrals, build lead pool with AI"  
**Target Market:** Local service providers (HVAC, dental, pest control, roofing, real estate, etc.)  
**Primary Goal:** Generate leads and convert to paying clients

### What We're Building

A **single-page landing page + interactive quiz** that:
- Qualifies prospects based on their industry and pain points
- Captures contact info (email, phone, name)
- Shows personalized product recommendations + pricing
- Tracks every lead source (email, LinkedIn, Instagram, YouTube, referrals)
- Generates unique referral codes for viral growth
- Prepares leads for sales conversation

---

## Strategic Goals

### Business Goals
1. ✅ **Lead generation** — Attract contractors, service providers, and businesses
2. ✅ **Qualification** — Self-qualify leads by industry and pain point
3. ✅ **Conversion** — Guide leads to book consultations or request demos
4. ✅ **Attribution** — Know exactly which channel brought each lead (ROI tracking)
5. ✅ **Viral growth** — Referral system to amplify reach organically

### Technical Goals
1. ✅ **Fast deployment** — Launch in 1 week
2. ✅ **Zero dependencies** — Vanilla HTML/CSS/JS (no build step)
3. ✅ **Scalable database** — Google Sheets → Airtable → Supabase
4. ✅ **Reusable templates** — Design + service offerings adaptable to any niche
5. ✅ **Easy updates** — Claude Code can modify + redeploy instantly

---

## Core Architecture

### High-Level Flow

```
Visitor Arrives (via UTM link)
    ↓
Landing Page (Hero + Value Prop)
    ↓
Step 1: Select Niche (Salon, Clinic, HVAC, Roofing, Real Estate, etc.)
    ↓
Step 2-4: Answer 3 Personalized Quiz Questions
    ↓
Step 5: Capture Email + Name + Phone
    ↓
[Data sent to n8n webhook → Google Sheets]
    ↓
Show Personalized Results + ROI Calculation
    ↓
Display Recommended Product + Pricing
    ↓
CTA: Book Consultation / Request Demo
    ↓
Show Referral Link ("Share and earn $50")
```

### Page Structure

| Section | Purpose | Data Captured |
|---------|---------|---------------|
| **Hero** | Introduce Pullupsell | None |
| **Niche Selector** | Qualify by industry | `niche` |
| **Quiz (3 questions)** | Identify pain point | `quiz_q1`, `quiz_q2`, `quiz_q3` |
| **Contact Capture** | Get contact info | `email`, `name`, `phone` |
| **Results** | Show personalized product | None |
| **Referral CTA** | Enable viral growth | `referral_code` (generated) |

---

## Technology Stack

### Frontend
- **HTML5** — Vanilla, no framework
- **CSS3** — Styled components, responsive mobile-first
- **JavaScript** — Vanilla JS (localStorage, fetch API, URL params)
- **No build step** — Deploy raw files to Vercel

### Backend & Data
- **Form Submission** → n8n webhook
- **Database** → Google Sheets (Phase 1) → Airtable (Phase 2)
- **Email/SMS** → Sendgrid, Mailgun, or Resend (Phase 2)
- **Hosting** → Vercel (static, zero-cost)

### Design Reference
- **Inspiration:** 
  - https://dribbble.com/shots/26836309-AI-B2B-SaaS-Lead-Generation-Website-Design
  - https://shakuro.com/works/owari
  - https://dribbble.com/shots/26656350-Ai-Lead-Generation-Website-3D-Animation
- **Aesthetic:** Modern tech, B2B SaaS, professional, engaging animations
- **Brand Colors:** Modern tech vibes (blues, purples, clean) — to be chosen during design phase

### API Placeholders (.env)

```
REACT_APP_GA_ID=G-XXXXXXXXXX              # Google Analytics (already integrated)
REACT_APP_CONTACT_API_URL=                # Contact form webhook
REACT_APP_EMAIL_SERVICE_KEY=              # SendGrid/Mailgun key
REACT_APP_CALENDLY_ID=                    # Booking link
REACT_APP_STRIPE_PUBLIC_KEY=              # Payments (if needed)
REACT_APP_SLACK_WEBHOOK=                  # Lead notifications
N8N_WEBHOOK_URL=                          # n8n form submission webhook
```

---

## Service Offerings

### The Three Core Products

Pullupsell Partners offers three AI-powered solutions for local service businesses:

#### 1. **Photo Quote Engine**
- **Outcome:** More qualified quote requests from visitors who aren't ready to call
- **Buyer:** Contractors, roofers, paving, signage, fencing, painting
- **Promise:** "Visitors upload photos → app creates estimate request → team gets structured leads"
- **Pricing:** $750-$2,000 setup + $150-$500/month

#### 2. **Repeat Booking Engine**
- **Outcome:** More repeat customers without manual follow-up
- **Buyer:** HVAC, dental, pest control, grooming, med spas, maintenance
- **Promise:** "Past customers flagged when due → team gets ready-to-send reminders"
- **Pricing:** $500-$1,500 setup + $100-$300/month

#### 3. **Local Prospect Hunter**
- **Outcome:** Fresh list of scored local prospects with custom outreach
- **Buyer:** B2B local service providers
- **Promise:** "Pick service area + customer type → app finds likely buyers + drafts outreach"
- **Pricing:** $1,000-$3,000 setup + $300-$1,000/month

### Add-On: AI Voice Agent
- **Purpose:** Support conversion, avoid missing calls, customer support
- **Benefit:** Increases lead capture rates
- **Status:** Optional upsell after initial product selection

---

## Landing Page Design

### Design Approach
- **Method:** `/frontend-design` skill + Dribbble inspiration
- **References:** Modern AI/B2B SaaS landing pages (see links above)
- **Interactive Elements:** Smooth quiz flow, progress indicators, animated results
- **Mobile-First:** Responsive design for all devices
- **Conversions:** Clear CTAs (Book Call, Request Demo, Share Referral)

### Content Strategy
- **Hero:** "Ditch referrals. Build lead pools with AI."
- **Value Props:** Quick self-assessment → personalized product match → immediate ROI
- **Social Proof:** (To be added after first 10 conversions)
- **Fear of Missing Out:** "See how much revenue you're leaving on the table"

---

## Lead Tracking & Database

### UTM Parameter Strategy

Every outreach link includes tracking parameters:

```
Base: yourdomain.com/start

Cold Email:
yourdomain.com/start?utm_source=email&utm_medium=cold&utm_campaign=realestate_q1&utm_content=email1

LinkedIn DM:
yourdomain.com/start?utm_source=linkedin&utm_medium=dm&utm_campaign=realestate_q1&utm_content=intro_message

Instagram DM:
yourdomain.com/start?utm_source=instagram&utm_medium=dm&utm_campaign=salon_outreach&utm_content=story_reply

Referral:
yourdomain.com/start?ref=john123
```

### Database Schema

| Field | Type | Purpose |
|-------|------|---------|
| `email` | Text | Primary identifier |
| `name` | Text | Personalization |
| `phone` | Text | SMS follow-up |
| `niche` | Dropdown | Segmentation |
| `quiz_q1`, `quiz_q2`, `quiz_q3` | Text | Qualification |
| `utm_source` | Text | Traffic source (linkedin, email, instagram, youtube, referral, direct) |
| `utm_medium` | Text | Outreach type (dm, cold, comment, ad, none) |
| `utm_campaign` | Text | Campaign name (e.g., realestate_q1) |
| `utm_content` | Text | Which message (email1, message1, followup2) |
| `ref` | Text | Referral code if referred |
| `referral_code` | Text | This user's unique referral code |
| `referred_by` | Text | Email of person who referred them |
| `first_visit` | DateTime | When they first visited |
| `revisit_count` | Number | How many times they returned |
| `lead_status` | Dropdown | New, Contacted, Booked, Closed |
| `reward_status` | Dropdown | None, Pending, Earned, Claimed |

### Revisit Detection

- **Method:** Store email in localStorage on first submission
- **Flow:** User returns → cookie/localStorage checked → "Welcome back, [Name]" shown
- **Benefit:** Recognize repeat visitors, avoid duplicate captures

### Referral System

- **Referral Code Generation:** `email_prefix + random_4_digits` (e.g., eric_1234)
- **Referral Link:** `yourdomain.com/start?ref=eric_1234`
- **Tracking:** When new lead submits with `ref=eric_1234`, log original referrer
- **Rewards:** When referred lead books call, send $50 gift card to referrer

---

## Implementation Phases

### Phase 1: MVP — Core Landing Page + Quiz (3 days)
**Status:** 🟡 Ready to start

**Deliverables:**
- ✅ Landing page with quiz (5 steps)
- ✅ Email + phone capture
- ✅ UTM parameter reading & tracking
- ✅ Form submission to n8n webhook
- ✅ Google Sheets database connection
- ✅ localStorage for revisit detection
- ✅ Basic "Get your guide" CTA
- ✅ .env.example file with placeholders

**Excluded (for Phase 2):**
- ❌ Referral system
- ❌ Reward tiers
- ❌ AI cold call follow-up
- ❌ Email/SMS automation

**Why Phase 1 MVP?**
- Launch in 3 days vs 7 days
- Test what works before building complexity
- Iterate based on real data
- Reduce maintenance burden

---

### Phase 2: Referral System (After 50 leads)
**Status:** ⏳ Planned

**Deliverables:**
- Referral code generation per user
- Referral link display on results page
- Track referral conversions in database
- Simple reward email when threshold hit ($50 per booked call)

---

### Phase 3: Scaling & Automation (After 500 leads)
**Status:** ⏳ Planned

**Deliverables:**
- Email/SMS automation (Sendgrid/Mailgun)
- Referral dashboard (Base44 or Softr)
- Automated reward delivery
- AI voice call follow-up (optional)
- Advanced analytics

---

## Project Structure

### Folder Layout

```
personal-website/  (Central Hub)
├── assets/                       # Shared images, favicons
├── shared-templates/             # Reusable templates for all projects
│   ├── CLAUDE-TEMPLATE.md       # Template for Claude Code navigation
│   ├── SERVICES-TEMPLATE.md     # Adaptable service offerings
│   ├── ENV-TEMPLATE.md          # .env placeholder template
│   └── README.md                # Shared resources guide
│
├── pullupsell-partners/          # Main project folder
│   ├── README.md                # Project overview
│   ├── CLAUDE.md                # Instructions for Claude Code
│   ├── SERVICES.md              # Pullupsell-specific offerings (adapted from template)
│   ├── PROJECT-PLAN.md          # This file
│   ├── landing-page/
│   │   ├── index.html           # Main page
│   │   ├── style.css            # Styles
│   │   ├── script.js            # Quiz logic + tracking
│   │   └── assets/
│   │       ├── favicon.ico
│   │       ├── logo.png
│   │       └── profile.jpg
│   ├── .env.example             # API placeholders
│   ├── .env.local               # Actual keys (gitignored)
│   ├── vercel.json              # Deployment config
│   ├── robots.txt               # SEO
│   ├── 404.html                 # Error page
│   └── n8n-webhook-setup.md     # Instructions for connecting n8n
│
└── (future projects same structure)
```

---

## Decisions Made

### Design Approach
- ✅ **Decision:** Use `/frontend-design` skill with Dribbble inspiration
- ✅ **Reason:** Produces non-AI-looking, professional designs
- ✅ **Alternative Considered:** Pre-built templates (rejected — less customizable)

### Technology Stack
- ✅ **Decision:** Vanilla HTML/CSS/JS (no build step)
- ✅ **Reason:** Fast deployment, zero dependencies, easy to maintain
- ✅ **Alternative Considered:** React (rejected — overkill for static page)

### Database
- ✅ **Decision:** Google Sheets (Phase 1) → Airtable (Phase 2)
- ✅ **Reason:** Free, easy to set up, sufficient for MVP, scales naturally
- ✅ **Alternative Considered:** Supabase (too complex for MVP)

### Phasing Strategy
- ✅ **Decision:** Build Phase 1 MVP (3 days), add Phase 2-3 after validation
- ✅ **Reason:** Launch fast, test assumptions, iterate based on real data
- ✅ **Alternative Considered:** Build full system now (rejected — slower to market, over-engineered)

### Lead Capture Timing
- ✅ **Decision:** Email + phone AFTER quiz (Step 5 of 5)
- ✅ **Reason:** Higher completion rates, data from quiz helps personalization
- ✅ **Alternative Considered:** Email before quiz (rejected — lower completion)

### Referral System Timing
- ✅ **Decision:** Add in Phase 2 after validation
- ✅ **Reason:** Focus on core conversion first, add viral loop after proven model
- ✅ **Alternative Considered:** Include in Phase 1 (rejected — scope creep)

### SEO Approach
- ✅ **Decision:** Focus on paid traffic initially, skip organic SEO optimization
- ✅ **Reason:** Direct outreach channels (email, LinkedIn) bring traffic, organic is 6+ month play
- ✅ **Include anyway:** Basic meta tags, schema, robots.txt for future growth

### Hosting
- ✅ **Decision:** Vercel (static hosting)
- ✅ **Reason:** Free, fast, integrates with GitHub, automatic deploys
- ✅ **Alternative Considered:** Netlify (same capability, Vercel is more optimized for Next.js later)

---

## Decisions Pending

| Decision | Options | Impact | Timeline |
|----------|---------|--------|----------|
| Brand colors | Tech blues/purples vs other | Design | Before Phase 1 |
| Reward amount | $50 vs $25 vs $100 | Referral velocity | Phase 2 |
| Email service | SendGrid vs Mailgun vs Resend | Automation costs | Phase 2 |
| CRM integration | HubSpot vs GoHighLevel vs custom | Lead nurturing | Phase 3 |

---

## Next Steps

### Immediate (This Session)
- [ ] Confirm this project plan (structure + phases + decisions)
- [ ] Confirm folder structure (use personal-website as hub, create pullupsell-partners subfolder)
- [ ] Confirm Phase 1 scope (MVP only, no referrals yet)

### Phase 1 — Implementation (3 days)
1. [ ] Create `.env.example` with all API placeholders
2. [ ] Create `SERVICES.md` (adaptable service offerings)
3. [ ] Create `CLAUDE.md` (Claude Code navigation guide)
4. [ ] Use `/frontend-design` skill to design landing page (with Dribbble references)
5. [ ] Build HTML/CSS/JS landing page with quiz
6. [ ] Add UTM parameter tracking
7. [ ] Add localStorage for revisit detection
8. [ ] Connect form submission to n8n webhook
9. [ ] Add SEO essentials (JSON-LD, meta tags, robots.txt, 404.html)
10. [ ] Test on mobile
11. [ ] Deploy to GitHub + Vercel

### Phase 1 — Validation (1 week)
- [ ] Send tracked links to 20 prospects (mix of channels)
- [ ] Review Google Sheets data for drop-off points
- [ ] Test contact form (submit → n8n → Sheets)
- [ ] Iterate based on completion rates

### Phase 2 — Referrals (After 50 leads)
- [ ] Add referral code generation
- [ ] Add referral link display
- [ ] Set up referral tracking in Sheets
- [ ] Send reward emails manually first

### Phase 3 — Scaling (After 500 leads)
- [ ] Automate email/SMS follow-up
- [ ] Build referral dashboard
- [ ] Add AI voice call follow-up

---

## Key Contacts & Links

| Item | Value |
|------|-------|
| **Project Owner** | Eric (Founder & CEO) |
| **Email** | eric.b@pullupsell.com |
| **Website** | pullupsell.com |
| **Phone** | Placeholder (to add in .env) |
| **Design References** | Dribbble AI/B2B SaaS pages |
| **Hosting** | Vercel |
| **Database** | Google Sheets (Phase 1) |
| **Webhook** | n8n (Phase 1) |

---

## Appendix: Questions for Claude Code

When continuing this project, ask Claude Code:

1. "What's the current status of the project?"
2. "What's in the pullupsell-partners folder?"
3. "Has the landing page been designed yet?"
4. "Have we collected any lead data?"
5. "What phase are we in?"
6. "What's the next immediate action?"

---

## Version History

| Date | Update | Status |
|------|--------|--------|
| 2026-09-10 | Initial project plan created | 🟡 Planning |
| TBD | Phase 1 implementation starts | ⏳ Pending |
| TBD | First landing page deployed | ⏳ Pending |
| TBD | First 50 leads captured | ⏳ Pending |
| TBD | Phase 2 referral system added | ⏳ Pending |

---

**Status:** Ready to proceed with Phase 1 ✅  
**Next Action:** Confirm plan → Create `.env` → Design landing page → Build HTML/CSS/JS  
**Estimated Time:** 3-4 days for Phase 1 MVP
