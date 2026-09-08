const TOTAL_FRAMES = 300;
const canvas = document.getElementById('scroll-canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');

// Store preloaded Image elements
const images = [];
let loadedCount = 0;

// Frame interpolation state
let currentFrame = 0;
let targetFrame = 0;
let isLoaded = false;

// Generate image filename path
function getFramePath(index) {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNum}.jpg`;
}

// Preload all frames
function preloadImages() {
  return new Promise((resolve) => {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      
      img.onload = () => {
        loadedCount++;
        const percent = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        if (loaderText) {
          loaderText.textContent = `Loading ${percent}%`;
        }

        // Draw initial frame as soon as frame 0 is ready
        if (i === 0 && !isLoaded) {
          render();
        }

        if (loadedCount === TOTAL_FRAMES) {
          isLoaded = true;
          if (loader) {
            loader.classList.add('hidden');
          }
          resolve();
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          isLoaded = true;
          if (loader) loader.classList.add('hidden');
          resolve();
        }
      };

      images.push(img);
    }
  });
}

// Resize canvas to match display size and device pixel ratio
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
}

// Render frame on canvas in cover fit mode
function render() {
  const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
  const img = images[frameIndex];

  if (!img || !img.complete || img.naturalWidth === 0) return;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Clear canvas background
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Compute aspect ratio cover fit (fills background screen completely)
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  let drawWidth, drawHeight, drawX, drawY;

  if (canvasRatio > imgRatio) {
    // Canvas is wider than image aspect ratio -> fit to width (cover)
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imgRatio;
  } else {
    // Canvas is taller than image aspect ratio -> fit to height (cover)
    drawHeight = canvasHeight;
    drawWidth = canvasHeight * imgRatio;
  }

  drawX = (canvasWidth - drawWidth) / 2;
  drawY = (canvasHeight - drawHeight) / 2;

  ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
}

// Update scroll target frame based on page scroll position
function updateScrollTarget() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return;

  const scrollFraction = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
}

// Smooth animation loop with Lerp (Linear Interpolation)
function animationLoop() {
  updateScrollTarget();

  // Smooth lerp: adjust damping factor for silky fluid feel
  const diff = targetFrame - currentFrame;
  if (Math.abs(diff) > 0.001) {
    currentFrame += diff * 0.12;
    render();
  }

  requestAnimationFrame(animationLoop);
}

// Event Listeners
window.addEventListener('resize', () => {
  resizeCanvas();
  render();
});

window.addEventListener('scroll', updateScrollTarget, { passive: true });

// Initialize App
async function init() {
  resizeCanvas();
  await preloadImages();
  render();
  requestAnimationFrame(animationLoop);
}

init();
