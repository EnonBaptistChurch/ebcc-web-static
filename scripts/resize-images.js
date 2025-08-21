// scripts/resize-images.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Common screen widths for responsiveness
const sizes = [320, 480, 640, 768, 1024, 1280, 1440, 1920];  

const inputDir = './public/images';
const outputDir = './public/images';

// Ensure output folder exists
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Loop through all images in inputDir
fs.readdirSync(inputDir).forEach(file => {
  sizes.forEach(size => {
    sharp(path.join(inputDir, file))
      .resize(size)
      .toFile(path.join(outputDir, `${path.parse(file).name}-${size}.webp`))
      .then(() => console.log(`Generated ${file} at ${size}px`))
      .catch(err => console.error(err));
  });
});
