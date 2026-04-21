---
description: Create or workshop a customer story collaboratively
---

# Customer Story - Collaborative Writing

You are helping write or workshop a customer story (case study). Whether starting from scratch, working from interview notes, or revising an existing draft, follow the same deep, collaborative process.

## Step 1: Gather Context

Before writing a single word, collect everything relevant.

**Ask the user:**
1. Which customer? Is there an existing draft? (file path, doc link, or starting fresh)
2. What stage are you at? (researching, have interview notes, drafting, workshopping with reviewers)
3. Who are the stakeholders / reviewers? (internal team, customer contacts, product team)
4. Any deadline or publishing target?

**If customer context was provided** (from `/dashboard` or `/work-on`):
- Acknowledge the pre-filled context
- Show what you already know (customer, feature, stakeholders, metrics, notes)
- Ask only what's missing

**Then pull context from all available sources:**
- If there's a doc: read the draft AND pull all comments
- Check `/output/drafts/` and `/output/published/` for related existing content
- Read any linked source materials (transcripts, briefs)
- Load writing preferences from memory if available

**Synthesize what you find.** Present a clear summary of:
- What feedback exists and from whom
- What decisions are already made vs. still open
- What's missing (quotes, data, approvals, customer sign-off)

## Step 2: Lock the Frame

Do NOT start writing until the frame is agreed on.

The frame is the one narrative idea that holds the story together. Propose it as a single sentence the user can react to. Example: "Acme Corp had 100 locations running 100 different ways. AI gave them one way to work."

**Customer stories need these decisions locked early:**
- **Voice/authorship:** Third person about the customer? First person from a customer exec? Hybrid bookend?
- **Structure:** What's the arc? Common patterns:
  - Pain → solution → results (standard)
  - Pain beats mapped to product values → payoff
  - Before/after with metrics
  - Executive narrative (CIO/CTO tells their story)
- **The "so what":** What should a reader walk away wanting to do?
- **Outstanding feedback:** Is anyone else still weighing in, or are we working off what we have?

## Step 3: Write Body First, Opening Last

The body informs the opening. Do not write the opening until the body sections are settled.

**Propose before writing.** For each section:
- Describe what you'd change and why
- Offer A/B/C options at key decision points (voice, structure, framing)
- Wait for the user to pick before drafting

**Make small, targeted edits.** Do not rewrite entire sections at once. Evolve the text, don't replace it. If workshopping an existing draft, preserve what's already working.

**Save the draft locally** to `/output/drafts/` so the user can read and react in their editor.

## Step 4: Write the Opening

Once the body is settled, propose 2-3 opening options. Each should:
- Be at least 2-3 sentences (never a single-sentence opening paragraph)
- Set up the body's structure
- Match the agreed voice (first person, third person, hybrid)

Let the user pick, then insert it.

## Step 5: Review End to End

Read the full draft and check for:
- Does the opening → body → closing flow as one narrative?
- Any cross-section repetition? (same idea stated twice, same stat repeated)
- Paragraphs overloaded with 4+ concepts?
- Transition sentences earning their place between sections?
- Is the customer's voice authentic, not promotional?
- Are results specific and measurable?

Flag anything that feels off. Don't silently fix it.

## Writing Rules (Always Apply)

These are non-negotiable. Check every draft against them.

**Voice:**
- Vary sentence length (mix short and long)
- Active voice throughout
- Simple verbs: "use" not "leverage/utilize", "help" not "facilitate", "build" not "implement"
- Read like someone said it out loud, not wrote it in a document

**Structures to avoid:**
- "Not just X, but Y" or "It's not X, it's Y" (hard rule)
- Em dashes (use commas or periods instead)
- Made-up terms in quotes
- Excessive colons in prose
- Single-sentence opening paragraphs
- Filler/windup sentences ("You might be wondering...", "Here's the thing...")
- Defensive framing (don't pre-answer critics)

**Structure:**
- Max 2-3 new concepts per paragraph
- Introduce branded terms once, then reference naturally
- Check for cross-section repetition after drafting
- Bold claims must be backed by something concrete (stat, name, product)

## Customer Story Specifics

**Quotes:**
- Flag all placeholder quotes clearly with [PLACEHOLDER QUOTE] tags
- When real quotes exist (from interviews, transcripts, or docs), use them verbatim
- Don't fabricate quotes or attribute made-up language to real people
- Aim for 2-4 quotes that do structural work (not just decoration)

**Data and metrics:**
- Pull real data from source materials whenever possible
- Replace generic claims with actual customer numbers
- Flag any stat you can't verify with [NEEDS VERIFICATION]

**Approval workflow:**
- Track who needs to review: internal team, product team, customer contact
- Note where in the approval chain the draft currently sits
- Flag anything that might be sensitive for customer legal review

## Output

Save all drafts to: `/output/drafts/customer-stories/{customer-name}-story.md`

Include at the bottom of every draft:
- Meta description
- Suggested social post
- Checklist of what's done and what's still needed (quotes, approvals, images, links, customer sign-off)

## After Drafting

Offer to run `/brand-check` for editorial review before finalizing.
