import React, {useEffect, useState} from 'react';
import StructuredData from '@site/src/components/SEO/StructuredData';

function ScrollProgressBar(): JSX.Element {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const value = total > 0 ? Math.min((current / total) * 100, 100) : 0;
      setProgress(value);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 4,
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #0059b8, #4a9eff)',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
      }}
    />
  );
}

export default function Root({children}: {children: React.ReactNode}): JSX.Element {
  // Inject global structured data
  useEffect(() => {
    // Ensure HTML lang attribute is set
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (!html.getAttribute('lang')) {
        html.setAttribute('lang', 'en');
      }
    }
  }, []);

  return (
    <>
      <StructuredData type="homepage" />
      <ScrollProgressBar />
      {children}
    </>
  );
}

