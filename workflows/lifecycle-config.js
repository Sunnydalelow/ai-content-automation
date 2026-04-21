/**
 * Content Lifecycle Configuration
 *
 * Defines stages and automated actions for each content type.
 * Configure integration endpoints in .env
 */

module.exports = {
  // Blog lifecycle (fast: 1-3 days)
  blog: {
    stages: [
      'idea',
      'drafting',
      'draft_complete',
      'in_review',
      'ready_to_publish',
      'staged',
      'published'
    ],

    actions: {
      drafting: [
        { type: 'cms', action: 'create_task' },
        { type: 'slack', action: 'notify', message: 'New blog started: {title}' }
      ],

      draft_complete: [
        { type: 'slack', action: 'notify', message: 'Draft complete: {title}' }
      ],

      in_review: [
        { type: 'slack', action: 'notify', message: 'Ready for review: {title}', mention: true }
      ],

      ready_to_publish: [
        { type: 'cms', action: 'create_draft' },
        { type: 'slack', action: 'notify', message: 'Ready to publish: {title}' }
      ],

      staged: [
        { type: 'slack', action: 'notify', message: 'Staged for final review: {title}' }
      ],

      published: [
        { type: 'cms', action: 'mark_complete' },
        { type: 'social', action: 'create_post' },
        { type: 'slack', action: 'announce', message: 'Published: {title}' }
      ]
    }
  },

  // Customer Story lifecycle (medium: 1-2 weeks)
  customer_story: {
    stages: [
      'research',
      'drafting',
      'staging',
      'approvals',
      'approved',
      'published'
    ],

    actions: {
      research: [
        { type: 'cms', action: 'create_task' },
        { type: 'research', action: 'create_brief' },
        { type: 'stock_photos', action: 'suggest_images' },
        { type: 'slack', action: 'notify', message: 'New Customer Story: {title}' }
      ],

      drafting: [
        { type: 'cms', action: 'update_step', step: 'In Progress' },
        { type: 'content', action: 'generate_customer_story_draft' },
        { type: 'slack', action: 'notify', message: 'Drafting customer story: {title}' }
      ],

      staging: [
        { type: 'cms', action: 'create_draft' },
        { type: 'social', action: 'generate_copy' },
        { type: 'design', action: 'create_quote_card' },
        { type: 'seo', action: 'generate_keywords' },
        { type: 'slack', action: 'notify', message: 'Staged for review: {title}' }
      ],

      approvals: [
        { type: 'cms', action: 'update_step', step: 'Approvals' },
        { type: 'slack', action: 'notify', message: 'Send to customer for approval: {title}' }
      ],

      approved: [
        { type: 'slack', action: 'notify', message: 'Approved: {title} - Ready to publish' }
      ],

      published: [
        { type: 'cms', action: 'mark_complete' },
        { type: 'social', action: 'create_post' },
        { type: 'slack', action: 'announce', message: 'Customer story published: {title}' }
      ]
    }
  },

  // Whitepaper lifecycle (long: 2-4 weeks)
  whitepaper: {
    stages: [
      'idea',
      'research',
      'outlining',
      'drafting',
      'internal_review',
      'stakeholder_review',
      'legal_review',
      'design',
      'ready_to_publish',
      'published'
    ],

    actions: {
      research: [
        { type: 'cms', action: 'create_task' },
        { type: 'slack', action: 'notify', message: 'Research started: {title}' }
      ],

      drafting: [
        { type: 'slack', action: 'notify', message: 'Drafting whitepaper: {title}' }
      ],

      legal_review: [
        { type: 'slack', action: 'notify', message: 'Legal review needed: {title}', mention: '@legal' }
      ],

      published: [
        { type: 'cms', action: 'mark_complete' },
        { type: 'social', action: 'create_post' },
        { type: 'slack', action: 'announce', message: 'Whitepaper published: {title}' }
      ]
    }
  }
};
