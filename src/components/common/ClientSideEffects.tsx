'use client';

// Import necessary modules and components
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { animationCreate } from '@/utils/utils';
import { scrollSmother } from '@/utils/scrollSmother';

import { ScrollSmoother, ScrollTrigger } from '@/plugins';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// Import Bootstrap JS if window is defined
if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

export default function ClientSideEffects() {
  // Get the current pathname
  const pathname = usePathname();

  useEffect(() => {
    // Trigger animation after a delay
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize ScrollSmoother if window is defined
    if (typeof window !== 'undefined') {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Call scrollSmother function on pathname change
    scrollSmother();
  }, [pathname]);

  // Reference for the custom cursor element
  const cursorBallRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorBall = cursorBallRef.current;

    if (!cursorBall) return;

    // Mouse move listener to update cursor position
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorBall, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        ease: 'power2.out'
      });
    };

    // Hover effects for links
    const handleMouseEnter = () => {
      cursorBall.classList.add('hovered');
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 2,
        opacity: 0,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      cursorBall.classList.remove('hovered');
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      });
    };

    // Attach event listeners
    document.addEventListener('mousemove', handleMouseMove);
    const hoverElements = document.querySelectorAll('a');
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor element */}
      <div id="magic-cursor">
        <div
          id="ball"
          ref={cursorBallRef}
        ></div>
      </div>
    </>
  );
}
