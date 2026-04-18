const fs = require('fs');

// Read ordered images
const images = fs.readFileSync('images-in-order.txt', 'utf8').split('\n').filter(Boolean);

console.log('🔍 Looking for pattern: 6, 9, 9 images in first three sections\n');
console.log('═'.repeat(70));

// First section: 6 images
console.log('\n📍 SECTION 1 (First 6 images):');
images.slice(0, 6).forEach((img, idx) => {
  console.log(`   ${idx + 1}. ${img}`);
});

// Second section: 9 images
console.log('\n📍 SECTION 2 (Next 9 images - positions 7-15):');
images.slice(6, 15).forEach((img, idx) => {
  console.log(`   ${idx + 7}. ${img}`);
});

// Third section: 9 images
console.log('\n📍 SECTION 3 (Next 9 images - positions 16-24):');
images.slice(15, 24).forEach((img, idx) => {
  console.log(`   ${idx + 16}. ${img}`);
});

console.log('\n═'.repeat(70));
console.log(`\nTotal so far: ${6 + 9 + 9} images`);
console.log(`Remaining: ${images.length - 24} images\n`);

console.log('💡 Now tell me:');
console.log('   - What is Section 1 about? (hero/home/landing?)');
console.log('   - What is Section 2 about? (about/biography?)');
console.log('   - What is Section 3 about? (awards/filmography?)');
console.log('   - Continue with the rest of the sections...');
