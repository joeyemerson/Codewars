// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
// The Challenge

// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

function findScreenHeight(width, ratio) {
  const [widthRatio, heightRatio] = ratio.split(':');
  const base = width / widthRatio;
  const height = base * heightRatio;
  return `${width}x${height}`;
}

console.log(findScreenHeight(1024, '4:3'), '1024x768');
console.log(findScreenHeight(1280, '16:9'), '1280x720');
console.log(findScreenHeight(3840, '32:9'), '3840x1080');
