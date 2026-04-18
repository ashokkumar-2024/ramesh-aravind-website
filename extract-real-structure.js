const fs = require('fs');
const https = require('https');

console.log('🔍 Fetching Canva site with full rendering...\n');

// We need to actually parse the site structure properly
// Let me extract the page data more intelligently

const html = fs.readFileSync('canva-site-structure.html', 'utf8');

// The Canva site has a data structure - let's parse it properly
// Look for the pages/sections structure
const pageDataMatch = html.match(/\{"A":\{"A":\[([^\]]+)\]/);

// Extract sections/pages information
console.log('Analyzing site structure...\n');

// Find all text content that might indicate sections
const sectionKeywords = [
  'hero', 'home', 'landing',
  'about', 'biography', 'profile',
  'award', 'recognition', 'achievement',
  'film', 'movie', 'cinema', 'director',
  'gallery', 'photo', 'image',
  'speak', 'conference', 'event',
  'book', 'author', 'publish',
  'contact', 'email', 'phone'
];

// Try to find text content near images
const imageContexts = [];
const imageRegex = /"url":"_assets\/media\/([a-f0-9]+\.(jpg|png|webp))"/g;
let match;

while ((match = imageRegex.exec(html)) !== null) {
  const filename = match[1];
  const hash = filename.split('.')[0];
  
  // Get 2000 characters before and after for context
  const contextStart = Math.max(0, match.index - 2000);
  const contextEnd = Math.min(html.length, match.index + 2000);
  const context = html.substring(contextStart, contextEnd).toLowerCase();
  
  // Check which keywords appear near this image
  const nearbyKeywords = sectionKeywords.filter(kw => context.includes(kw));
  
  imageContexts.push({
    filename,
    hash,
    position: match.index,
    keywords: nearbyKeywords,
    context: context.substring(0, 200) // First 200 chars for debugging
  });
}

// Get unique images
const uniqueImages = new Map();
imageContexts.forEach(item => {
  if (!uniqueImages.has(item.hash)) {
    uniqueImages.set(item.hash, item);
  }
});

console.log(`Found ${uniqueImages.size} unique images\n`);

// Analyze keyword patterns
const keywordCounts = {};
sectionKeywords.forEach(kw => {
  keywordCounts[kw] = 0;
});

uniqueImages.forEach(img => {
  img.keywords.forEach(kw => {
    keywordCounts[kw]++;
  });
});

console.log('📊 Keyword frequency in image contexts:');
Object.entries(keywordCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([kw, count]) => {
    if (count > 0) {
      console.log(`   ${kw.padEnd(15)}: ${count} images`);
    }
  });

// Save detailed analysis
const analysis = {
  totalImages: uniqueImages.size,
  images: Array.from(uniqueImages.values()).map(img => ({
    filename: img.filename,
    keywords: img.keywords,
    position: img.position
  }))
};

fs.writeFileSync('detailed-image-analysis.json', JSON.stringify(analysis, null, 2));
console.log('\n✅ Saved detailed-image-analysis.json');

// Now let's try to find the actual page/section structure
console.log('\n🔍 Looking for page structure...\n');

// Search for common Canva page markers
const markers = [
  'page', 'section', 'panel', 'block', 'container',
  'hero', 'header', 'footer', 'content'
];

markers.forEach(marker => {
  const regex = new RegExp(`"[^"]*${marker}[^"]*"`, 'gi');
  const matches = html.match(regex);
  if (matches && matches.length > 0) {
    console.log(`${marker}: Found ${matches.length} references`);
    // Show first few unique matches
    const unique = [...new Set(matches)].slice(0, 3);
    unique.forEach(m => console.log(`   ${m}`));
  }
});

console.log('\n💡 Next step: We need to manually map images from the actual Canva site');
console.log('   Visit: https://ergherh.my.canva.site/dr-ra-website');
console.log('   Right-click images → "Copy Image Address" to get the actual URLs');
