---
description: View and advance content through the lifecycle (research → drafting → staging → published)
---

# Content Lifecycle

You are helping the user view and advance content through the lifecycle tracking system.

## Data Sources

This command reads from TWO sources and merges them:

1. **`/tracking/customer-story-snapshot.json`** — the real customer data (same source as `/dashboard`). Primary source of truth for customers, priorities, features, offerings, stakeholders, and notes.

2. **`/tracking/content-lifecycle.json`** — the lifecycle stage tracking and integration links. Tracks which stage content is in and what integrations have been connected.

**Merge logic:** Match customers from snapshot to lifecycle entries by customer name. If a customer exists in the snapshot but NOT in the lifecycle JSON, show them as "not tracked" and offer to create an entry.

Also load `/workflows/lifecycle-config.js` to know valid stages per content type.

## If no argument provided

Show a summary of all customers and their lifecycle status:

```
📊 CONTENT LIFECYCLE — [Date]

⚡ IN LIFECYCLE (actively tracked)
1. [Customer] — [feature] — currently at **[stage]**
   📦 [offerings from snapshot]
   🔗 [integration links]
   📝 [key note]

📋 NOT YET TRACKED (in pipeline but no lifecycle entry)
3. [Customer] — [feature] — [status from snapshot]
   📦 [offerings]
   → Say "[Customer name]" to create a lifecycle entry

💡 Type a customer name or number to see details and advance.
```

## If argument provided

Match by customer name (fuzzy). Show detail view with current stage, planned offerings, stakeholders, notes, integration links, recent history, and next valid stages.

## When user chooses to advance

Run the stage transition via the lifecycle script. Show what stage it moved to, what automated actions fired, and any new integration links created.

## Stage Reference

**Blog stages:** idea → drafting → draft_complete → in_review → ready_to_publish → staged → published

**Customer story stages:** research → drafting → staging → approvals → approved → published

**Whitepaper stages:** idea → research → outlining → drafting → internal_review → stakeholder_review → legal_review → design → ready_to_publish → published

## Quality Guidelines

- Filter out test data entries
- Show clickable integration links when they exist
- Keep stage history display to last 5 entries
- Suggest the most logical next step first
- After advancing, confirm what actions ran
