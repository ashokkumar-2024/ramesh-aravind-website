const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('🚀 Launching browser...\n');
  
  const browser = await puppeteer.launch({
    headless: false, // Show browser so you can see what's happening
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const page = await browser.newPage();
  
  console.log('📄 Loading Canva site...\n');
  await page.goto('https://ergherh.my.canva.site/dr-ra-website', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });
  
  console.log('⏳ Scrolling through page to load all images...\n');
  
  // Scroll to bottom slowly to trigger lazy loading
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
  
  console.log('⏫ Scrolling back to top...\n');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log('🔍 Extracting image structure...\n');
  
  // Extract all images with their positions
  const imageData = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    
    return images
      .filter(img => img.src && img.src.includes('_assets/media/'))
      .map((img, index) => {
        const rect = img.getBoundingClientRect();
        const src = img.src;
        const filename = src.split('/').pop();
        
        // Try to find parent section
        let section = img.closest('[class*="section"], [class*="panel"], [class*="container"]');
        let sectionClass = section ? section.className : 'unknown';
        
        return {
          index: index + 1,
          filename,
          src,
          top: Math.round(rect.top + window.scrollY),
          left: Math.round(rect.left),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          sectionClass
        };
      })
      .sort((a, b) => a.top - b.top); // Sort by vertical position
  });
  
  console.log(`✅ Found ${imageData.length} images\n`);
  
  // Group images by vertical position (sections)
  const sections = [];
  let currentSection = [];
  let lastTop = 0;
  const sectionGap = 500; // If images are more than 500px apart vertically, it's a new section
  
  imageData.forEach((img, idx) => {
    if (idx === 0 || img.top - lastTop < sectionGap) {
      currentSection.push(img);
    } else {
      sections.push([...currentSection]);
      currentSection = [img];
    }
    lastTop = img.top;
  });
  
  if (currentSection.length > 0) {
    sections.push(currentSection);
  }
  
  console.log('📊 Detected Sections:\n');
  console.log('═'.repeat(70));
  
  sections.forEach((section, idx) => {
    console.log(`\nSection ${idx + 1}: ${section.length} images`);
    console.log(`  Position: ${section[0].top}px from top`);
    console.log(`  Images:`);
    section.slice(0, 5).forEach((img, i) => {
      console.log(`    ${i + 1}. ${img.filename}`);
    });
    if (section.length > 5) {
      console.log(`    ... and ${section.length - 5} more`);
    }
  });
  
  console.log('\n' + '═'.repeat(70));
  
  // Save the data
  const output = {
    totalImages: imageData.length,
    totalSections: sections.length,
    sections: sections.map((section, idx) => ({
      sectionNumber: idx + 1,
      imageCount: section.length,
      images: section.map(img => img.filename)
    })),
    detailedData: imageData
  };
  
  fs.writeFileSync('canva-structure.json', JSON.stringify(output, null, 2));
  console.log('\n✅ Saved canva-structure.json');
  
  console.log('\n🎯 Summary:');
  sections.forEach((section, idx) => {
    console.log(`  Section ${idx + 1}: ${section.length} images`);
  });
  
  await browser.close();
  
  console.log('\n✅ Done! Check canva-structure.json for details');
})();
