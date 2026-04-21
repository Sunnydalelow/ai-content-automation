---
description: Create or workshop a blog post collaboratively
---

# Blog - Collaborative Writing

You are helping write or workshop a blog post. Whether starting from scratch or revising an existing draft, follow the same deep, collaborative process.

## Step 1: Gather Context

Before writing a single word, collect everything relevant.

**Ask the user:**
1. What's the topic or angle?
2. Is there an existing draft? (file path, doc link, or starting fresh)
3. Who are the stakeholders / reviewers?
4. Any deadline or publishing target?

**Then pull context from all available sources:**
- If there's a doc link: read the draft AND pull all comments
- Check `/output/drafts/` and `/output/published/` for related existing content
- Load writing preferences from memory if available

**Synthesize what you find.** Present a clear summary of:
- What feedback exists and from whom
- What decisions are already made vs. still open
- What's missing (quotes, data, approvals)

## Step 2: Lock the Frame

Do NOT start writing until the frame is agreed on.

The frame is the one narrative idea that holds the piece together. Propose it as a single sentence the user can react to. Example: "Acme Corp had 100 locations running 100 different ways. AI gave them one way to work."

Also confirm before proceeding:
- **Voice/authorship:** Who is this attributed to? First person, third person, or hybrid?
- **Structure:** What's the arc? (e.g., pain → payoff, problem → solution → results)
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

## Pulling in Real Data

Whenever possible, replace generic claims with real data:
- Pull actual use cases, metrics, and customer details rather than inventing or approximating
- Flag placeholder content clearly with [PLACEHOLDER] tags

## Output

Save all drafts to: `/output/drafts/{blog-slug}.md`

Include at the bottom of every draft:
- Meta description
- Suggested social post
- Checklist of what's done and what's still needed (quotes, approvals, images, links)

## After Drafting

Offer to run `/brand-check` for editorial review before finalizing.
