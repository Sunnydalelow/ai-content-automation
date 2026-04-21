# AI Content Automation

**An open-source content automation system built on [Claude Code](https://docs.anthropic.com/en/docs/claude-code) slash commands.** Designed for marketing teams who want to automate content creation from research through publishing while maintaining brand consistency.

---

## What This Is

This repo turns Claude Code into a full content automation toolkit for marketing teams. It provides:

- **Structured agent instructions** for each content type (blogs, customer stories, whitepapers, social media, SEO pages)
- **Slash commands** (`/blog`, `/story`, `/social`, `/go-live`, `/brand-check`) that launch collaborative writing workflows
- **Brand guardrails** that are enforced automatically on every piece of content
- **Integration scaffolding** for CMS platforms, social schedulers, design tools, and project management
- **A content lifecycle engine** that tracks content from idea through publication

## Content Types Supported

| Content Type | Agent | Slash Command | Typical Timeline |
|---|---|---|---|
| Blog posts | `blog-writer.md` | `/blog` | 1-3 days |
| Customer stories | `customer-story-writer.md` | `/story` | 3-6 weeks |
| Go-live announcements | `customer-go-live-writer.md` | `/go-live` | 24-48 hours |
| Whitepapers | `whitepaper-writer.md` | N/A (use workflow) | 4-8 weeks |
| SEO authority pages | `seo-writer.md` | N/A (use workflow) | 3-5 days |
| Social media | `social-media-writer.md` | `/social` | Same day |

## How Slash Commands Work

Claude Code [slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands) are markdown files in `.claude/commands/` that define interactive workflows. When you type `/blog` in Claude Code, it loads the instructions from `.claude/commands/blog.md` and walks you through the full writing process.

**Example: `/blog`**
1. Gathers context (topic, audience, existing drafts)
2. Locks the narrative frame before writing
3. Writes body sections first, opening last
4. Offers A/B/C options at decision points
5. Runs brand compliance check
6. Saves draft to `/output/drafts/`

**Example: `/brand-check`**
1. Reads your draft
2. Checks voice and tone against `/brand/voice-and-tone.md`
3. Verifies product terminology against `/brand/terminology.md`
4. Flags issues by priority: Critical, Important, Suggested
5. Returns a brand compliance score

## Quick Start

### 1. Clone and customize

```bash
git clone https://github.com/your-org/ai-content-automation.git
cd ai-content-automation
cp .env.example .env
```

### 2. Add your brand guidelines

Edit the files in `/brand/` with your company's actual voice, messaging, terminology, and visual standards. These files are referenced by every agent and slash command.

### 3. Add your examples

Drop 1-2 real examples of each content type into `/examples/`. The agents use these as quality benchmarks.

### 4. Configure integrations (optional)

Edit `.env` with your CMS, Slack, design tool, and social media credentials. See `docs/setup-guide.md` for details.

### 5. Start creating content

```bash
claude  # Launch Claude Code in this directory
```

Then use slash commands:
- `/blog` - Start a new blog post
- `/story` - Start a customer story
- `/go-live` - Create a go-live announcement
- `/social` - Create social media posts
- `/brand-check` - Review any content for brand compliance
- `/dashboard` - See content priorities
- `/lifecycle` - Track content through stages

## Repository Structure

```
ai-content-automation/
├── CLAUDE.md                     # System instructions for Claude Code
├── README.md                     # This file
├── .env.example                  # Integration config template
├── .gitignore                    # Git ignore rules
│
├── agents/                       # Agent instructions per content type
│   ├── blog-writer.md
│   ├── customer-story-writer.md
│   ├── customer-go-live-writer.md
│   ├── whitepaper-writer.md
│   ├── seo-writer.md
│   ├── social-media-writer.md
│   ├── researcher.md
│   └── editor.md
│
├── brand/                        # Brand guidelines (customize these!)
│   ├── voice-and-tone.md
│   ├── messaging-framework.md
│   ├── terminology.md
│   ├── visual-guidelines.md
│   └── brand-process.md
│
├── templates/                    # Content templates
│   ├── blog-template.md
│   ├── customer-story-template.md
│   ├── customer-go-live-template.md
│   ├── social-media-template.md
│   ├── whitepaper-template.md
│   ├── seo-page-template.md
│   └── carousel-template-4-frame.md
│
├── workflows/                    # Step-by-step workflows
│   ├── blog-workflow.md
│   ├── customer-story-workflow.md
│   ├── customer-go-live-workflow.md
│   ├── whitepaper-workflow.md
│   ├── content-ideation-workflow.md
│   ├── content-duplication-check.md
│   └── lifecycle-config.js
│
├── examples/                     # Example content (add your own!)
│   ├── blogs/
│   ├── customer-stories/
│   ├── customer-go-lives/
│   ├── social-media/
│   ├── seo-pages/
│   └── whitepapers/
│
├── integrations/
│   └── scripts/                  # Integration scripts (CMS, Slack, etc.)
│
├── output/
│   ├── drafts/.gitkeep           # Work in progress
│   └── published/.gitkeep        # Completed content
│
├── tracking/.gitkeep             # Content tracking data (gitignored)
│
├── .claude/
│   └── commands/                 # Slash commands for Claude Code
│       ├── blog.md
│       ├── story.md
│       ├── social.md
│       ├── go-live.md
│       ├── brand-check.md
│       ├── dashboard.md
│       ├── lifecycle.md
│       ├── work-on.md
│       ├── today.md
│       ├── done.md
│       ├── priorities.md
│       ├── meeting.md
│       └── tasks.md
│
└── docs/
    └── setup-guide.md            # Integration setup instructions
```

## How to Customize

### Brand Guidelines
The `/brand/` directory ships with template placeholders. Replace them with your actual brand guidelines:

- **voice-and-tone.md** - Define your brand voice attributes and tone by content type
- **messaging-framework.md** - Your positioning, key messages, and audience personas
- **terminology.md** - Approved product names, acronyms, and words to avoid
- **visual-guidelines.md** - Formatting standards, colors, typography

### Agent Instructions
Each agent in `/agents/` can be tuned:
- Adjust word counts and length targets
- Add company-specific writing rules
- Include your style preferences (sentence length, voice, structures to avoid)
- Add your own quality checklists

### Slash Commands
Add new commands by creating `.claude/commands/your-command.md`. Any markdown file in that directory becomes an invocable `/your-command` in Claude Code.

## Integrations

This system supports optional integrations with:

| Integration | Purpose | Config |
|---|---|---|
| **CMS** (WordPress, Optimizely, etc.) | Draft creation and publishing | `.env` |
| **Slack** | Notifications and team coordination | `.env` |
| **Design tools** (Canva, Figma, etc.) | Visual asset creation | `.env` |
| **Social schedulers** (Sprout, Buffer, etc.) | Social media publishing | `.env` |
| **Stock photos** (Adobe Stock, Unsplash, etc.) | Image suggestions | `.env` |

All integrations are optional. The system works fully without them -- you just won't get automated publishing and notifications.

## Screenshots

<!-- Add screenshots of your slash commands in action -->

_Coming soon: Screenshots of `/blog`, `/brand-check`, and `/dashboard` in action._

## Contributing

Contributions welcome. If you build a new slash command, agent, or integration that could help other marketing teams, please open a PR.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Built with [Claude Code](https://docs.anthropic.com/en/docs/claude-code) by Anthropic.
