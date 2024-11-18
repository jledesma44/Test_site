'use client';

import React, { useEffect, useState } from 'react';

export default function NavScroll() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window === 'undefined') return;

    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return null;
}
