// Script to convert SVG to ICO favicon
// Install dependencies first:
// npm install sharp svg2img

const fs = require('fs');
const path = require('path');
const svg2img = require('svg2img');
const sharp = require('sharp');

// Read the SVG file
const svgContent = fs.readFileSync(path.join(__dirname, 'public', 'favicon.svg'), 'utf8');

// Convert SVG to PNG first (multiple sizes)
svg2img(svgContent, {width: 256, height: 256}, (error, buffer) => {
  if (error) {
    console.error('Error converting SVG to PNG:', error);
    return;
  }

  // Save the buffer as PNG
  const pngPath = path.join(__dirname, 'public', 'favicon.png');
  fs.writeFileSync(pngPath, buffer);

  // Convert PNG to ICO (which supports multiple sizes)
  sharp(pngPath)
    .resize(16, 16)
    .toFile(path.join(__dirname, 'public', 'favicon.ico'))
    .then(() => {
      console.log('Favicon.ico generated successfully!');
      // Clean up the temporary PNG file
      fs.unlinkSync(pngPath);
    })
    .catch(err => {
      console.error('Error generating ICO file:', err);
    });
}); 