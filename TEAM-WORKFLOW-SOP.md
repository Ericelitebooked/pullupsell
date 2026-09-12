# Team Workflow SOP — Staging → Production

**Purpose:** Ensure safe, tested deployments with rollback capabilities for the Pullupsell landing page.

---

## 🎯 Overview

```
Local Development → Staging Branch → Team Testing → Main Branch → Production
                    (Pre-prod)      (Review)        (Auto-deploy)
```

**Environments:**
- **Production:** https://pullupsell-landingpagefirst.vercel.app/ (LIVE)
- **Staging:** https://pullupsell-landingpagefirst-staging-xyz.vercel.app/ (TEST)
- **Local:** `http://localhost:8000` (Your computer)

---

## 📋 Step-by-Step Workflow

### Phase 1: Local Development (Your Machine)

```bash
# 1. Pull latest code
git pull origin main

# 2. Create feature branch from main
git checkout -b feature/your-feature-name
# Examples: feature/update-hero, feature/new-quiz-questions, feature/fix-mobile

# 3. Make your changes
# Edit files: index.html, style.css, script.js

# 4. Test locally
python -m http.server 8000
# Visit http://localhost:8000 and test thoroughly

# 5. Commit changes
git add .
git commit -m "feat: describe what you changed"

# 6. Push to GitHub
git push origin feature/your-feature-name
```

---

### Phase 2: Team Testing in Staging (Pre-Production)

```bash
# 1. Create Pull Request (PR) on GitHub
# - Go to github.com/Ericelitebooked/pullupsell
# - Click "New Pull Request"
# - Base: main ← Compare: feature/your-feature-name
# - Add description of changes
# - Click "Create Pull Request"

# 2. Vercel auto-creates preview URL
# - GitHub shows: "1 check in progress (Vercel)"
# - Wait 2-3 minutes for build to complete
# - Click "Details" to see preview: pullupsell-landingpagefirst-staging-abc123.vercel.app

# 3. Team tests on staging URL
# - Test full quiz flow
# - Test on mobile (use DevTools)
# - Check dark mode toggle
# - Verify form validation
# - Test referral code generation
# - Use DevTools (F12) to check for console errors

# 4. Code Review
# - Team members review code on GitHub PR
# - Leave comments if issues found
# - Request changes OR approve

# 5. If changes needed:
#    - Make edits locally on your feature branch
#    - Commit and push again (preview auto-updates)
#    - Repeat testing and review

# 6. If approved:
#    - Click "Merge pull request" on GitHub
#    - Choose "Squash and merge" or "Create a merge commit"
#    - Delete the feature branch (optional)
```

---

### Phase 3: Auto-Deploy to Production

```bash
# 1. After merge, Vercel auto-deploys to production
#    - Check: https://pullupsell-landingpagefirst.vercel.app/
#    - Wait 2-3 minutes for build to complete
#    - Page should show your changes

# 2. Verify production deployment
#    - Test the same flow as staging
#    - Check mobile responsiveness
#    - Monitor Google Analytics for errors (F12 Console)

# 3. Monitor for issues
#    - Check Vercel dashboard for build errors
#    - Watch GitHub for any failed deployment notifications
```

---

## 🧪 Testing Checklist (Before Approving PR)

Use this checklist on the **Staging URL** before merging to production:

- [ ] **Hero Section** - Headline and CTA visible
- [ ] **Niche Selector** - All 8 options clickable, highlight appears on select
- [ ] **Quiz Questions** - All 3 questions load, options selectable
- [ ] **Contact Form** - Name/email/phone fields work, validation triggers for empty fields
- [ ] **Results Page** - Product recommendation displays with correct pricing
- [ ] **Referral Code** - Generates in format `email_prefix_XXXX`, copy button works
- [ ] **Progress Bar** - Fills correctly (0% → 20% → 40% → 60% → 80% → 100%)
- [ ] **Dark Mode** - Toggle button works, theme persists on page reload
- [ ] **Mobile Responsive** - No layout breaks on phone (DevTools toggle device toolbar)
- [ ] **No Console Errors** - Press F12, check Console tab for red errors
- [ ] **Links Work** - All CTAs, referral links, external links functional

---

## 🔄 Rollback Procedures (If Production Breaks)

### Quick Rollback (Last 1-2 Deployments)

```bash
# Option 1: Via Vercel Dashboard (Easiest)
# 1. Go to vercel.com → Your Project → Deployments
# 2. Find the last WORKING deployment (before the broken one)
# 3. Click the three dots (⋮) → "Redeploy"
# 4. Wait 2-3 minutes
# 5. Production is now restored

# Option 2: Via Git
# 1. Find the last good commit
git log --oneline
# Example output:
# abc1234 feat: update hero
# def5678 fix: typo in quiz
# ghi9012 feat: dark mode

# 2. Revert to that commit
git revert def5678  # (replace with actual commit hash)

# 3. Push to main
git push origin main

# 4. Vercel auto-redeploys (2-3 minutes)
```

### Full Backup/Recovery

**Vercel keeps deployment history for 60 days:**

1. Go to **vercel.com** → Your Project → **Deployments**
2. Scroll through past deployments
3. Find the date/time you want to restore
4. Click three dots (⋮) → **Redeploy**
5. Production restored to that version

---

## 📅 Git Branch Strategy

```
main
├─ production (automatic Vercel deployment)
├─ feature/update-hero
├─ feature/fix-mobile
└─ feature/new-quiz
```

**Branch Naming Convention:**
- `feature/` = new feature (feature/dark-mode-toggle)
- `fix/` = bug fix (fix/mobile-layout)
- `refactor/` = code cleanup (refactor/css-organization)
- `docs/` = documentation (docs/sop-update)

---

## 🚨 Emergency Procedures

### Production is Down (Not Loading at All)

1. **Check Vercel Status:**
   - Go to vercel.com → Your Project
   - Look for build errors or red X on latest deployment
   
2. **Check GitHub:**
   - Go to github.com → Your Repo
   - Did someone push breaking code?

3. **Quick Fix:**
   - Go to Vercel Deployments
   - Find last working deployment
   - Click "Redeploy"
   - While deploying, notify team on Slack

4. **Post-Mortem:**
   - Identify what broke
   - Create a bug fix PR
   - Test thoroughly in staging
   - Merge and deploy

---

## 📝 Team Communication

### Before Starting Work
- **Slack message:** "Working on [feature name] - staging URL will be ready in 30 min"

### When Staging is Ready
- **Post PR link:** "Staging ready for testing: [vercel preview URL]"
- **Testing checklist:** "Please test hero, quiz, mobile responsiveness"

### When Merging to Production
- **Notify team:** "Deploying [feature name] to production - live in 3 min"

### If Issues Arise
- **Immediate action:** "Rolling back to [timestamp] - investigating issue"
- **Post-recovery:** "Issue resolved, new test plan in [PR link]"

---

## 🔐 Backup Strategy

### What's Backed Up Automatically

1. **GitHub Repository**
   - All code commits stored permanently
   - Every commit is recoverable
   - Go back to any point in time

2. **Vercel Deployments**
   - Last 60 days of deployments
   - One-click redeploy to any previous version
   - No manual backup needed

### What You Should Backup Manually (Optional)

```bash
# Export git history to a file (annually or before major changes)
git bundle create pullupsell-backup-2026-09-11.bundle --all

# This creates a portable backup you can restore on any machine:
git clone pullupsell-backup-2026-09-11.bundle <new-folder>
```

---

## 📊 Deployment Status

Check deployment health anytime:

1. **Vercel Dashboard:** vercel.com/dashboard
2. **GitHub Actions:** github.com/Ericelitebooked/pullupsell/actions
3. **Live Site:** https://pullupsell-landingpagefirst.vercel.app/

---

## ✅ Quick Reference

| Task | Command | Where |
|------|---------|-------|
| Start local dev | `python -m http.server 8000` | Your terminal |
| Create feature branch | `git checkout -b feature/name` | Your terminal |
| Push to staging | `git push origin feature/name` | Your terminal |
| Create PR | Click "New PR" on GitHub | github.com |
| Merge to production | Click "Merge" on GitHub | github.com PR |
| Check production | Visit https://pullupsell-landingpagefirst.vercel.app/ | Browser |
| Rollback | Vercel Dashboard → Deployments → Redeploy | vercel.com |

---

## 🎓 Training for New Team Members

**Onboarding Checklist:**
- [ ] Clone GitHub repo: `git clone https://github.com/Ericelitebooked/pullupsell.git`
- [ ] Read this SOP
- [ ] Make a test change on feature branch
- [ ] Create a PR and see staging preview
- [ ] Request code review from another team member
- [ ] Merge and watch production deploy
- [ ] Complete! You're ready for real changes

---

**Questions?** Reference this SOP or ask the team lead.

**Last Updated:** 2026-09-11
