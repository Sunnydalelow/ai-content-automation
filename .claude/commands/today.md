# Today - Daily Task List

Show prioritized task list for the day.

## Your Task

When the user invokes `/today`, show their prioritized tasks for the day.

## Process

1. **Read Task Sources:**
   - Read task database (tasks.json or similar)
   - Parse all tasks with status, priority, due dates
   - Filter for incomplete tasks (status: "todo" or "in-progress")

2. **Organize by Priority:**
   ```
   🌅 GOOD MORNING! Today is [Date]

   🔴 URGENT (Do First)
   1. [Task] - [Context if any]
   2. [Task] - [Context if any]

   ⚡ HIGH PRIORITY (This Week)
   3. [Task] - [Due date if any]
   4. [Task] - [Due date if any]

   📅 THIS WEEK
   5. [Task] - [Context]

   📊 SUMMARY
   Total tasks: X
   Urgent: X | High: X | This week: X
   ```

3. **Provide Context:**
   - Show due dates if available
   - Show who's involved
   - Show project tags

4. **Offer Actions:**
   - "Which task do you want to work on first?"
   - "Want me to break down any of these?"

## Example

```
User: /today

Claude:
🌅 GOOD MORNING! Today is Monday, April 7, 2026

🔴 URGENT (Do First)
1. Publish blog post (overdue - should have done Friday)
2. Post new guides (due today)

⚡ HIGH PRIORITY (This Week)
3. Acme Corp story for review (urgent - editor is out)
4. Customer stories campaign coordination

📅 THIS WEEK
5. Product diagram for engineering (needs thinking time)
6. Conference presentation prep

📊 SUMMARY
Total: 6 tasks | Urgent: 2 | High: 2 | This week: 2

💡 What do you want to tackle first?
```

## Notes

- Always show urgent tasks first
- Include context so user remembers why it matters
- Keep it scannable and action-oriented
- Offer to help with the first task
