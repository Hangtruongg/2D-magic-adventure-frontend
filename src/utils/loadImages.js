// src/utils/loadImages.js
export function loadImages(context) {
  const images = {};
  for (const path in context) {
    const fileName = path.replace('./', '');
    images[fileName] = context[path];
  }
  return images;
}