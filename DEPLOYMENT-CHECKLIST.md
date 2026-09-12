# Deployment Checklist — Pullupsell Partners Phase 1

**Objective:** Deploy landing page from local → GitHub → Vercel → Live

**Estimated Time:** 30-45 minutes

---

## Pre-Deployment (Local Testing)

### ✅ Code & Content
- [ ] Landing page displays correctly locally
  ```bash
  python -m http.server 8000
  # Visit http://localhost:8000
  ```
- [ ] All sections render properly (hero, niche, quiz, contact, results)
- [ ] Responsive design works on mobile (F12 → toggle device toolbar)
- [ ] No console errors (F12 → Console tab)

### ✅ Quiz Flow
- [ ] Niche selection works (all 8 niches clickable)
- [ ] Quiz questions appear based on selected niche
- [ ] Quiz options are selectable
- [ ] "Next" button enabled after selection
- [ ] Progress bar updates correctly (20% → 40% → 60% → 80%)

### ✅ Form Validation
- [ ] Required fields show error when empty
- [ ] Email validation works (invalid email shows error)
- [ ] Phone validation works (accepts optional phone)
- [ ] Form submits when valid

### ✅ Tracking & Data
- [ ] UTM parameters captured from URL
  ```
  http://localhost:8000?utm_source=linkedin&utm_campaign=test
  ```
- [ ] Check browser DevTools → Application → localStorage for UTM values
- [ ] Referral code generated on results page
- [ ] Referral link copied correctly

### ✅ Design & UX
- [ ] Modern aesthetic matches Dribbble references
- [ ] Colors consistent (blues, purples, clean)
- [ ] Buttons have hover effects
- [ ] Form inputs have focus states
- [ ] No layout shifts or broken elements

### ✅ SEO & Meta Tags
- [ ] Page title correct: "Pullupsell Partners — AI Lead Generation"
- [ ] Meta description set
- [ ] OG image path correct (or placeholder)
- [ ] Canonical tag present

### ✅ Accessibility
- [ ] Keyboard navigation works (Tab through form)
- [ ] Skip to main content link works
- [ ] Color contrast sufficient (WCAG AA standard)
- [ ] Aria labels on form inputs

---

## GitHub Setup

### ✅ Initialize Git (if not already done)

```bash
cd "C:\Users\erice\OneDrive\Documents\2026 Agentic\personal website"

# Check if git already initialized
git status

# If not, initialize
git init

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/your-username/pullupsell-partners.git
```

### ✅ Create .gitignore

```bash
# In pullupsell-partners folder, create .gitignore with:
.env.local
node_modules/
.DS_Store
*.log
```

### ✅ Create Initial Commit

```bash
git add .
git commit -m "feat: Initial Phase 1 MVP landing page with quiz and lead capture"
git branch -M main
git push -u origin main
```

### ✅ Verify on GitHub

- [ ] Go to your GitHub repo
- [ ] Verify all files uploaded
- [ ] Check that `.env.local` is NOT in the repo (should be ignored)
- [ ] Check `.env.example` IS in the repo

---

## Vercel Deployment

### Step 1: Connect GitHub to Vercel

- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub account (or create account)
- [ ] Click "Import Project"
- [ ] Select your GitHub repo (pullupsell-partners)
- [ ] Vercel should auto-detect it's a static site

### Step 2: Configure Vercel Settings

- [ ] **Framework Preset:** Other (static)
- [ ] **Root Directory:** `pullupsell-partners`
- [ ] **Build Command:** (leave empty)
- [ ] **Output Directory:** (leave empty)
- [ ] No environment variables needed for Phase 1 (static site)

### Step 3: Deploy

- [ ] Click "Deploy"
- [ ] Wait for build to complete (should be < 1 minute)
- [ ] You'll get a URL like: `https://pullupsell-partners-abc123.vercel.app`

### Step 4: Test Production Deployment

- [ ] Visit the Vercel URL
- [ ] Test entire quiz flow on production
- [ ] Test form submission
- [ ] Check console (F12) for any errors
- [ ] Test on mobile device

---

## Post-Deployment Testing

### ✅ Quiz Flow (Production)

- [ ] Hero section displays
- [ ] "See Which Solution Fits You" CTA clickable
- [ ] Niche selector shows all options
- [ ] Quiz questions appear
- [ ] Results show recommended product
- [ ] Referral link displays

### ✅ UTM Tracking (Production)

```
Test URL: https://your-vercel-url.com?utm_source=linkedin&utm_medium=dm&utm_campaign=realestate_q1

Result: Check that these values appear in Google Sheets after form submission
```

### ✅ Form Submission (Production)

- [ ] Fill out complete form
- [ ] Submit form
- [ ] Check n8n logs for webhook receipt
- [ ] Check Google Sheets for new row
- [ ] Verify all fields captured correctly

### ✅ Mobile Responsiveness (Production)

- [ ] View on actual mobile phone
- [ ] Test portrait and landscape
- [ ] Buttons are clickable (no tiny targets)
- [ ] Text is readable (no overflow)
- [ ] Quiz flows smoothly

---

## Custom Domain Setup (Optional but Recommended)

### Add Custom Domain to Vercel

- [ ] In Vercel project settings → Domains
- [ ] Click "Add Domain"
- [ ] Enter: `pullupsell.com`
- [ ] Vercel provides DNS records to add to your domain registrar
- [ ] Add DNS records at your domain registrar (GoDaddy, Namecheap, etc.)
- [ ] Wait for DNS propagation (5-30 minutes)
- [ ] Visit `https://pullupsell.com` to verify

---

## Analytics & Monitoring

### ✅ Google Analytics Setup

- [ ] Verify GA4 measurement ID in `.env.local`
- [ ] Submit a test form on production
- [ ] Go to Google Analytics → Real-time
- [ ] Verify page view appears within 30 seconds
- [ ] Verify event tracking works (form submission)

### ✅ Vercel Analytics

- [ ] In Vercel dashboard, view deployment analytics
- [ ] Monitor build time
- [ ] Monitor page load time
- [ ] Check for any error logs

---

## First Lead Collection

### ✅ Send First Tracked Link

Once deployed, test your tracked outreach:

```
Example LinkedIn DM:
"Hey [Name],

I've built something that might help contractors like you get more [relevant-service] leads.

Quick quiz to see if it's a fit: [VERCEL_URL]?utm_source=linkedin&utm_medium=dm&utm_campaign=real_estate_test

Takes 2 minutes. Would love your feedback.

— Eric"
```

### ✅ Monitor First Submission

- [ ] Someone submits the form
- [ ] Check n8n logs (should see webhook data)
- [ ] Check Google Sheets (should see new row)
- [ ] Verify UTM parameters captured
- [ ] Test referral link generation

---

## Troubleshooting Deployment Issues

### Problem: Form submission fails on production

**Solution:**
1. Check browser console (F12) for error
2. Verify webhook URL in script.js is correct
3. Check n8n workflow is activated
4. Check n8n logs for errors
5. Verify CORS is not blocking (shouldn't be on Vercel)

### Problem: Styling looks broken on production

**Solution:**
1. Hard refresh browser (Ctrl+Shift+R)
2. Clear browser cache
3. Check CSS file is being loaded (F12 → Network tab)
4. Verify CSS file path is correct in HTML

### Problem: Pages not loading at all

**Solution:**
1. Check Vercel deployment logs for build errors
2. Verify root directory set correctly in Vercel
3. Verify index.html exists at root level
4. Re-deploy from Vercel dashboard

### Problem: Mobile looks wrong

**Solution:**
1. Verify viewport meta tag in HTML
2. Test responsive CSS media queries locally
3. Clear mobile browser cache
4. Test in multiple browsers/devices

---

## Success Criteria ✅

You've successfully deployed Phase 1 MVP when:

- [ ] Landing page accessible at custom domain (pullupsell.com)
- [ ] Quiz flow works end-to-end
- [ ] Form validation working
- [ ] Data submits to Google Sheets via n8n
- [ ] UTM parameters captured
- [ ] No console errors on production
- [ ] Mobile-responsive
- [ ] Google Analytics tracking page views

---

## Next Steps (Phase 2)

Once Phase 1 is live and getting leads:

1. Collect first 50 leads
2. Monitor completion rate (how many finish quiz?)
3. Monitor conversion rate (how many submit email?)
4. Iterate on copy based on data
5. Add referral rewards system
6. Set up email follow-up sequences

---

## Rollback Plan

If something breaks in production:

```bash
# Revert to previous deployment on Vercel:
# 1. Go to Vercel dashboard
# 2. Find your project
# 3. Click "Deployments"
# 4. Find the last working deployment
# 5. Click the three dots → "Redeploy"

# Or revert GitHub commit:
git revert <commit-hash>
git push origin main
# (Vercel auto-deploys from main)
```

---

## Deployment Complete! 🎉

Your Pullupsell Partners landing page is now live and collecting leads.

**Key Metrics to Track:**
- Visitors per week
- Quiz completion rate (%)
- Form submission rate (%)
- Most common niche
- Most common pain point
- UTM source performance (which channel converts best?)

**Questions?** See CLAUDE.md for debugging and modification instructions.
