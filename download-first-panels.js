const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ergherh.my.canva.site/dr-ra-website/_assets/media/';
const orderedImages = fs.readFileSync('images-in-order.txt', 'utf8').split('\n').filter(Boolean);

// Create folders
const folders = [
  { name: 'panel-1', start: 0, count: 6 },
  { name: 'panel-2', start: 6, count: 9 },
  { name: 'panel-3', start: 15, count: 9 }
];

folders.forEach(folder => {
  const dir = path.join('public/canva-images', folder.name);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('📥 Downloading first 24 images (6+9+9)...\n');

let downloaded = 0;
let failed = 0;

function downloadImage(url, filepath, imageNum, panelName) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          downloaded++;
          console.log(`✅ ${panelName} - Image ${imageNum} downloaded`);
          resolve(true);
        });
      } else {
        failed++;
        console.log(`❌ ${panelName} - Image ${imageNum} failed (${res.statusCode})`);
        resolve(false);
      }
    }).on('error', (err) => {
      failed++;
      console.log(`❌ ${panelName} - Image ${imageNum} error: ${err.message}`);
      resolve(false);
    });
  });
}

async function downloadAll() {
  for (const folder of folders) {
    console.log(`\n📁 Downloading ${folder.name} (${folder.count} images)...`);
    
    const images = orderedImages.slice(folder.start, folder.start + folder.count);
    
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const url = baseUrl + img;
      const ext = path.extname(img);
      const filename = `image-${String(i + 1).padStart(3, '0')}${ext}`;
      const filepath = path.join('public/canva-images', folder.name, filename);
      
      await downloadImage(url, filepath, i + 1, folder.name);
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log('\n' + '═'.repeat(60));
  console.log(`✅ Downloaded: ${downloaded} images`);
  console.log(`❌ Failed: ${failed} images`);
  console.log('═'.repeat(60));
  
  console.log('\n📂 Check these folders:');
  console.log('   public/canva-images/panel-1/ (6 images)');
  console.log('   public/canva-images/panel-2/ (9 images)');
  console.log('   public/canva-images/panel-3/ (9 images)');
  console.log('\n💡 Open them in Finder to see the images!');
}

downloadAll();
