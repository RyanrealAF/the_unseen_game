import React from 'react';
import Navbar from './components/Navbar';
import ModuleSection from './components/ModuleSection';
import { appContent } from './data/content';
import { Section } from './types';
import { AppConstants } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Navbar />
      <main className="flex-1 p-4 md:p-8 lg:ml-64 mt-16 lg:mt-0">
        <h1 className="text-4xl md:text-5xl text-amber-600 font-extrabold mb-8 text-center lg:text-left">
          {AppConstants.APP_TITLE}
        </h1>
        <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 mb-12">
          {AppConstants.APP_DESCRIPTION}
        </p>

        {appContent.map((moduleItem) => (
          <div key={moduleItem.id} id={moduleItem.id} className="mb-12 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-6 border-b border-neutral-700 pb-4">
              {moduleItem.title}
            </h2>
            <div className="space-y-8">
              {moduleItem.sections.map((section: Section) => (
                <ModuleSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        ))}

        <section id="works-cited" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-6 border-b border-neutral-700 pb-4">
            Works Cited
          </h2>
          <ul className="list-disc list-inside text-stone-300 space-y-2">
            {AppConstants.WORKS_CITED.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;