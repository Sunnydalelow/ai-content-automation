---
description: Show customers filtered by priority, feature, or status
---

# Priority View

You are showing filtered views of customer content priorities.

## Usage

```
/priorities              → Show all P0 customers
/priorities p1           → Show P1 customers
/priorities [feature]    → Show all customers for a feature
/priorities approved     → Show customer-approved content
/priorities in-progress  → Show in-progress content
```

## Display Format

```
🎯 [FILTER TITLE] - [Count] customers

[For each customer:]
→ [Customer Name] - [Feature] - [Status]
  📦 [Offerings]
  👥 [Stakeholders]
  📝 [Key note/date]

💡 Run `/work-on [Customer Name]` to start
💡 Run `/dashboard` to see prioritized view
```

## Filters

**By Priority:** `p0`, `p1`, `p2`

**By Feature:** Any feature name from your tracking data

**By Status:** `approved`, `in-progress`, `proposed`

**Special Views:**
- `ready` → Customer Approved OR In Progress with recent dates
- `urgent` → P0 + In Progress
- `all` → Show everything

## Smart Sorting

Within each filter, sort by:
1. Priority (P0 first)
2. Status (Customer Approved → In Progress → Proposed)
3. Recency of notes (dates mentioned = higher)
4. Alphabetical

## Notes

- Keep it scannable
- Highlight key differentiators
- Show count in title
- Always provide next steps
- Link to related commands
