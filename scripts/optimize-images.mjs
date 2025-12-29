import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function findImages(dir) {
  const images = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subImages = await findImages(fullPath);
      images.push(...subImages);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (IMAGE_EXTENSIONS.includes(ext)) {
        images.push(fullPath);
      }
    }
  }

  return images;
}

async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(new RegExp(`${ext}$`), '.webp');

  const originalBuffer = await fs.readFile(imagePath);
  const originalSize = originalBuffer.length;

  // Convert to WebP with good quality
  await sharp(originalBuffer)
    .webp({ quality: 85, effort: 6 })
    .toFile(webpPath);

  const optimizedBuffer = await fs.readFile(webpPath);
  const optimizedSize = optimizedBuffer.length;

  // Delete the original file
  await fs.unlink(imagePath);

  return {
    original: path.relative(path.resolve(__dirname, '..'), imagePath),
    webp: path.relative(path.resolve(__dirname, '..'), webpPath),
    originalSize,
    optimizedSize,
  };
}

function prettySize(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function run() {
  console.log('Finding all images in src/assets...');
  const images = await findImages(ASSETS_DIR);
  console.log(`Found ${images.length} images to convert\n`);

  const results = [];
  let successCount = 0;
  let failCount = 0;

  for (const imagePath of images) {
    try {
      const result = await convertToWebP(imagePath);
      results.push(result);
      successCount++;

      const saved = result.originalSize - result.optimizedSize;
      const savedPercent = ((saved / result.originalSize) * 100).toFixed(1);

      console.log(
        `✔ ${result.original} → ${result.webp}`
      );
      console.log(
        `  ${prettySize(result.originalSize)} → ${prettySize(result.optimizedSize)} (saved ${prettySize(saved)} / ${savedPercent}%)\n`
      );
    } catch (error) {
      failCount++;
      console.error(`✖ Failed to convert ${path.relative(path.resolve(__dirname, '..'), imagePath)}:`, error.message, '\n');
    }
  }

  if (results.length > 0) {
    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
    const totalSaved = totalOriginal - totalOptimized;
    const totalSavedPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);

    console.log('='.repeat(60));
    console.log('Summary:');
    console.log(`  Converted: ${successCount} images`);
    console.log(`  Failed: ${failCount} images`);
    console.log(`  Total size: ${prettySize(totalOriginal)} → ${prettySize(totalOptimized)}`);
    console.log(`  Total saved: ${prettySize(totalSaved)} (${totalSavedPercent}%)`);
    console.log('='.repeat(60));
  }
}

run().catch((error) => {
  console.error('Unexpected error while optimizing images:', error);
  process.exitCode = 1;
});
