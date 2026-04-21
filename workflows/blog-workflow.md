# Blog Workflow (Short-form)

## Overview
Blogs are short-form content (600-1000 words) designed for quick creation and publication. This workflow emphasizes speed while maintaining quality and brand standards.

**Timeline**: 1-3 days
**Owner**: Blog Writer Agent
**Supporting**: Research Agent, Editor Agent

---

## Phase 1: Planning (2-4 hours)

### Step 1: Topic Selection & Duplication Check
**Owner**: PMM or Blog Writer

**IMPORTANT: Check for existing content first!**

- [ ] Identify topic from content calendar or trending subject
- [ ] **Search existing content** (published blogs, drafts, examples)
  - Check `/output/published/` for live content
  - Check `/output/drafts/` for in-progress content
  - Search your company blog: https://www.your-company.com/blog/
  - Grep for keywords: `grep -r "topic keywords" output/ examples/`
- [ ] If topic exists: Consider new angle, update existing, or choose different topic
- [ ] Validate topic aligns with messaging framework
- [ ] Confirm target audience and persona
- [ ] Define primary keyword (if SEO-focused)

**Red Flags:**
- 🚫 Exact same title exists
- 🚫 Same angle covered in last 6 months
- ✅ Different angle on same topic = OK (e.g., technical vs. business perspective)
- ✅ Updating old content = OK (but update, don't rewrite)

**Output**: Topic brief with objective and target audience (and confirmation no duplicate exists)

---

### Step 2: Research
**Owner**: Research Agent (or Blog Writer for simple topics)

- [ ] **Confirm no duplication** (double-check before investing time)
- [ ] Quick competitive scan (what exists on this topic?)
- [ ] Review our past content on similar topics (to differentiate)
- [ ] Gather 2-3 supporting statistics or data points
- [ ] Find 1-2 relevant examples or case studies
- [ ] Identify internal content to link to
- [ ] Basic keyword research if SEO-focused

**Output**: Research brief with key facts and resources (including note on how this differs from existing content)

**Time**: 1-2 hours

---

## Phase 2: Writing (3-5 hours)

### Step 3: Outline
**Owner**: Blog Writer

- [ ] Create working outline with 3-4 main sections
- [ ] Plan introduction hook
- [ ] Identify where examples/data will go
- [ ] Determine CTA placement
- [ ] Confirm structure matches template

**Output**: Approved outline

**Time**: 30 minutes

---

### Step 4: First Draft
**Owner**: Blog Writer

Reference:
- `/templates/blog-template.md`
- `/agents/blog-writer.md`
- `/brand/` guidelines

**Writing checklist**:
- [ ] Compelling hook in first 2 sentences
- [ ] Clear value proposition in intro
- [ ] 3-4 main sections with descriptive headers
- [ ] Each section makes one clear point
- [ ] Concrete examples or data included
- [ ] Smooth transitions between sections
- [ ] Strong conclusion with takeaways
- [ ] Clear CTA at end
- [ ] 600-1,000 words total
- [ ] Internal links to related content
- [ ] External links to sources (if applicable)

**Output**: Complete first draft

**Time**: 2-3 hours

---

### Step 5: Self-Edit
**Owner**: Blog Writer

- [ ] Read aloud for flow
- [ ] Check Hemingway grade level (target 8-10)
- [ ] Verify all facts and links
- [ ] Add SEO elements (keywords, meta description)
- [ ] Ensure brand terminology correct
- [ ] Break up long paragraphs
- [ ] Add bold for emphasis where appropriate

**Output**: Polished draft

**Time**: 30-60 minutes

---

### Step 5.5: Generate Image Suggestions
**Owner**: Blog Writer or Content Operations

After completing the polished draft, automatically generate Adobe Stock image suggestions:

```bash
npm run adobe:suggest -- --title "Your Blog Title" --open
```

This will:
- Generate 5 smart search URLs based on your blog title
- Open all searches in your browser tabs
- Allow you to browse Adobe Stock (already logged in via SSO)

**Image selection checklist**:
- [ ] Download 3-5 relevant images to Downloads folder
- [ ] Prefer corporate-appropriate, tech-focused imagery
- [ ] Mix of featured image (landscape) and inline images
- [ ] Consistent style/color palette

Once downloaded, organize images:
```bash
npm run adobe:organize -- --blog "blog-slug"
```

**Output**: Organized images in `output/images/{blog-slug}/` with markdown references

**Time**: 15-30 minutes

---

## Phase 3: Review (1-2 hours)

### Step 6: Editorial Review
**Owner**: Editor Agent

Reference: `/agents/editor.md`

**Review focus**:
- [ ] Brand voice and tone compliance
- [ ] Clarity and readability
- [ ] Accuracy of claims
- [ ] SEO optimization
- [ ] Brand terminology
- [ ] Link functionality
- [ ] Grammar and spelling
- [ ] Template compliance

**Output**: Approved draft or revision requests

**Time**: 30-60 minutes

---

### Step 7: Revisions (if needed)
**Owner**: Blog Writer

- [ ] Address required changes
- [ ] Implement recommended improvements
- [ ] Re-check editorial feedback items
- [ ] Request re-review if major changes

**Output**: Final approved draft

**Time**: 30-60 minutes

---

## Phase 4: Publishing (1-2 hours)

### Step 8: Prepare for Publication
**Owner**: PMM or Content Operations

- [ ] Add to CMS or publishing platform
- [ ] Upload and optimize images
- [ ] Add image alt text
- [ ] Set meta title and description
- [ ] Configure URL slug
- [ ] Add tags/categories
- [ ] Schedule internal links
- [ ] Set up tracking parameters

**Output**: Content ready in CMS

**Time**: 30 minutes

---

### Step 9: Pre-Publication Check
**Owner**: Editor or PMM

- [ ] Preview in live environment
- [ ] Test all links
- [ ] Verify mobile responsiveness
- [ ] Check image loading
- [ ] Confirm meta data displays correctly
- [ ] Review formatting on actual page
- [ ] Test CTAs work

**Output**: Final approval to publish

**Time**: 15 minutes

---

### Step 10: Publish
**Owner**: PMM or Content Operations

- [ ] Set publication date/time
- [ ] Publish post
- [ ] Verify live page
- [ ] Submit to search engines (if needed)
- [ ] Add to internal tracking

**Output**: Published blog post

**Time**: 15 minutes

---

## Phase 5: Promotion (Ongoing)

### Step 11: Social Media Promotion
**Owner**: Social Media Writer Agent

- [ ] Create social posts for each platform
- [ ] Schedule posts
- [ ] Tag relevant people/accounts
- [ ] Monitor engagement

Reference: `/workflows/social-media-workflow.md`

**Time**: 30-60 minutes

---

### Step 12: Distribution
**Owner**: PMM

- [ ] Add to newsletter
- [ ] Share with sales team
- [ ] Post in relevant communities
- [ ] Employee advocacy program
- [ ] Paid promotion (if applicable)

**Time**: 30 minutes

---

## Phase 6: Performance Tracking

### Step 13: Monitor Performance
**Owner**: PMM

**Track metrics** (30 days):
- Page views
- Time on page
- Bounce rate
- CTA clicks
- Social shares
- Organic search rankings
- Backlinks earned

**Output**: Performance report

---

## Quick Reference

### Timeline Summary
- **Planning**: 2-4 hours
- **Writing**: 3-5 hours
- **Review**: 1-2 hours
- **Publishing**: 1-2 hours
- **Total**: 1-3 days

### Required Deliverables
1. Topic brief
2. Research brief (light)
3. Outline
4. First draft
5. Edited draft
6. Final approved draft
7. Published post
8. Social promotion assets

### Quality Gates
- ✅ Outline approved before drafting
- ✅ Editorial review passed
- ✅ Pre-publication check passed
- ✅ Final approval obtained

---

## Workflow Variations

### Express Blog (Same-day)
For timely topics requiring fast turnaround:
- Skip formal research phase
- Simultaneous review and revision
- Publish same day
- **Total time**: 4-6 hours

### SEO-Optimized Blog (Extended)
For cornerstone or high-value SEO content:
- Extended keyword research
- Deeper competitive analysis
- Additional review cycles
- **Total time**: 3-5 days

### Thought Leadership Blog
For executive bylines or sensitive topics:
- Additional stakeholder reviews
- Legal/compliance review if needed
- Executive approval
- **Total time**: 5-7 days

---

## Common Bottlenecks

### How to Prevent Delays

**Bottleneck**: Waiting for topic approval
**Solution**: Maintain approved topic backlog

**Bottleneck**: Slow review cycles
**Solution**: Set review SLAs (24-hour turnaround)

**Bottleneck**: Last-minute revisions
**Solution**: Clear requirements in topic brief

**Bottleneck**: Publishing technical issues
**Solution**: Pre-flight checklist and staging review

---

## Templates and Resources

### At Start
- `/templates/blog-template.md`
- `/agents/blog-writer.md`
- `/brand/voice-and-tone.md`
- `/brand/messaging-framework.md`
- `/brand/terminology.md`

### During Writing
- `/examples/blogs/` - Best practice examples

### Before Publishing
- `/brand/visual-guidelines.md`
- SEO checklist (in template)
- Editorial checklist (in agent file)

---

## Success Metrics

### Quality Indicators
- Hemingway grade 8-10
- 0 spelling/grammar errors
- 100% link functionality
- Brand compliance score: 100%

### Performance Targets
- Time on page: 2-4 minutes
- Bounce rate: <70%
- CTA click-through: 2-5%
- Social shares: [Your target]
- Organic traffic growth: Month-over-month increase

---

*This workflow is designed for efficiency while maintaining quality. Adjust timelines based on topic complexity and approval requirements.*
