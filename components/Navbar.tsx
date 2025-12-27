import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full lg:w-64 h-16 lg:h-screen bg-neutral-900 border-b lg:border-b-0 lg:border-r border-neutral-700 z-50">
      <div className="flex items-center justify-between lg:justify-center h-full px-4 lg:px-0">
        <h1 className="text-xl font-bold text-amber-600 lg:transform lg:-rotate-90 lg:whitespace-nowrap">
          Dark Elegance Doctrine
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
