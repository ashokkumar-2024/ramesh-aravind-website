const fs = require('fs');
const path = require('path');

const targetDir = 'public/gallery-new';

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}\n`);
}

// Source panels
const sourcePanels = ['panel-12', 'panel-13', 'panel-14'];
const sourceBaseDir = 'public/canva-images';

console.log('Organizing gallery images...\n');

let organized = 0;
let imageNumber = 1;

// Process each panel
sourcePanels.forEach(panelName => {
  const panelPath = path.join(sourceBaseDir, panelName);
  
  if (!fs.existsSync(panelPath)) {
    console.log(`⚠ Panel not found: ${panelName}`);
    return;
  }
  
  const files = fs.readdirSync(panelPath)
    .filter(f => f.match(/\.(jpg|png)$/i))
    .sort();
  
  console.log(`Processing ${panelName}: ${files.length} images`);
  
  files.forEach(file => {
    const sourcePath = path.join(panelPath, file);
    const ext = path.extname(file);
    const targetFilename = `gallery-${String(imageNumber).padStart(3, '0')}${ext}`;
    const targetPath = path.join(targetDir, targetFilename);
    
    // Copy file
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`  ✓ ${file} → ${targetFilename}`);
    organized++;
    imageNumber++;
  });
  console.log('');
});

console.log('='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`Total images organized: ${organized}`);
console.log(`Target directory: ${targetDir}`);
console.log('\n✅ Gallery organization complete!');
