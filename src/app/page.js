'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Load Hydra script if not already loaded
    if (!window.hydraSynth) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/hydra-synth';
      script.onload = () => {
        // Initialize Hydra with higher resolution for better quality
        const hydra = new Hydra({
          canvas: document.getElementById('hydra-canvas'),
          detectAudio: false,
          width: 1920,
          height: 1080
        });

        // Run the new visual code
        osc(20, 0.1, 0).color(0, 1, 2).rotate(1.57/2).out(o1);
        osc(30, 0.01, 0).color(2, 0.7, 1).modulate(o1, 0).add(o1,1).modulatePixelate(o1,1,10).out(o0);
      };
      document.head.appendChild(script);
    } else {
      // If already loaded, just run the new visual code
      osc(20, 0.1, 0).color(0, 1, 2).rotate(1.57/2).out(o1);
      osc(30, 0.01, 0).color(2, 0.7, 1).modulate(o1, 0).add(o1,1).modulatePixelate(o1,1,10).out(o0);
    }
  }, []);

  return (
    <div className="flex items-center justify-center relative">
      <div className='h-screen w-full top absolute -400 backdrop-blur-2xl bg-white/45'></div>
      <canvas id="hydra-canvas" className="w-full h-screen"></canvas>
    </div>
  );
}
