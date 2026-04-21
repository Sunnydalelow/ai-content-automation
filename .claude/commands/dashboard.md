---
description: Show priority customers and launch workflows
---

# Content Dashboard

You are showing the user their content priorities and helping them select what to work on next.

## Your Task

1. **Read Customer Data**
   - Load `/tracking/customer-story-snapshot.json`
   - Identify customers that need attention NOW

2. **Smart Filtering**
   Show customers that are:
   - **READY TO PUBLISH**: Status = "Customer Approved" (P0/P1 only)
   - **READY TO START**: Status = "In Progress" with upcoming dates or recent notes
   - **URGENT**: P0 priority with active offerings

   DO NOT show:
   - Customers with status "Proposed" (not ready yet)
   - Customers with no offerings listed
   - P3 or lower priority (unless explicitly requested)

3. **Display Format**

   ```
   🎯 CONTENT PRIORITIES - [Today's Date]

   🚀 READY TO PUBLISH (Customer Approved)
   ─────────────────────────────────────
   1. [Customer Name] - [Feature]
      📦 [Offerings]
      👥 [Stakeholders if any]
      📝 [Key note]

   ✅ READY TO START (Active, with clear next steps)
   ─────────────────────────────────────
   2. [Customer Name] - [Feature]
      📦 [Offerings]
      👥 [Stakeholders if any]
      📝 [Key note - especially dates/interviews]

   ⚡ IN PROGRESS (P0 - Needs attention)
   ─────────────────────────────────────
   3. [Customer Name] - [Feature]
      📦 [Offerings]
      👥 [Stakeholders if any]
      📝 [Key note]

   💡 Which customer would you like to work on?
   ```

4. **User Selection**
   After displaying, ask: "Which customer would you like to work on? (type name or number)"

5. **Auto-Launch Workflow**
   Based on their selection:
   - **If Status = "Customer Approved":** Offer to publish, create social posts, create assets
   - **If Offerings include "Customer Story":** Launch `/story` with pre-filled context
   - **If Offerings include "Go-live post":** Launch `/go-live` with pre-filled context
   - **If Offerings include social content:** Launch `/social` with pre-filled context

6. **Context Handoff**
   When launching a workflow, provide: customer name, feature/product, stakeholders, key notes, planned offerings.

## Smart Prioritization

**Show first:**
1. Customer Approved (ready to publish!)
2. In Progress with specific dates mentioned
3. In Progress with stakeholder buy-in
4. In Progress with quotes/interviews ready

## Notes

- Show only actionable items (max 5-7)
- Highlight dates and deadlines
- Make it scannable with emojis and formatting
- Pre-fill as much context as possible
- Number the list for easy selection
