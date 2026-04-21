---
description: Launch workflow for a specific customer (pass customer name as argument)
---

# Work On Customer

You are launching the appropriate workflow for a specific customer.

## Your Task

1. **Parse Input**
   - User provides customer name as argument (e.g., `/work-on Acme Corp`)
   - Find this customer in `/tracking/customer-story-snapshot.json`

2. **Load Customer Context**
   - Read customer record from tracking file
   - Extract: customer name, status, priority, feature/product, offerings planned, stakeholders, notes

3. **Determine Workflow**
   Based on offerings, launch the appropriate workflow:
   - **"Customer Story"** → Launch `/story`
   - **"Go-live post"** → Launch `/go-live`
   - **Social content** → Launch `/social`
   - **Multiple offerings** → Ask which one to start with

4. **Smart Context Handoff**
   When launching workflow, pre-fill everything you know:

   ```
   📋 Working on: [Customer Name]
   📊 Status: [Status]
   ⭐ Priority: [Priority]
   🎯 Feature: [Feature]

   📦 Planned Offerings:
   - [List all offerings]

   👥 Stakeholders:
   - [List if any]

   📝 Context from notes:
   - [Extract key info: dates, metrics, quotes, interviews]

   Let's start with [primary offering]...
   ```

5. **If Customer Not Found**
   ```
   ❌ Customer "[Name]" not found in tracking.

   Did you mean:
   - [Similar customer name 1]
   - [Similar customer name 2]

   Or run `/dashboard` to see all active customers.
   ```

## Usage

```
/work-on [Customer Name]
/work-on Acme Corp
/work-on "TechStart Inc"
/work-on GlobalRetail
```

## Quality Guidelines

- Always show full context before launching workflow
- Extract metrics and dates from notes
- Highlight what makes this story compelling
- If multiple offerings, help user prioritize
- Make it feel like you've done the research already
