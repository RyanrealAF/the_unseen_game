import React from 'react';
import { Section } from '../types';

interface ModuleSectionProps {
  section: Section;
}

const ModuleSection: React.FC<ModuleSectionProps> = ({ section }) => {
  return (
    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
      <h3 className="text-2xl font-bold text-amber-500 mb-4">
        {section.title}
      </h3>
      <div className="prose prose-invert max-w-none">
        {section.content.map((part, index) => {
          switch (part.type) {
            case 'heading':
              const level = part.level || 3;
              if (level === 2) {
                return (
                  <h2 key={index} className="text-xl font-semibold text-stone-200 mb-3">
                    {part.text}
                  </h2>
                );
              } else if (level === 4) {
                return (
                  <h4 key={index} className="text-lg font-semibold text-stone-200 mb-2">
                    {part.text}
                  </h4>
                );
              } else {
                return (
                  <h3 key={index} className="text-xl font-semibold text-stone-200 mb-3">
                    {part.text}
                  </h3>
                );
              }
            case 'paragraph':
              return (
                <p key={index} className="text-stone-300 mb-4 leading-relaxed">
                  {part.text}
                </p>
              );
            case 'list':
              return (
                <ul key={index} className="list-disc list-inside text-stone-300 mb-4 space-y-2">
                  {part.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default ModuleSection;
