const https = require('https');
const fs = require('fs');

console.log('🌐 Fetching Canva site properly...\n');

const url = 'https://ergherh.my.canva.site/dr-ra-website';

https.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`✅ Downloaded ${data.length} bytes\n`);
    
    // Save the raw HTML
    fs.writeFileSync('canva-raw.html', data);
    
    // Extract the main data structure
    // Canva embeds data in window['data']
    const dataMatch = data.match(/window\['data'\]\s*=\s*JSON\.parse\('(.+?)'\);/s);
    
    if (dataMatch) {
      console.log('✅ Found embedded data structure\n');
      
      // The data is escaped JSON, we need to unescape it
      let jsonStr = dataMatch[1];
      
      // Unescape the JSON
      jsonStr = jsonStr
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');
      
      try {
        const siteData = JSON.parse(jsonStr);
        fs.writeFileSync('canva-data.json', JSON.stringify(siteData, null, 2));
        console.log('✅ Saved canva-data.json\n');
        
        // Now analyze the structure
        console.log('📊 Analyzing site structure...\n');
        
        // Look for pages/sections
        if (siteData.A && siteData.A.A) {
          console.log(`Found ${siteData.A.A.length} main sections/pages\n`);
          
          // Extract image references from each section
          const sections = siteData.A.A;
          sections.forEach((section, idx) => {
            console.log(`Section ${idx + 1}:`);
            // Try to find section title or identifier
            const sectionStr = JSON.stringify(section);
            
            // Count images in this section
            const imageMatches = sectionStr.match(/_assets\/media\/[a-f0-9]+\.(jpg|png|webp)/g);
            if (imageMatches) {
              console.log(`  Images: ${imageMatches.length}`);
              console.log(`  First few: ${imageMatches.slice(0, 3).join(', ')}`);
            }
            console.log('');
          });
        }
        
      } catch (err) {
        console.error('❌ Error parsing JSON:', err.message);
        console.log('Trying alternative extraction...\n');
        
        // Alternative: just extract all image URLs in order
        const imageRegex = /_assets\/media\/([a-f0-9]+\.(jpg|png|webp))/g;
        const images = [];
        let match;
        
        while ((match = imageRegex.exec(data)) !== null) {
          images.push(match[1]);
        }
        
        // Get unique images in order of appearance
        const uniqueImages = [...new Set(images)];
        console.log(`Found ${uniqueImages.length} unique images in order of appearance\n`);
        
        // Save ordered list
        fs.writeFileSync('images-in-order.txt', uniqueImages.join('\n'));
        console.log('✅ Saved images-in-order.txt');
        console.log('\nFirst 20 images in order:');
        uniqueImages.slice(0, 20).forEach((img, idx) => {
          console.log(`  ${idx + 1}. ${img}`);
        });
      }
    } else {
      console.log('❌ Could not find data structure\n');
      console.log('Extracting images in order of appearance...\n');
      
      const imageRegex = /_assets\/media\/([a-f0-9]+\.(jpg|png|webp))/g;
      const images = [];
      let match;
      
      while ((match = imageRegex.exec(data)) !== null) {
        images.push(match[1]);
      }
      
      const uniqueImages = [...new Set(images)];
      console.log(`Found ${uniqueImages.length} unique images\n`);
      
      fs.writeFileSync('images-in-order.txt', uniqueImages.join('\n'));
      console.log('✅ Saved images-in-order.txt');
    }
    
    console.log('\n💡 SOLUTION:');
    console.log('   1. Open the Canva site in your browser');
    console.log('   2. Scroll through each section');
    console.log('   3. Tell me what you see in each section');
    console.log('   4. I\'ll map the images correctly based on your description');
  });
  
}).on('error', (err) => {
  console.error('❌ Error:', err.message);
});
