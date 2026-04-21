# Done - Mark Task Complete

Mark a task as complete and update tracking.

## Your Task

When the user says a task is done or invokes `/done [task]`, mark it complete.

## Process

1. **Identify the Task:**
   - From user description or task number
   - Match against tasks in your task database

2. **Mark Complete:**
   - Update task database: set `"completed": true`, `"status": "done"`
   - Add completion timestamp

3. **Celebrate:**
   ```
   ✅ Task completed: [Task name]

   🎉 Nice work!

   What's next on your list?
   ```

4. **Show Remaining:**
   - Show next urgent task
   - Update daily summary

## Example Usage

```
User: I published the blog!
Claude: ✅ Task completed: Publish blog post
        🎉 Nice work!

        Next up: Post new guides (due today)

User: /done task-002
Claude: ✅ Task completed: Post new guides
        🎉 Great! You knocked out both urgent tasks!

        Next: Acme Corp story for review
```

## Notes

- Always celebrate completions
- Show what's next
- Update all tracking systems
