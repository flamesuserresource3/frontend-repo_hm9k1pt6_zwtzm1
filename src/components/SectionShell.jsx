import React from 'react';
import Navbar from './Navbar';

function SectionShell({ title, tabs = [], currentTab, onTabChange, onBack, children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title={title} tabs={tabs} currentTab={currentTab} onTabChange={onTabChange} onBack={onBack} />
      <main className="mx-auto max-w-6xl px-4 py-8">
        {children}
      </main>
    </div>
  );
}

export default SectionShell;
