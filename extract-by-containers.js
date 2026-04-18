const fs = require('fs');

console.log('🔍 Extracting images grouped by container classes...\n');

const html = fs.readFileSync('canva-raw.html', 'utf8');

// Find all container divs with those long class names
const containerRegex = /class="([A-Za-z0-9_-]{20,})"/g;
const containers = new Map();

let match;
while ((match = containerRegex.exec(html)) !== null) {
  const className = match[1];
  if (className.length >= 20) {
    containers.set(className, []);
  }
}

console.log(`Found ${containers.size} potential container classes\n`);

// Now find images within each container context
const imageRegex = /_assets\/media\/([a-f0-9]+\.(jpg|png|webp))/g;

// For each container, find nearby images
containers.forEach((images, className) => {
  const classPos = html.indexOf(`class="${className}"`);
  if (classPos === -1) return;
  
  // Get a chunk of HTML around this class (next 5000 chars)
  const chunk = html.substring(classPos, classPos + 5000);
  
  // Find all images in this chunk
  let imgMatch;
  const imgRegex = /_assets\/media\/([a-f0-9]+\.(jpg|png|webp))/g;
  while ((imgMatch = imgRegex.exec(chunk)) !== null) {
    images.push(imgMatch[1]);
  }
});

// Filter to containers that have images
const containersWithImages = Array.from(containers.entries())
  .filter(([_, images]) => images.length > 0)
  .sort((a, b) => {
    // Sort by position in HTML
    const posA = html.indexOf(`class="${a[0]}"`);
    const posB = html.indexOf(`class="${b[0]}"`);
    return posA - posB;
  });

console.log(`Containers with images: ${containersWithImages.length}\n`);
console.log('═'.repeat(70));

containersWithImages.slice(0, 20).forEach(([className, images], idx) => {
  const uniqueImages = [...new Set(images)];
  console.log(`\n${idx + 1}. Container: ${className}`);
  console.log(`   Images: ${uniqueImages.length}`);
  if (uniqueImages.length <= 10) {
    uniqueImages.forEach((img, i) => {
      console.log(`      ${i + 1}. ${img}`);
    });
  } else {
    console.log(`      First 5: ${uniqueImages.slice(0, 5).join(', ')}`);
  }
});

console.log('\n═'.repeat(70));

// Save detailed analysis
const analysis = containersWithImages.map(([className, images]) => ({
  container: className,
  imageCount: [...new Set(images)].length,
  images: [...new Set(images)]
}));

fs.writeFileSync('container-analysis.json', JSON.stringify(analysis, null, 2));
console.log('\n✅ Saved container-analysis.json');

console.log('\n💡 Look for containers with 6, 9, 9 images!');
