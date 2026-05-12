import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      className="relative p-2 rounded-xl text-gray-500 dark:text-gray-400
                 hover:bg-gray-100 dark:hover:bg-white/10
                 transition-all duration-200 active:scale-95"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'} absolute top-2 left-2`} />
      <Moon className={`h-5 w-5 transition-all duration-300 ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
    </button>
  );
}
