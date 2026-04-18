const fs = require('fs');
const path = require('path');

const sourceDir = 'public/canva-images';

console.log('Fixing panel structure to match actual Canva site...\n');

// Remove duplicate panels (6, 8, 13) and keep unique ones
// Then rename remaining panels to be sequential 1-12

const operations = [
  // Remove duplicates
  { action: 'remove', panel: 'panel-6', reason: 'duplicate of panel-5' },
  { action: 'remove', panel: 'panel-8', reason: 'duplicate of panel-7' },
  { action: 'remove', panel: 'panel-13', reason: 'duplicate of panel-12' },
  
  // Rename to make sequential (panel-9 stays, panel-10 stays, panel-11 stays, panel-12 stays)
  // panel-14 becomes panel-13, panel-15 becomes panel-14
  { action: 'rename', from: 'panel-14', to: 'panel-13' },
  { action: 'rename', from: 'panel-15', to: 'panel-14' },
];

operations.forEach(op => {
  if (op.action === 'remove') {
    const panelPath = path.join(sourceDir, op.panel);
    if (fs.existsSync(panelPath)) {
      fs.rmSync(panelPath, { recursive: true, force: true });
      console.log(`✗ Removed: ${op.panel} (${op.reason})`);
    }
  } else if (op.action === 'rename') {
    const fromPath = path.join(sourceDir, op.from);
    const toPath = path.join(sourceDir, op.to);
    if (fs.existsSync(fromPath)) {
      fs.renameSync(fromPath, toPath);
      console.log(`→ Renamed: ${op.from} → ${op.to}`);
      
      // Also rename files inside
      const files = fs.readdirSync(toPath);
      files.forEach(file => {
        if (file.match(/^panel-\d+-\d+\.(jpg|png)$/)) {
          const newFilename = file.replace(op.from, op.to);
          fs.renameSync(
            path.join(toPath, file),
            path.join(toPath, newFilename)
          );
        }
      });
    }
  }
});

console.log('\n' + '='.repeat(60));
console.log('FINAL STRUCTURE');
console.log('='.repeat(60));

// List all panels
const panels = fs.readdirSync(sourceDir)
  .filter(name => name.startsWith('panel-'))
  .sort((a, b) => {
    const numA = parseInt(a.split('-')[1]);
    const numB = parseInt(b.split('-')[1]);
    return numA - numB;
  });

let totalImages = 0;
panels.forEach(panel => {
  const panelPath = path.join(sourceDir, panel);
  const files = fs.readdirSync(panelPath).filter(f => f.match(/\.(jpg|png)$/));
  totalImages += files.length;
  console.log(`  ${panel}: ${files.length} images`);
});

console.log('\n' + '='.repeat(60));
console.log(`Total panels: ${panels.length}`);
console.log(`Total images: ${totalImages}`);
console.log('='.repeat(60));
