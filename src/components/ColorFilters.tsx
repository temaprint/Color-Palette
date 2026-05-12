import React, { useState } from 'react';
import { Tag as TagIcon } from 'lucide-react';

interface ColorFiltersProps {
  tags: string[];
}

export default function ColorFilters({ tags }: ColorFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (tag: string) => {
    setActiveFilters(prev => {
      const newFilters = prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag];

      const colorCards = document.querySelectorAll('#colors-grid > a');
      colorCards.forEach(card => {
        const cardTags = JSON.parse((card as HTMLElement).dataset.tags || '[]');
        const isVisible = newFilters.length === 0 || newFilters.some(filter => cardTags.includes(filter));
        (card as HTMLElement).style.display = isVisible ? 'block' : 'none';
      });

      return newFilters;
    });
  };

  return (
    <div class="mb-10">
      <div class="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleFilter(tag)}
            className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilters.includes(tag)
                ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 ring-1 ring-primary-200 dark:ring-primary-800'
                : 'bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-white/10'
            }`}
          >
            <TagIcon className="h-3.5 w-3.5 mr-1.5" />
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
