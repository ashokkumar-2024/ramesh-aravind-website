const fs = require('fs');
const path = require('path');

// Source panels with filmography images
const sourcePanels = ['panel-2', 'panel-3', 'panel-4'];
const sourceBaseDir = 'public/canva-images';
const targetDir = 'public/filmography';

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}\n`);
}

// Film name mappings (from image filename to proper film name)
const filmMappings = {
  // Panel 2
  'amruthavarshni.png': { name: 'Amrutha Varshini', year: '1997', language: 'Kannada', role: 'Lead' },
  'hoo male.png': { name: 'Hoomale', year: '1998', language: 'Kannada', role: 'Actor/Writer' },
  'o mallige.png': { name: 'O Mallige', year: '1997', language: 'Kannada', role: 'Lead' },
  'rama shama bhama.png': { name: 'Rama Shama Bhama', year: '2005', language: 'Kannada', role: 'Director' },
  'rudra veena.png': { name: 'Rudraveena', year: '1988', language: 'Telugu', role: 'Supporting' },
  'sati leelavati.png': { name: 'Sathi Leelavathi', year: '1995', language: 'Tamil', role: 'Lead' },
  'sunder spawnpa paglu.png': { name: 'Sundara Swapnagalu', year: '1986', language: 'Kannada', role: 'Debut' },
  
  // Panel 3
  '100.jpg': { name: '100', year: '2019', language: 'Kannada', role: 'Director/Actor' },
  'Kd.png': { name: 'KD - The Devil', year: '2024', language: 'Kannada', role: 'Actor' },
  'apta mitra.jpg': { name: 'Apta Mitra', year: '2024', language: 'Kannada', role: 'Actor' },
  'maha sharanya haralya.jpg': { name: 'Maha Sharanya Haralya', year: '2023', language: 'Kannada', role: 'Actor' },
  'pushpka viman.jpg': { name: 'Pushpaka Vimana', year: '2017', language: 'Kannada', role: 'Actor' },
  'shivaji suratkal 1.jpg': { name: 'Shivaji Surathkal', year: '2020', language: 'Kannada', role: 'Lead' },
  'shivaji suratkal 2.jpg': { name: 'Shivaji Surathkal 2', year: '2023', language: 'Kannada', role: 'Lead' },
  'sudaranga jana.jpg': { name: 'Sundaranga Jaana', year: '2018', language: 'Kannada', role: 'Director' },
  'uthama villen.jpg': { name: 'Uttama Villain', year: '2015', language: 'Tamil', role: 'Director' },
  
  // Panel 4
  'bhoomi thayiya .png': { name: 'Bhoomi Thayiya Chochhala Maga', year: '1998', language: 'Kannada', role: 'Actor' },
  'duet.png': { name: 'Duet', year: '1994', language: 'Tamil', role: 'Lead' },
  'kotigalu saar kotigalu.jpg': { name: 'Kotigalu Saar Kotigalu', year: '2001', language: 'Kannada', role: 'Actor' },
  'namoora mandra hove.png': { name: 'Nammoora Mandara Hoove', year: '1997', language: 'Kannada', role: 'Lead' },
  'pancha tantritam.jpg': { name: 'Pancha Tantra', year: '2019', language: 'Kannada', role: 'Actor' },
};

console.log('Organizing filmography images...\n');

let organized = 0;
let skipped = 0;

// Process each source panel
sourcePanels.forEach(panelName => {
  const panelPath = path.join(sourceBaseDir, panelName);
  
  if (!fs.existsSync(panelPath)) {
    console.log(`⚠ Panel not found: ${panelName}`);
    return;
  }
  
  const files = fs.readdirSync(panelPath);
  
  files.forEach(file => {
    if (!file.match(/\.(jpg|png)$/i)) return;
    
    const sourcePath = path.join(panelPath, file);
    const mapping = filmMappings[file];
    
    if (!mapping) {
      console.log(`⚠ No mapping found for: ${file}`);
      skipped++;
      return;
    }
    
    // Create clean filename from film name
    const cleanName = mapping.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    const ext = path.extname(file);
    const targetFilename = `${cleanName}${ext}`;
    const targetPath = path.join(targetDir, targetFilename);
    
    // Copy file
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✓ ${file} → ${targetFilename}`);
    console.log(`  ${mapping.name} (${mapping.year}) - ${mapping.language}`);
    organized++;
  });
});

console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`Images organized: ${organized}`);
console.log(`Images skipped: ${skipped}`);
console.log(`Target directory: ${targetDir}`);

// Generate the films array for the component
console.log('\n' + '='.repeat(60));
console.log('FILMS ARRAY FOR COMPONENT');
console.log('='.repeat(60));

const filmsArray = Object.entries(filmMappings).map(([filename, data]) => {
  const cleanName = data.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const ext = path.extname(filename);
  
  return {
    title: data.name,
    year: data.year,
    language: data.language,
    role: data.role,
    image: `/filmography/${cleanName}${ext}`
  };
}).sort((a, b) => parseInt(a.year) - parseInt(b.year));

console.log('\nconst films = [');
filmsArray.forEach((film, index) => {
  const comma = index < filmsArray.length - 1 ? ',' : '';
  console.log(`  { title: "${film.title}", year: "${film.year}", language: "${film.language}", role: "${film.role}", image: "${film.image}" }${comma}`);
});
console.log(']');

console.log('\n✅ Organization complete!');
