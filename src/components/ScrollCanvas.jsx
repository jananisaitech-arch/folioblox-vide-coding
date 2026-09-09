import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 300;

function getFramePath(index) {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNum}.jpg`;
}

export default function ScrollCanvas() {
  const canvasRef = useRef(null);
  const [loadPercent, setLoadPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const images = [];
    let loadedCount = 0;
    let currentFrame = 0;
    let targetFrame = 0;
    let animationFrameId = null;

    // Resize canvas function
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    // Render frame
    function renderFrame(frameIdx) {
      const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIdx)));
      const img = images[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth, drawHeight;

      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
      }

      const drawX = (canvasWidth - drawWidth) / 2;
      const drawY = (canvasHeight - drawHeight) / 2;

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }

    // Scroll calculation
    function updateScrollTarget() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const scrollFraction = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
    }

    // Animation Loop with Lerp
    function animationLoop() {
      updateScrollTarget();
      const diff = targetFrame - currentFrame;
      if (Math.abs(diff) > 0.001) {
        currentFrame += diff * 0.12;
        renderFrame(currentFrame);
      }
      animationFrameId = requestAnimationFrame(animationLoop);
    }

    // Preload frames
    function preload() {
      resizeCanvas();
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFramePath(i);

        img.onload = () => {
          loadedCount++;
          const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
          setLoadPercent(pct);

          if (i === 0) {
            renderFrame(0);
          }

          if (loadedCount === TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };

        img.onerror = () => {
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };

        images.push(img);
      }
    }

    preload();
    animationFrameId = requestAnimationFrame(animationLoop);

    const handleResize = () => {
      resizeCanvas();
      renderFrame(currentFrame);
    };

    const handleScroll = () => {
      updateScrollTarget();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Loader screen */}
      <div className={`loader ${isLoaded ? 'hidden' : ''}`}>
        <div className="loader-spinner"></div>
        <div className="loader-text">Loading {loadPercent}%</div>
      </div>

      {/* Canvas */}
      <canvas id="scroll-canvas" ref={canvasRef}></canvas>
    </>
  );
}
