import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ 
        transitionDuration: '750ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms` 
      }}
      className={`transition-all transform will-change-transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 filter blur-0' 
          : 'opacity-0 translate-y-8 filter blur-[0.5px]'
      } ${className}`}
    >
      {children}
    </div>
  );
};
