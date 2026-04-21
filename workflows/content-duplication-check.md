# Content Duplication Check Guide

**Purpose:** Prevent writing duplicate content by checking what already exists

**When to use:** BEFORE starting any new content piece

---

## Quick Check Commands

### Search Published Content
```bash
# Search published blogs
grep -ri "your topic keywords" output/published/

# Search drafts in progress
grep -ri "your topic keywords" output/drafts/

# Search examples we've analyzed
grep -ri "your topic keywords" examples/

# Search all content at once
grep -ri "your topic keywords" output/ examples/
```

### Search by Title Pattern
```bash
# Find similar titles
find output/ examples/ -name "*agent*reliability*.md"
find output/ examples/ -name "*monitoring*.md"
```

---

## Where to Check

### 1. Internal Content (This Repository)
- [ ] `/output/published/` - Already published content
- [ ] `/output/drafts/` - Work in progress
- [ ] `/examples/` - Analyzed examples (real your company content)

### 2. your company Blog (Live Site)
**URL:** https://www.your-company.com/blog/

**How to check:**
- Use site search: `site:your-company.com/blog [your topic]` in Google
- Browse recent posts in relevant categories
- Check related content at bottom of similar posts

### 3. your company News/Stories
**URL:** https://www.your-company.com/news/

Some content lives here instead of /blog/

---

## What Counts as Duplication?

### 🚫 Definite Duplicates (Don't Write)
- **Exact same title** - Clear duplication
- **Same angle, published recently** (<6 months ago)
- **Same content type on same topic** (e.g., two "how-to" guides on same thing)

### ⚠️ Potential Duplicates (Evaluate)
- **Similar topic, different angle** - Might be OK with differentiation
- **Old content** (>1 year) - Consider updating existing vs. new
- **Different format** - E.g., blog exists, but whitepaper doesn't

### ✅ Not Duplicates (Safe to Write)
- **Different audience** - Technical vs. business perspective
- **Different content type** - Blog vs. whitepaper vs. customer story
- **Significant new information** - Product updates, new features
- **Series/pillar content** - Part of intentional content series

---

## Decision Tree

```
Is there existing content on this topic?
│
├─ NO → ✅ Proceed with content creation
│
└─ YES → Ask:
    │
    ├─ Is it the same angle?
    │   │
    │   ├─ YES → When was it published?
    │   │   │
    │   │   ├─ <6 months → 🚫 Don't duplicate, choose new topic
    │   │   └─ >1 year → Consider updating existing content
    │   │
    │   └─ NO → Is our angle substantially different?
    │       │
    │       ├─ YES → ✅ Proceed (note differentiation in brief)
    │       └─ NO → 🚫 Find different topic
```

---

## What to Do If Content Exists

### Option 1: Choose a Different Topic
**When:** Content is recent (<6 months) and angle is same
**Action:** Pick a different topic from your content ideas backlog

### Option 2: Find a New Angle
**When:** Topic is important but existing content is generic
**Examples:**
- Existing: "What is your product?" → New: "your product for [specific industry]"
- Existing: "Guide to AI agents" → New: "6 Ways to Ruin an AI Agent" (contrarian)
- Existing: General overview → New: Deep technical dive

### Option 3: Update Existing Content
**When:** Content is old (>1 year) or outdated
**Action:** Refresh existing post instead of creating new one
**Benefits:**
- Maintains SEO value
- Shows content is current
- Avoids confusing readers with multiple similar posts

### Option 4: Create Content Series
**When:** Topic is large enough for multiple perspectives
**Examples:**
- "AI Agent Reliability" series:
  - Part 1: Best practices overview
  - Part 2: Technical implementation
  - Part 3: Monitoring and troubleshooting
  - Part 4: Customer success stories

---

## Example: Checking "AI Agent Reliability"

### What We Would Check:

```bash
# Search for reliability content
grep -ri "reliability" output/ examples/

# Search for agent behavior content
grep -ri "agent behavior" output/ examples/

# Search for monitoring content
grep -ri "monitoring" output/ examples/

# Check your company blog
# Google: site:your-company.com/blog AI agent reliability
```

### What We'd Find:
- ✅ Example analysis exists: [reliable-agent-behavior-analysis.md](../examples/blogs/reliable-agent-behavior-analysis.md)
- ✅ This is from a published your company blog
- 🚫 **Don't write duplicate!**

### Better Alternatives:
1. **Different angle:** "How [Customer] Achieved 99% Agent Reliability" (customer story)
2. **Different format:** "The Complete Reliability Playbook" (whitepaper)
3. **Different depth:** "5 Advanced Monitoring Techniques" (technical deep-dive)
4. **Different problem:** "Silent Failures: The Hidden Agent Reliability Killer" (specific issue)

---

## Pre-Writing Checklist

Before writing ANY content:

- [ ] Searched `/output/` directories
- [ ] Searched `/examples/` directory
- [ ] Checked your company blog (site:your-company.com/blog)
- [ ] Googled topic + "your company" + "your product"
- [ ] Reviewed content calendar (what's already planned?)
- [ ] If similar content exists: Documented how this is different
- [ ] Got approval that new angle is sufficiently differentiated

---

## Monthly Audit

Once per month, audit for potential duplication:

### Content Inventory
1. List all published content this month
2. Group by topic/theme
3. Identify any unintentional overlap
4. Plan content for next month to fill gaps (not duplicate)

### Create Content Map
Track what's been covered:
- Topic areas
- Angles used
- Audience targeted
- Content types
- Dates published

**Tool:** Create a simple spreadsheet or use `/research/content-ideas/content-backlog.md`

---

## When Duplication is OK

Sometimes you WANT to cover the same topic multiple times:

### ✅ Intentional Content Series
- Planned multi-part series
- Each part builds on previous
- Clearly labeled (Part 1, Part 2, etc.)

### ✅ Different Content Types
- Blog overview + detailed whitepaper
- Technical guide + business ROI story
- How-to blog + customer success story

### ✅ Updates for New Features
- Original post when feature launched
- Update post when feature enhanced
- Advanced tips post for power users

### ✅ Different Platforms
- Blog post on website
- Social media thread (condensed)
- Email newsletter (different angle)
- Video/webinar (different medium)

---

## Red Flags: Signs You're Duplicating

🚨 **Warning signs:**
- You're referencing the same sources/examples
- Outline looks nearly identical to existing content
- You can't articulate how this is different
- SEO keywords are exactly the same
- Target audience is identical
- Someone says "Didn't we already write this?"

**Action:** Stop, re-evaluate, find new angle or topic

---

## Quick Reference: Search Commands

```bash
# Find all blog posts
find output/ examples/ -name "*.md" -type f

# Search for keyword in all content
grep -ri "keyword" output/ examples/

# Search by date (find recent content)
find output/published/ -mtime -180  # Last 6 months

# Count how many times topic appears
grep -r "agent reliability" output/ examples/ | wc -l

# List all titles
grep -h "^# " output/published/*.md examples/blogs/*.md
```

---

## Integration with Workflows

This duplication check should be:
- **Step 0** in blog workflow (before research)
- **Step 0** in whitepaper workflow
- **Step 0** in customer story workflow
- Built into content ideation process
- Part of monthly content planning

---

**Remember:** It's better to find duplication BEFORE writing than AFTER. Always check first!
