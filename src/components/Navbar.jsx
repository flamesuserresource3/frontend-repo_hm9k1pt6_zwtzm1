import React from 'react';
import { Home, LogOut } from 'lucide-react';

function Navbar({ title, tabs = [], currentTab, onTabChange, onBack }) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </button>
          <span className="h-6 w-px bg-gray-300" />
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>
        <button className="inline-flex items-center gap-2 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
      {tabs.length > 0 && (
        <nav className="bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 flex overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => onTabChange && onTabChange(t)}
                className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  currentTab === t
                    ? 'border-blue-600 text-blue-700 bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
