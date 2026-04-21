# Setup Guide

Get your AI content automation system running in 15 minutes.

## Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed
- Node.js 18+ (for integration scripts)
- Access to your CMS, social media, and project management tools

## Step 1: Clone and Configure

```bash
git clone https://github.com/your-org/ai-content-automation.git
cd ai-content-automation
npm install --prefix integrations/scripts
```

## Step 2: Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and fill in your credentials for each integration you want to use. You don't need all of them — start with what you have.

## Step 3: Customize Brand Guidelines

The `/brand/` directory contains template files for your brand voice. Customize these:

1. **`voice-and-tone.md`** — Define how your brand sounds
2. **`messaging-framework.md`** — Your key messages and positioning
3. **`terminology.md`** — Approved product names and terms
4. **`visual-guidelines.md`** — Formatting standards

These files are referenced by every slash command and agent, so getting them right pays off immediately.

## Step 4: Add Your Examples

The `/examples/` directory has fictional examples to show format. Replace them with your own published content:

- `examples/blogs/` — Your best blog posts
- `examples/customer-stories/` — Published case studies
- `examples/customer-go-lives/` — Past go-live announcements
- `examples/social-media/` — Strong social posts

The more real examples you add, the better the AI output matches your style.

## Step 5: Set Up Tracking (Optional)

If you want to use the dashboard and lifecycle commands:

1. Create `/tracking/customer-story-snapshot.json` with your customer pipeline data
2. The lifecycle system will create `/tracking/content-lifecycle.json` automatically
3. Configure your Slack channel ID in `.env` for notifications

## Step 6: Test Your Setup

Open Claude Code in this directory and try:

```
/show-my-skills    — See all available commands
/today             — See your daily tasks
/blog              — Start a blog post
/brand-check       — Review content for brand compliance
```

## Integrations

### CMS (Optimizely, WordPress, etc.)
Set the relevant variables in `.env`. The integration scripts in `/integrations/scripts/` handle API calls.

### Social Media (Sprout Social, Buffer, etc.)
Configure your social tool's API credentials in `.env`.

### Design (Canva, Figma, etc.)
Set up OAuth tokens using the auth scripts in `/integrations/scripts/`.

### Communication (Slack)
Set your Slack bot token and channel IDs in `.env` for notifications and canvas creation.

## Directory Structure

```
├── CLAUDE.md              — System instructions (read by Claude automatically)
├── .claude/commands/      — Slash commands (invoked with /command-name)
├── agents/                — Agent personas with writing instructions
├── brand/                 — Your brand guidelines
├── templates/             — Content templates
├── workflows/             — Step-by-step content workflows
├── examples/              — Example content for reference
├── integrations/scripts/  — Node.js integration scripts
├── output/drafts/         — Work in progress
├── output/published/      — Final content
└── tracking/              — Pipeline and lifecycle data
```

## Customization

### Adding a New Content Type

1. Create a template: `templates/{type}-template.md`
2. Create an agent: `agents/{type}-writer.md`
3. Create a workflow: `workflows/{type}-workflow.md`
4. Create a slash command: `.claude/commands/{type}.md`
5. Add examples: `examples/{type}/`
6. Update `CLAUDE.md` to reference the new type

### Adding a New Slash Command

Create a markdown file in `.claude/commands/` with:
- Frontmatter with `description`
- Clear instructions for what the command does
- Process steps
- Example output

The command name is the filename (e.g., `my-command.md` → `/my-command`).

## Troubleshooting

**"Command not found"** — Make sure the `.md` file is in `.claude/commands/` and has valid frontmatter.

**"Missing environment variable"** — Check `.env` has the required values. See `.env.example` for reference.

**"Integration script failed"** — Run `npm install` in `integrations/scripts/` and verify your API credentials.
