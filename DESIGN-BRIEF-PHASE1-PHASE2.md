# Landing Page Design & Build Brief — Two Phases

**Using:** Option D Tagline & Service Description

---

# PHASE 1: DESIGN DIRECTION (Use with `/frontend-design` skill)

**Copy this entire section and send it to Claude Code with `/frontend-design`**

---

## Design Direction Brief for Pullupsell Partners

**Company:**
- Name: Pullupsell Partners
- Tagline: "Stop losing money to competitors. Get AI-powered prospects delivered daily."
- Service: "AI lead qualification and outreach for local service businesses struggling with 80% of time on inconsistent pipeline"
- Audience: Local service business owners (HVAC, roofing, real estate, dental) worried about losing deals and wasting time

**Design Inspiration:**
- https://dribbble.com/shots/26836309-AI-B2B-SaaS-Lead-Generation-Website-Design (AI/B2B SaaS modern aesthetic)
- https://shakuro.com/works/owari (premium, clean design)
- https://dribbble.com/shots/26656350-Ai-Lead-Generation-Website-3D-Animation (3D/animation elements)

**Page Purpose:**
A 5-step interactive quiz that qualifies local service business owners, identifies their specific pain point, recommends the right AI solution, and captures contact info for follow-up.

**Visual Direction (Do NOT build yet, design direction only):**

### Color Palette
- Primary: #0066cc (confident blue, trustworthy for B2B)
- Secondary: #7c3aed (energetic purple, stands out)
- Neutral: #f8fafc (light background), #1a1a1a (dark text)
- Accent: Use blue for primary CTAs, purple for incentive messaging

### Typography & Tone
- Headline font: Bold, modern sans-serif. Make the tagline pop: "Stop losing money" should be the memorable phrase.
- Body font: Clean, readable sans-serif. Conversational tone (direct, urgent, action-oriented).
- Avoid: All-caps labels, excessive decorative elements, "AI-slop" defaults (warm cream backgrounds, rounded cards on everything).

### Layout Concept
- Hero (full-width, strong headline, sense of urgency)
- Progress indicator (visual bar showing quiz progress 20%→40%→60%→80%)
- Step-by-step flow (niche selector → quiz questions → email capture → results)
- Mobile-first responsive design
- Smooth transitions between steps (not jarring)

### Design Principles
1. **Urgency & Action:** "Stop losing money" framing. Design should feel fast, efficient, no wasted space.
2. **Trustworthiness:** Clean, professional. No gimmicks. Blue-focused palette signals stability.
3. **Progress & Achievement:** Progress bar makes users feel like they're moving forward. Incentive badges ("🎁 Save 10+ hours") motivate completion.
4. **Distinction:** Avoid generic B2B SaaS defaults. Make the design specific to the local service business context (direct, no-nonsense).
5. **Dark Mode Support:** Provide both light and dark themes; audience uses phones at various times of day.

### Sections (Design Layout Sketch)
1. **Hero:** Large headline "Stop losing money to competitors," subheading on value prop, CTA button "See Which Solution Fits You"
2. **Niche Selector:** 8 industry icons (HVAC, Roofing, Plumbing, Real Estate, Dental, Pest Control, Landscaping, Other). Selected state should show with blue highlight.
3. **Quiz:** Large question text, 4 radio button options, "Next" CTA. Progress bar updates after each question.
4. **Contact Capture:** Email, name, phone fields. Incentive message above the form. "Unlock My Report" CTA.
5. **Results:** Recommended product (name, description, pricing), two CTAs ("Book Consultation" + "Request Demo"), referral section below.

### Motion & Interaction (Minimal, Intentional)
- Page transitions: Smooth fade-in as each step loads (not slide-up on every element).
- Progress bar: Smooth fill animation when moving to next step.
- Hover states: Subtle color shift on buttons and niche icons (show the interaction without distraction).
- Avoid: Scattered animations, parallax, auto-playing video, hover transitions on every card.

---

## Output: Design Plan (What you will get from `/frontend-design`)
You will receive a **design plan document** (not code yet) that includes:
- Color token system
- Typography rules
- Layout wireframe
- Key principles for this specific brief

**Next step:** Use that plan as the foundation for Phase 2 (building the actual HTML/CSS/JS).

---

---

# PHASE 2: IMPLEMENTATION (After Phase 1 design is approved)

**Use this section AFTER you have the design plan from Phase 1.**

---

## Implementation Brief for Pullupsell Partners Landing Page

**Based on:** Phase 1 design direction from `/frontend-design`

**Goal:** Build a fully functional, interactive 5-step landing page in vanilla HTML/CSS/JavaScript.

**Deliverables:**
- `index.html` (semantic markup, all 5 steps)
- `style.css` (responsive design, light + dark mode, animations)
- `script.js` (quiz logic, form validation, UTM tracking, referral code generation)

### Step 1: Hero Section
- Headline: "Stop losing money to competitors. Get AI-powered prospects delivered daily."
- Subheading: "Take a quick 2-minute quiz to find out which AI solution fits your business."
- CTA Button: "See Which Solution Fits You"
- Incentive badge: "🎁 Discover how to save 10+ hours per week"

### Step 2: Niche Selector
- Text: "What industry are you in?"
- 8 options: HVAC, Roofing, Plumbing, Real Estate, Dental, Pest Control, Landscaping, Other
- Display as icon grid (emoji or simple icons)
- Incentive: "📊 Quick! Answer 3 questions to unlock your personalized report"
- Store selected niche in state

### Step 3-5: Quiz (3 Questions, dynamically loaded by niche)
- Progress bar updates to 40%, 60%, 80%
- Each step shows new question based on selected niche
- Incentive before final question: "⏱️ Almost there! 1 more question to get your custom ROI calculation"
- Radio button options (4 choices per question)
- Store quiz answers in state

### Step 6: Contact Capture
- Progress bar: 80%
- Fields: Name*, Email*, Phone (optional)
- Incentive: "🎉 Enter your info to get personalized guide + free ROI report (30 seconds)"
- Form validation (required: name, valid email)
- CTA: "Unlock My Report →"
- On submit: store data, generate unique referral code, move to results

### Step 7: Results Page
- Progress bar: 100% (complete)
- Greeting: "Here's what we found, [Name]"
- Product recommendation (based on niche + quiz answers):
  - **Photo Quote Engine** — for contractors, roofers (pain: unqualified photo inquiries)
  - **Repeat Booking Engine** — for HVAC, dental, pest control (pain: no repeat customers)
  - **Local Prospect Hunter** — for B2B service providers (pain: outdated lead lists)
- Product card shows: name, tagline, description, setup cost, monthly cost
- CTAs: "Book a Consultation" (links to Calendly placeholder) + "Request a Demo" (mailto link)
- Referral section: "Know someone? Share and earn $50"
  - Copy referral link button
  - Display unique referral code
  - Incentive: "✨ Your friend books a call → You earn $50"

### Technical Requirements
- **No build step:** Pure HTML5, CSS3, vanilla JavaScript
- **Responsive:** Mobile-first, works on phones, tablets, desktop
- **Dark mode:** Toggle or auto-detect based on system preference
- **UTM tracking:** Read and store query parameters (utm_source, utm_medium, utm_campaign, utm_content, ref)
- **localStorage:** Remember user progress if they close and reopen
- **Accessibility:** WCAG AA (keyboard nav, focus states, alt text, semantic HTML)
- **Performance:** Fast load time, smooth animations (no jank)

### Form Submission
- Validate email format and required fields
- Collect: name, email, phone, niche, quiz_answers, utm_params, referral_code
- Store in state (no backend call for Phase 1 MVP)
- Display referral link and code on results page

### Referral Code Generation
- Format: `[email_prefix]_[4_random_digits]` (e.g., eric_4782)
- Display: "Your referral link: pullupsell.com?ref=eric_4782"
- Copy-to-clipboard button

### Color & Style (from Phase 1 design plan)
- Apply exact color tokens from design plan
- Follow typography rules from design plan
- Use layout wireframe from design plan
- Add smooth transitions (fade-in for steps, progress bar animation)
- Dark mode: toggle or auto based on `prefers-color-scheme`

### Folder Structure
```
landing-page/
├── index.html
├── style.css
├── script.js
└── assets/ (if any)
```

---

## How to Execute Both Phases

**Step 1: Design Phase (5-10 minutes)**
```
/frontend-design

[Paste the PHASE 1 section above]
```

Claude will output a design plan (colors, typography, layout sketch, principles).

**Step 2: Review & Confirm**
- Read the design plan
- Make sure you agree with the aesthetic direction
- Request tweaks if needed ("make it more bold," "less purple," etc.)

**Step 3: Build Phase (30-45 minutes)**
```
[Request to Claude:]
Build the landing page HTML/CSS/JS based on this design plan:
[Paste design plan from Phase 1]
[Paste PHASE 2 implementation brief above]
```

Claude will output three files: `index.html`, `style.css`, `script.js`.

**Step 4: Test Locally**
```
python -m http.server 8000
# Visit http://localhost:8000
```

Test all 5 steps, form validation, referral code generation, dark mode.

---

## Success Criteria
- ✅ All 5 steps flow smoothly
- ✅ Progress bar updates correctly
- ✅ Form validation works
- ✅ Referral code generates and copies to clipboard
- ✅ Responsive on mobile/tablet/desktop
- ✅ Dark mode toggles
- ✅ No console errors
- ✅ Page loads fast

---

## Next: Deployment
Once tested locally, you can:
1. Push to GitHub
2. Deploy to Vercel
3. Connect custom domain (pullupsell.com)
4. Set up form submission to n8n → Google Sheets
