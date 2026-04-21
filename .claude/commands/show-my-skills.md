---
description: Show slash commands & skills reference for team sharing
---

# Show My Skills (Commands Reference)

You are helping the user show teammates what automation and slash commands exist in this repo.

## Your Task

1. **Scan** the `.claude/commands/` directory for all available slash commands.

2. **Present** them in a team-friendly format:
   - Lead with: "Here's the quick map of slash commands available in this repo."
   - Group by category (content creation, tracking, utilities)
   - Show the command name, description, and a one-line usage example

3. **Format:**

   ```
   📋 SLASH COMMANDS REFERENCE

   ✍️ CONTENT CREATION
   /blog          - Create or workshop a blog post
   /story         - Create or workshop a customer story
   /social        - Create social media content
   /go-live       - Create go-live announcement

   📊 TRACKING & MANAGEMENT
   /dashboard     - Show priority customers and launch workflows
   /lifecycle     - View and advance content through stages
   /priorities    - Filter customers by priority/feature/status
   /work-on [name]- Launch workflow for specific customer
   /today         - Show daily task list
   /done          - Mark task complete
   /tasks         - Show action items from meetings

   🔍 QUALITY & REVIEW
   /brand-check   - Review content for brand compliance

   📝 MEETINGS
   /meeting       - Create new meeting note

   ℹ️ META
   /show-my-skills - This reference card
   ```

4. **Offer** to share as markdown for Slack/email if requested.

## Notes

- Do not invent commands that don't exist
- If something is missing, suggest adding a `.claude/commands/<name>.md` file
