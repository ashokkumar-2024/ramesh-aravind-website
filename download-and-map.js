const https = require('https');
const fs = require('fs');
const path = require('path');

console.log('🌐 Downloading images from Canva site in order...\n');

// Read the ordered list
const orderedImages = fs.readFileSync('images-in-order.txt', 'utf8').split('\n').filter(Boolean);

console.log(`Found ${orderedImages.length} images in order\n`);

// Based on your input: Panel 1 has 6 images, Panel 2 has 9 images
const sections = [
  { name: 'panel-1', start: 0, count: 6, description: 'First Panel' },
  { name: 'panel-2', start: 6, count: 9, description: 'Second Panel' },
  { name: 'panel-3', start: 15, count: 9, description: 'Third Panel' },
  // We'll add more as you tell us
];

console.log('📋 Current mapping:');
sections.forEach(section => {
  const end = section.start + section.count;
  console.log(`\n${section.description} (${section.name}):`);
  console.log(`  Images ${section.start + 1} to ${end}`);
  console.log(`  Files:`);
  
  orderedImages.slice(section.start, end).forEach((img, idx) => {
    console.log(`    ${section.start + idx + 1}. ${img}`);
  });
});

console.log('\n\n💡 Next steps:');
console.log('1. Tell me what Panel 1 is about (hero/about/awards/etc.)');
console.log('2. Tell me what Panel 2 is about');
console.log('3. Tell me what Panel 3 is about');
console.log('4. Continue with remaining panels and their image counts');
console.log('\nThen I\'ll reorganize everything correctly!');
