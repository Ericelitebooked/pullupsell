# n8n Webhook Setup Guide

**Purpose:** Connect your landing page form to n8n → Google Sheets database

**Time to complete:** 10-15 minutes

---

## Step 1: Create n8n Account

1. Go to [n8n.io](https://n8n.io)
2. Click "Sign up"
3. Create account with email
4. Verify email
5. Log in to dashboard

---

## Step 2: Create a New Workflow

1. Click "Workflows" → "Create workflow"
2. Give it a name: `pullupsell-lead-capture`
3. Click "Create"

---

## Step 3: Add HTTP Webhook Trigger

1. Click "+" to add a node
2. Search for "Webhook"
3. Select "HTTP Webhook"
4. Configure:
   - **HTTP Method:** POST
   - **Path:** `pullupsell-leads`
   - Leave other settings default
5. Click "Test" to enable webhook
6. **Copy the webhook URL** (looks like: `https://n8n.yourinstance.com/webhook/b1c2d3e4f5`)

---

## Step 4: Add Google Sheets Node

1. Click "+" after the Webhook node
2. Search for "Google Sheets"
3. Select "Google Sheets"
4. Authenticate with your Google account
   - Click "Connect Google Account"
   - Authorize n8n to access your sheets
5. Configure:
   - **Operation:** "Append"
   - **Spreadsheet:** Create a new sheet called `pullupsell-leads`
   - **Sheet:** "Sheet1"
6. In the **Columns** section, map these fields:

| Column | Source | Map To |
|--------|--------|--------|
| email | `{{ $json.email }}` | A |
| name | `{{ $json.name }}` | B |
| phone | `{{ $json.phone }}` | C |
| niche | `{{ $json.niche }}` | D |
| quiz_q1 | `{{ $json.quiz_answers[0] }}` | E |
| quiz_q2 | `{{ $json.quiz_answers[1] }}` | F |
| quiz_q3 | `{{ $json.quiz_answers[2] }}` | G |
| utm_source | `{{ $json.utm_source }}` | H |
| utm_medium | `{{ $json.utm_medium }}` | I |
| utm_campaign | `{{ $json.utm_campaign }}` | J |
| utm_content | `{{ $json.utm_content }}` | K |
| ref | `{{ $json.ref }}` | L |
| timestamp | `{{ $json.timestamp }}` | M |
| lead_status | "new" | N |

7. Click "Execute Workflow"

---

## Step 5: Save & Activate Workflow

1. Click "Save" (top right)
2. Click "Activate" toggle to enable the workflow
3. You should see a green checkmark

---

## Step 6: Update Your Landing Page .env

1. Copy the webhook URL from Step 3
2. Open `landing-page/script.js`
3. Find this line (around line 450):
   ```javascript
   const webhookUrl = 'https://n8n.yourinstance.com/webhook/pullupsell-leads';
   ```
4. Replace with your actual webhook URL

---

## Step 7: Test the Webhook

### Test via n8n:

1. In your n8n workflow, click "Test workflow"
2. Go back to your webhook node
3. You should see "Waiting for webhook call..."
4. Open your landing page in a browser
5. Fill out and submit the form
6. Check n8n for the incoming data
7. Check Google Sheets to verify the row was added

### Test via Browser:

1. Open `http://localhost:8000` (if running locally)
2. Fill out the quiz completely
3. Submit the form
4. Check your Google Sheets for the new row

---

## Step 8: Set Up Google Sheets Headers

Create headers in your Google Sheet:

```
A: email
B: name
C: phone
D: niche
E: quiz_q1
F: quiz_q2
G: quiz_q3
H: utm_source
I: utm_medium
J: utm_campaign
K: utm_content
L: ref
M: timestamp
N: lead_status
```

---

## Troubleshooting

### Webhook not receiving data

**Problem:** Form submits but no data in Google Sheets

**Solution:**
1. Check browser console (F12) for errors
2. Verify webhook URL in script.js matches n8n webhook
3. Ensure n8n workflow is activated (green toggle)
4. Check n8n workflow logs for errors

### Google Sheets not updating

**Problem:** Webhook receives data but sheet stays empty

**Solution:**
1. Verify Google account authentication
2. Check that spreadsheet exists and is accessible
3. Verify column mappings in n8n node
4. Check n8n execution logs for errors

### CORS errors in console

**Problem:** Cross-origin request blocked

**Solution:**
1. This is normal for localhost testing
2. CORS won't be an issue in production (Vercel)
3. For local testing, use a Chrome extension to disable CORS

---

## Phase 2: Adding Email Notifications

Once Phase 1 is working, add email confirmations:

1. After Google Sheets node, click "+"
2. Add "Send Email" node
3. Configure:
   - **From Email:** your SendGrid verified email
   - **To Email:** `{{ $json.email }}`
   - **Subject:** "Your Personalized Report"
   - **Body:** HTML email with lead magnet
4. Save and test

---

## Phase 2: Adding Slack Notifications

Alert yourself when new leads come in:

1. After Google Sheets node, click "+"
2. Add "Slack" node
3. Authenticate with your Slack workspace
4. Configure:
   - **Message:** Format lead data
   - **Channel:** #sales or #leads
5. Send message on new lead

---

## Reference: Webhook Payload Structure

Your landing page sends this JSON to the webhook:

```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "niche": "hvac",
  "quiz_answers": [
    "Missing calls during peak season",
    "Mostly referrals and word-of-mouth",
    "More new customer leads"
  ],
  "utm_source": "linkedin",
  "utm_medium": "dm",
  "utm_campaign": "realestate_q1",
  "utm_content": "intro_message",
  "ref": "john_1234",
  "timestamp": "2026-09-10T14:30:00.000Z"
}
```

---

## Next Steps

- [ ] Create n8n account
- [ ] Create webhook workflow
- [ ] Connect to Google Sheets
- [ ] Update script.js with webhook URL
- [ ] Test form submission
- [ ] Verify data in Google Sheets
- [ ] Deploy to production

Once working, proceed with Phase 1 deployment to Vercel.
