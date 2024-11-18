'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>('light');
  const [mounted, setMounted] = useState(false);

  // Only run on client-side
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') ?? 'light';
    setTheme(savedTheme);
  }, []);

  // Don't render anything until mounted
  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    const root = window.document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
