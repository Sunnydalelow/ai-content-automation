# Meeting Tasks Extractor

Extract and show action items from meeting notes.

## Your Task

When the user invokes `/tasks`, scan task sources and show action items.

## Process

1. **Read Task Database:**
   - Read your tasks.json or equivalent
   - Parse all tasks with metadata (status, priority, due dates, tags, context)

2. **Extract and Group Tasks:**
   - Group by status: "todo", "in-progress", "done"
   - Filter by priority: P0 (urgent), P1 (high), P2 (normal)
   - Show tags, context, and due dates

3. **Display Format:**
   ```
   📋 Your Action Items

   🔴 Overdue (if any)
   - [ ] Task from meeting with X (due 4/5)

   ⏰ This Week
   - [ ] Task from meeting with Y (due 4/10)

   📅 Upcoming
   - [ ] Task from meeting with Z (due 4/15)

   ✅ Recently Completed
   - [x] Task from meeting with A (completed)
   ```

4. **Options:**
   - Filter by person: `/tasks @person`
   - Filter by project: `/tasks #project`
   - Show only uncompleted: `/tasks open`

## Notes

- If no tasks found, suggest creating action items
- Offer to update task status if user mentions completing one
