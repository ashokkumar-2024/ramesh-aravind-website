const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read the ordered images
const orderedImages = fs.readFileSync('images-in-order.txt', 'utf8').split('\n').filter(Boolean);

console.log('🎯 MANUAL IMAGE MAPPING TOOL\n');
console.log('═'.repeat(60));
console.log(`Total images to map: ${orderedImages.length}\n`);

console.log('📋 Instructions:');
console.log('   1. Open https://ergherh.my.canva.site/dr-ra-website in your browser');
console.log('   2. For each section, tell me:');
console.log('      - Section name (e.g., "hero", "about", "awards")');
console.log('      - How many images are in that section');
console.log('   3. I\'ll map them automatically\n');
console.log('═'.repeat(60));
console.log('\nExample format:');
console.log('  Section: hero');
console.log('  Images: 5');
console.log('  (then next section...)\n');
console.log('═'.repeat(60));

const mapping = [];
let currentIndex = 0;

function askSection() {
  if (currentIndex >= orderedImages.length) {
    console.log('\n✅ All images mapped!');
    saveMappingAndReorganize();
    rl.close();
    return;
  }
  
  console.log(`\n📍 Current position: Image ${currentIndex + 1} of ${orderedImages.length}`);
  console.log(`   Remaining: ${orderedImages.length - currentIndex} images\n`);
  
  rl.question('Section name (hero/about/awards/filmography/gallery/speaking/books/contact): ', (section) => {
    rl.question('How many images in this section? ', (count) => {
      const numImages = parseInt(count);
      
      if (isNaN(numImages) || numImages <= 0) {
        console.log('❌ Invalid number, try again');
        askSection();
        return;
      }
      
      if (currentIndex + numImages > orderedImages.length) {
        console.log(`❌ Too many images! Only ${orderedImages.length - currentIndex} remaining`);
        askSection();
        return;
      }
      
      // Map these images to this section
      const sectionImages = orderedImages.slice(currentIndex, currentIndex + numImages);
      mapping.push({
        section: section.trim().toLowerCase(),
        images: sectionImages,
        startIndex: currentIndex,
        endIndex: currentIndex + numImages - 1
      });
      
      console.log(`✅ Mapped ${numImages} images to "${section}"`);
      console.log(`   Images ${currentIndex + 1} to ${currentIndex + numImages}`);
      
      currentIndex += numImages;
      askSection();
    });
  });
}

function saveMappingAndReorganize() {
  // Save the mapping
  fs.writeFileSync('image-mapping.json', JSON.stringify(mapping, null, 2));
  console.log('\n✅ Saved image-mapping.json');
  
  // Show summary
  console.log('\n📊 Mapping Summary:');
  console.log('═'.repeat(60));
  mapping.forEach(m => {
    console.log(`${m.section.padEnd(20)}: ${m.images.length} images (${m.startIndex + 1}-${m.endIndex + 1})`);
  });
  console.log('═'.repeat(60));
  
  console.log('\n💾 Ready to reorganize? Run: node apply-mapping.js');
}

// Start the process
console.log('\nReady? Press Enter to start...');
rl.question('', () => {
  askSection();
});
