#!/usr/bin/env node

/**
 * Content Lifecycle Manager
 * Tracks content through stages and triggers integrations at each transition.
 *
 * Configure these values in .env:
 * - CONTENT_LIFECYCLE_SLACK_CHANNEL (Slack channel for notifications)
 * - CMS_API_URL (your CMS API endpoint)
 * - CMS_API_KEY (your CMS API key)
 *
 * Usage:
 *   node content-lifecycle.js --title "Customer - Story" --type customer_story --stage research
 *   node content-lifecycle.js --slug "customer-story" --stage drafting
 */

require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });

const path = require('path');
const fs = require('fs');

const LIFECYCLE_FILE = path.join(__dirname, '../../tracking/content-lifecycle.json');
const SLACK_CHANNEL = process.env.CONTENT_LIFECYCLE_SLACK_CHANNEL || '';

function loadLifecycle() {
  try {
    if (fs.existsSync(LIFECYCLE_FILE)) {
      return JSON.parse(fs.readFileSync(LIFECYCLE_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('Error loading lifecycle:', err.message);
  }
  return { metadata: { version: '1.0', last_updated: new Date().toISOString() }, content: {} };
}

function saveLifecycle(lifecycle) {
  const dir = path.dirname(LIFECYCLE_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(LIFECYCLE_FILE, JSON.stringify(lifecycle, null, 2));
}

function generateSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function main() {
  const args = process.argv.slice(2);
  const params = {};

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace('--', '');
    params[key] = args[i + 1];
  }

  if (!params.stage) {
    console.error('Usage: node content-lifecycle.js --title "Title" --type content_type --stage stage_name');
    console.error('   or: node content-lifecycle.js --slug "slug" --stage stage_name');
    process.exit(1);
  }

  const lifecycle = loadLifecycle();
  const slug = params.slug || generateSlug(params.title || 'untitled');

  if (!lifecycle.content[slug]) {
    lifecycle.content[slug] = {
      title: params.title || slug,
      type: params.type || 'blog',
      current_stage: params.stage,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      metadata: {},
      integrations: {},
      stage_history: []
    };
    console.log(`Created new lifecycle entry: ${slug}`);
  }

  const content = lifecycle.content[slug];
  const previousStage = content.current_stage;
  content.current_stage = params.stage;
  content.updated_at = new Date().toISOString();
  content.stage_history.push({
    stage: params.stage,
    timestamp: new Date().toISOString(),
    notes: `Transitioned from ${previousStage}`
  });

  lifecycle.metadata.last_updated = new Date().toISOString();
  saveLifecycle(lifecycle);

  console.log(`${slug}: ${previousStage} → ${params.stage}`);
  console.log('Lifecycle updated.');
}

main();
