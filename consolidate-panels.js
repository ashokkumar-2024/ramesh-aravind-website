const fs = require('fs');
const path = require('path');

const sourceDir = 'public/canva-images';

// Based on user feedback: actual site only has 12 panels
// Panels 5-6, 7-8, 12-13 are duplicates
// We should keep only panels 1-12 and remove duplicates

console.log('Consolidating panels to match actual Canva site structure...\n');

// Remove duplicate panels (keep the first occurrence)
const panelsToRemove = ['panel-6', 'panel-8', 'panel-13', 'panel-14', 'panel-15'];

let removed = 0;

panelsToRemove.forEach(panelName => {
  const panelPath = path.join(sourceDir, panelName);
  
  if (fs.existsSync(panelPath)) {
    // Remove directory and all contents
    fs.rmSync(panelPath, { recursive: true, force: true });
    console.log(`✗ Removed: ${panelName} (duplicate or extra panel)`);
    removed++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('CONSOLIDATION COMPLETE');
console.log('='.repeat(60));
console.log(`Panels removed: ${removed}`);
console.log('Remaining panels: 1-5, 7, 9-12 (matching actual Canva site)');
console.log('\nFinal structure:');

// List remaining panels
const panels = fs.readdirSync(sourceDir)
  .filter(name => name.startsWith('panel-'))
  .sort((a, b) => {
    const numA = parseInt(a.split('-')[1]);
    const numB = parseInt(b.split('-')[1]);
    return numA - numB;
  });

panels.forEach(panel => {
  const panelPath = path.join(sourceDir, panel);
  const files = fs.readdirSync(panelPath).filter(f => f.match(/\.(jpg|png)$/));
  console.log(`  ${panel}: ${files.length} images`);
});
