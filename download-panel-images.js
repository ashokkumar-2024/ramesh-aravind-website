const fs = require('fs');
const path = require('path');
const https = require('https');

// Read the JSON mapping file
const mappingData = JSON.parse(fs.readFileSync('json', 'utf8'));

const targetBaseDir = 'public/canva-images';

console.log(`Total panels: ${mappingData.totalPanels}`);
console.log(`Total unique images: ${mappingData.totalImages}`);
console.log('');

// Track statistics
let stats = {
  downloaded: 0,
  skipped: 0,
  failed: 0,
  total: 0
};

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if error
      reject(err);
    });
  });
}

// Function to process panel
async function processPanel(panel) {
  const panelDir = path.join(targetBaseDir, panel.name);
  
  // Create panel directory if it doesn't exist
  if (!fs.existsSync(panelDir)) {
    fs.mkdirSync(panelDir, { recursive: true });
    console.log(`Created directory: ${panelDir}`);
  }
  
  console.log(`\nProcessing ${panel.name} (${panel.imageCount} images):`);
  
  // Download each image
  for (let index = 0; index < panel.images.length; index++) {
    const filename = panel.images[index];
    const ext = path.extname(filename);
    const targetFilename = `${panel.name}-${String(index + 1).padStart(3, '0')}${ext}`;
    const targetPath = path.join(panelDir, targetFilename);
    
    stats.total++;
    
    // Check if file already exists
    if (fs.existsSync(targetPath)) {
      console.log(`  ⊙ SKIP: ${targetFilename} (already exists)`);
      stats.skipped++;
      continue;
    }
    
    // Find the URL for this image
    const imageData = panel.allImageData.find(img => img.filename === filename);
    if (!imageData || !imageData.src) {
      console.log(`  ✗ FAIL: ${filename} (no URL found)`);
      stats.failed++;
      continue;
    }
    
    // Download the image
    try {
      await downloadImage(imageData.src, targetPath);
      console.log(`  ✓ ${filename} → ${targetFilename}`);
      stats.downloaded++;
    } catch (error) {
      console.log(`  ✗ FAIL: ${filename} (${error.message})`);
      stats.failed++;
    }
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Main function
async function main() {
  for (const panel of mappingData.panels) {
    await processPanel(panel);
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY:');
  console.log('='.repeat(60));
  console.log(`Total images processed: ${stats.total}`);
  console.log(`Downloaded: ${stats.downloaded}`);
  console.log(`Skipped (already exist): ${stats.skipped}`);
  console.log(`Failed: ${stats.failed}`);
  console.log('\nDownload complete!');
}

main().catch(console.error);
