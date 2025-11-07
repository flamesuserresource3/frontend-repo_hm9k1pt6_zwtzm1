import React from 'react';
import { Truck, Boxes, Users, ShoppingCart, Receipt, BarChart3, LogIn } from 'lucide-react';

function Tile({ icon: Icon, label, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white" />
      <div className="relative z-10 flex items-center gap-4">
        <div className={`rounded-lg p-3 ${color} text-white`}> 
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-left">
          <div className="text-lg font-semibold text-gray-900">{label}</div>
          <div className="text-xs text-gray-500">Tap to manage</div>
        </div>
      </div>
    </button>
  );
}

function HomeGrid({ onSelect }) {
  const tiles = [
    { icon: Truck, label: 'Delivery', key: 'Delivery', color: 'bg-blue-600' },
    { icon: Boxes, label: 'Stock', key: 'Stock', color: 'bg-emerald-600' },
    { icon: Users, label: 'Employees', key: 'Employees', color: 'bg-purple-600' },
    { icon: ShoppingCart, label: 'Sales', key: 'Sales', color: 'bg-amber-600' },
    { icon: Receipt, label: 'Billing', key: 'Billing', color: 'bg-rose-600' },
    { icon: BarChart3, label: 'Analytics', key: 'Analytics', color: 'bg-indigo-600' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Supermarket Console</h1>
          <p className="text-gray-600">Operate deliveries, stock, employees, billing and more</p>
        </div>
        <div className="inline-flex items-center gap-2 text-gray-700 px-3 py-2 rounded-md border border-gray-200 bg-white">
          <LogIn className="w-5 h-5" />
          <span className="font-medium">Logged in</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((t) => (
          <Tile key={t.key} icon={t.icon} label={t.label} color={t.color} onClick={() => onSelect(t.key)} />
        ))}
      </div>
    </div>
  );
}

export default HomeGrid;
