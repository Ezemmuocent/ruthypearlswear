#!/usr/bin/env node
const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const root = process.cwd();
const apiDir = path.join(root, 'src', 'app', 'api');
const disabledDir = path.join(root, 'src', 'app', '.api_disabled_for_export');

function run(cmd) {
  cp.execSync(cmd, { stdio: 'inherit' });
}

let renamed = false;
try {
  if (fs.existsSync(apiDir)) {
    fs.renameSync(apiDir, disabledDir);
    renamed = true;
    console.log('Temporarily moved src/app/api -> src/app/.api_disabled_for_export');
  } else {
    console.log('No src/app/api found — continuing with export');
  }

  run('npm run build');
  run('npm run export');
} catch (err) {
  console.error('Export failed:', err);
  process.exitCode = 1;
} finally {
  if (renamed) {
    try {
      fs.renameSync(disabledDir, apiDir);
      console.log('Restored src/app/api');
    } catch (restoreErr) {
      console.error('Failed to restore src/app/api:', restoreErr);
      console.error('Please restore it manually from src/app/.api_disabled_for_export');
    }
  }
}
