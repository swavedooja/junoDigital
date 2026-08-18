import fs from 'fs';
import path from 'path';

console.log('🚀 Starting deployment...');

// Check if dist folder exists
if (!fs.existsSync('dist')) {
  console.error('❌ dist folder not found. Please run "npm run build" first.');
  process.exit(1);
}

console.log('✅ dist folder found');

// Create a simple deployment summary
const deployInfo = {
  timestamp: new Date().toISOString(),
  buildSize: getFolderSize('dist'),
  files: listFiles('dist')
};

console.log('📊 Build Summary:');
console.log(`   Build Time: ${deployInfo.timestamp}`);
console.log(`   Build Size: ${deployInfo.buildSize} bytes`);
console.log(`   Files: ${deployInfo.files.length}`);

console.log('\n📁 Files to deploy:');
deployInfo.files.forEach(file => {
  console.log(`   ${file}`);
});

console.log('\n🎯 Next steps:');
console.log('1. Install Git from: https://git-scm.com/download/win');
console.log('2. Or manually upload the contents of the "dist" folder to your GitHub repository');
console.log('3. Or set up GitHub Actions for automatic deployment');

function getFolderSize(folderPath) {
  let size = 0;
  const files = fs.readdirSync(folderPath);
  
  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      size += stats.size;
    } else if (stats.isDirectory()) {
      size += getFolderSize(filePath);
    }
  });
  
  return size;
}

function listFiles(folderPath, basePath = '') {
  const files = [];
  const items = fs.readdirSync(folderPath);
  
  items.forEach(item => {
    const itemPath = path.join(folderPath, item);
    const relativePath = path.join(basePath, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isFile()) {
      files.push(relativePath);
    } else if (stats.isDirectory()) {
      files.push(...listFiles(itemPath, relativePath));
    }
  });
  
  return files;
}
