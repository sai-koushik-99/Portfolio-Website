import { useEffect, useRef } from 'react';

/**
 * Reveals children with staggered animations when the container enters viewport.
 * @param {string} childSelector - CSS selector for children to animate
 * @param {number} threshold - IntersectionObserver threshold
 */
export function useScrollReveal(childSelector = '.reveal-child', threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    children.forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(28px)';
      child.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, i * 80);
          });
          observer.unobserve(container);
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [childSelector, threshold]);

  return ref;
}
