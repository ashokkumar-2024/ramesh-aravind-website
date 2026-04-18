const fs = require('fs');
const path = require('path');

const targetDir = 'public/tv-shows';

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}\n`);
}

// TV Show mappings
const tvShowMappings = [
  // Weekend with Ramesh seasons
  { source: 'public/canva-images/panel-10/panel-10-001.png', target: 'weekend-with-ramesh-season-1.png', title: 'Weekend With Ramesh - Season 1' },
  { source: 'public/canva-images/panel-10/panel-10-003.png', target: 'weekend-with-ramesh-season-2.png', title: 'Weekend With Ramesh - Season 2' },
  { source: 'public/canva-images/panel-10/panel-10-005.png', target: 'weekend-with-ramesh-season-3.png', title: 'Weekend With Ramesh - Season 3' },
  { source: 'public/canva-images/panel-10/panel-10-007.png', target: 'weekend-with-ramesh-season-4.png', title: 'Weekend With Ramesh - Season 4' },
  { source: 'public/canva-images/panel-10/panel-10-009.png', target: 'weekend-with-ramesh-season-5.png', title: 'Weekend With Ramesh - Season 5' },
  
  // Other shows
  { source: 'public/canva-images/panel-11/panel-11-001.png', target: 'kannadada-kotyadhipati.png', title: 'Kannadada Kotyadhipati' },
  { source: 'public/canva-images/panel-11/panel-11-002.jpg', target: 'raja-rani.jpg', title: 'Raja Rani' },
  { source: 'public/canva-images/panel-11/panel-11-003.jpg', target: 'preetyinda-ramesh.jpg', title: 'Preetyinda Ramesh' },
  { source: 'public/canva-images/panel-11/panel-11-004.png', target: 'mahanati.png', title: 'Mahanati' },
];

console.log('Organizing TV show images...\n');

let organized = 0;
let skipped = 0;

tvShowMappings.forEach(mapping => {
  if (!fs.existsSync(mapping.source)) {
    console.log(`⚠ Source not found: ${mapping.source}`);
    skipped++;
    return;
  }
  
  const targetPath = path.join(targetDir, mapping.target);
  
  // Copy file
  fs.copyFileSync(mapping.source, targetPath);
  console.log(`✓ ${path.basename(mapping.source)} → ${mapping.target}`);
  console.log(`  ${mapping.title}`);
  organized++;
});

console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`Images organized: ${organized}`);
console.log(`Images skipped: ${skipped}`);
console.log(`Target directory: ${targetDir}`);

console.log('\n' + '='.repeat(60));
console.log('TV SHOWS ARRAY FOR COMPONENT');
console.log('='.repeat(60));

console.log(`
const tvShows = [
  {
    title: "Weekend With Ramesh - Season 1",
    description: "Celebrity talk show celebrating achievers",
    seasons: "Season 1",
    image: "/tv-shows/weekend-with-ramesh-season-1.png",
    videoUrl: "https://www.youtube.com/watch?v=EhZNxQmTbmA&list=PLuOI2Oe0kP-GYUewox2J25rONExGW4hX4"
  },
  {
    title: "Weekend With Ramesh - Season 2",
    description: "Continuing the journey of inspiring stories",
    seasons: "Season 2",
    image: "/tv-shows/weekend-with-ramesh-season-2.png",
    videoUrl: "https://www.youtube.com/watch?v=SKnsC6owV-Q"
  },
  {
    title: "Weekend With Ramesh - Season 3",
    description: "More inspiring conversations with achievers",
    seasons: "Season 3",
    image: "/tv-shows/weekend-with-ramesh-season-3.png",
    videoUrl: "https://www.youtube.com/watch?v=EhZNxQmTbmA"
  },
  {
    title: "Weekend With Ramesh - Season 4",
    description: "Celebrating success stories and achievements",
    seasons: "Season 4",
    image: "/tv-shows/weekend-with-ramesh-season-4.png",
    videoUrl: "https://www.youtube.com/watch?v=EhZNxQmTbmA"
  },
  {
    title: "Weekend With Ramesh - Season 5",
    description: "Latest season of the popular talk show",
    seasons: "Season 5",
    image: "/tv-shows/weekend-with-ramesh-season-5.png",
    videoUrl: "https://www.youtube.com/watch?v=EhZNxQmTbmA"
  },
  {
    title: "Kannadada Kotyadhipati",
    description: "Kannada version of Who Wants to Be a Millionaire",
    seasons: "Multiple Seasons",
    image: "/tv-shows/kannadada-kotyadhipati.png",
    videoUrl: "https://www.youtube.com/watch?v=lKPXmNthRfY"
  },
  {
    title: "Raja Rani",
    description: "Entertainment game show",
    seasons: "Season 1",
    image: "/tv-shows/raja-rani.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Y9iUH4dTOFM"
  },
  {
    title: "Preetyinda Ramesh",
    description: "Connecting with audiences through stories",
    seasons: "Season 1",
    image: "/tv-shows/preetyinda-ramesh.jpg",
    videoUrl: "https://www.youtube.com/watch?v=DQmmA-6TaIw"
  },
  {
    title: "Mahanati",
    description: "Celebrating legendary personalities",
    seasons: "Season 1",
    image: "/tv-shows/mahanati.png",
    videoUrl: "https://www.youtube.com/watch?v=eOMA6TGW9Nk"
  }
]
`);

console.log('\n✅ Organization complete!');
