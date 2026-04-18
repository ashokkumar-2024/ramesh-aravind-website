const fs = require('fs');
const path = require('path');

const canvaDir = 'public/canva-images';

console.log('Starting final cleanup of canva-images folder...\n');

// Items to keep
const keepItems = [
  'panel-1', 'panel-2', 'panel-3', 'panel-4', 'panel-5',
  'panel-7', 'panel-9', 'panel-10', 'panel-11', 'panel-12',
  'panel-13', 'panel-14'
];

// Get all items in the directory
const allItems = fs.readdirSync(canvaDir);

let removed = 0;
let kept = 0;

allItems.forEach(item => {
  const itemPath = path.join(canvaDir, item);
  
  // Skip hidden files like .DS_Store
  if (item.startsWith('.')) {
    return;
  }
  
  // Keep only the panel folders we want
  if (keepItems.includes(item)) {
    console.log(`✓ Keeping: ${item}`);
    kept++;
  } else {
    // Remove everything else
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      fs.rmSync(itemPath, { recursive: true, force: true });
      console.log(`✗ Removed folder: ${item}`);
    } else {
      fs.unlinkSync(itemPath);
      console.log(`✗ Removed file: ${item}`);
    }
    removed++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('CLEANUP SUMMARY');
console.log('='.repeat(60));
console.log(`Items kept: ${kept}`);
console.log(`Items removed: ${removed}`);

// Now verify each panel has properly named files
console.log('\n' + '='.repeat(60));
console.log('VERIFYING PANEL CONTENTS');
console.log('='.repeat(60));

let totalImages = 0;
keepItems.forEach(panelName => {
  const panelPath = path.join(canvaDir, panelName);
  const files = fs.readdirSync(panelPath)
    .filter(f => f.match(/\.(jpg|png)$/))
    .sort();
  
  totalImages += files.length;
  console.log(`\n${panelName}: ${files.length} images`);
  
  // Show first 3 files as sample
  files.slice(0, 3).forEach(f => console.log(`  - ${f}`));
  if (files.length > 3) {
    console.log(`  ... and ${files.length - 3} more`);
  }
});

console.log('\n' + '='.repeat(60));
console.log(`Total panels: ${keepItems.length}`);
console.log(`Total images: ${totalImages}`);
console.log('='.repeat(60));
