const fs = require('fs');
const path = require('path');

const targetBaseDir = 'public/canva-images';

// Directories to clean
const panelDirs = [
  'panel-1', 'panel-2', 'panel-3', 'panel-4', 'panel-5',
  'panel-6', 'panel-7', 'panel-8', 'panel-9', 'panel-10',
  'panel-11', 'panel-12', 'panel-13', 'panel-14', 'panel-15'
];

let stats = {
  removed: 0,
  kept: 0
};

console.log('Cleaning up old incorrectly named files...\n');

panelDirs.forEach(panelName => {
  const panelDir = path.join(targetBaseDir, panelName);
  
  if (!fs.existsSync(panelDir)) {
    return;
  }
  
  const files = fs.readdirSync(panelDir);
  
  files.forEach(file => {
    // Keep only files that match the pattern: panel-X-NNN.ext
    const correctPattern = new RegExp(`^${panelName}-\\d{3}\\.(jpg|png)$`);
    
    if (!correctPattern.test(file)) {
      const filePath = path.join(panelDir, file);
      fs.unlinkSync(filePath);
      console.log(`  ✗ Removed: ${panelName}/${file}`);
      stats.removed++;
    } else {
      stats.kept++;
    }
  });
});

console.log('\n' + '='.repeat(60));
console.log('CLEANUP SUMMARY:');
console.log('='.repeat(60));
console.log(`Files removed: ${stats.removed}`);
console.log(`Files kept: ${stats.kept}`);
console.log('\nCleanup complete!');
