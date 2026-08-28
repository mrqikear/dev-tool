import fs from 'node:fs';

// 1. Update generate-ssg.js
let ssg = fs.readFileSync('scripts/generate-ssg.js', 'utf-8');
ssg = ssg.replace(/const BASE_DOMAIN = '.*?';/, "const BASE_DOMAIN = 'https://devtoolai.xyz';");
fs.writeFileSync('scripts/generate-ssg.js', ssg, 'utf-8');

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf-8');
indexHtml = indexHtml.replace(/https:\/\/devtext\.io/g, 'https://devtoolai.xyz');
fs.writeFileSync('index.html', indexHtml, 'utf-8');

// 3. Update public/robots.txt
let robots = fs.readFileSync('public/robots.txt', 'utf-8');
robots = robots.replace(/https:\/\/devtext\.io/g, 'https://devtoolai.xyz');
fs.writeFileSync('public/robots.txt', robots, 'utf-8');

// 4. Update public/sitemap.xml
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf-8');
sitemap = sitemap.replace(/https:\/\/devtext\.io/g, 'https://devtoolai.xyz');
fs.writeFileSync('public/sitemap.xml', sitemap, 'utf-8');

// 5. Update vite.config.ts
let vite = fs.readFileSync('vite.config.ts', 'utf-8');
vite = vite.replace(/https:\/\/devtext\.io/g, 'https://devtoolai.xyz');
fs.writeFileSync('vite.config.ts', vite, 'utf-8');

console.log('✓ Successfully configured real domain: https://devtoolai.xyz');
