# Meeting Note Creator

Create a new meeting note with pre-filled template.

## Your Task

When the user invokes `/meeting [person/topic]`, create a new meeting note file.

## Process

1. **Get Meeting Info:**
   - Person/Topic (from args or ask)
   - Project (ask: "What project is this for?")
   - Tags (suggest based on context, like #customer-story, #urgent, #planning)

2. **Generate Filename:**
   - Format: `YYYY-MM-DD-person-or-topic.md`
   - Lowercase, hyphens for spaces
   - Example: `2026-04-07-acme-customer-review.md`

3. **Create File:**
   - Use your meeting note template
   - Fill in: person, date, project, tags

4. **Confirm:**
   - Tell user file created
   - Show the path
   - Offer to open it for editing

## Example Usage

```
User: /meeting Acme Corp customer review
Claude: Creates meeting note at notes/2026-04/2026-04-07-acme-customer-review.md
```
