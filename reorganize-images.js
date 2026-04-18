const fs = require('fs');
const path = require('path');

// Read the JSON mapping file
const mappingData = JSON.parse(fs.readFileSync('json', 'utf8'));

// Source directory with all images
const sourceDir = 'public/canva-images/all-images-backup';
const targetBaseDir = 'public/canva-images';

console.log(`Total panels: ${mappingData.totalPanels}`);
console.log(`Total unique images: ${mappingData.totalImages}`);
console.log('');

// Track statistics
let stats = {
  found: 0,
  missing: 0,
  organized: 0,
  missingFiles: []
};

// Process each panel
mappingData.panels.forEach(panel => {
  const panelDir = path.join(targetBaseDir, panel.name);
  
  // Create panel directory if it doesn't exist
  if (!fs.existsSync(panelDir)) {
    fs.mkdirSync(panelDir, { recursive: true });
    console.log(`Created directory: ${panelDir}`);
  }
  
  console.log(`\nProcessing ${panel.name} (${panel.imageCount} images):`);
  
  // Copy each image to the panel directory
  panel.images.forEach((filename, index) => {
    const sourcePath = path.join(sourceDir, filename);
    const ext = path.extname(filename);
    const targetFilename = `${panel.name}-${String(index + 1).padStart(3, '0')}${ext}`;
    const targetPath = path.join(panelDir, targetFilename);
    
    // Check if source file exists
    if (fs.existsSync(sourcePath)) {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`  ✓ ${filename} → ${targetFilename}`);
      stats.found++;
      stats.organized++;
    } else {
      console.log(`  ✗ MISSING: ${filename}`);
      stats.missing++;
      stats.missingFiles.push({
        panel: panel.name,
        filename: filename,
        url: panel.allImageData.find(img => img.filename === filename)?.src
      });
    }
  });
});

// Print summary
console.log('\n' + '='.repeat(60));
console.log('SUMMARY:');
console.log('='.repeat(60));
console.log(`Total images found and organized: ${stats.organized}`);
console.log(`Total images missing: ${stats.missing}`);
console.log('');

if (stats.missing > 0) {
  console.log('Missing images:');
  stats.missingFiles.forEach(item => {
    console.log(`  Panel: ${item.panel}`);
    console.log(`  File: ${item.filename}`);
    console.log(`  URL: ${item.url}`);
    console.log('');
  });
  
  // Save missing images list to a file
  fs.writeFileSync(
    'missing-images.json',
    JSON.stringify(stats.missingFiles, null, 2)
  );
  console.log('Missing images list saved to: missing-images.json');
}

console.log('\nReorganization complete!');
