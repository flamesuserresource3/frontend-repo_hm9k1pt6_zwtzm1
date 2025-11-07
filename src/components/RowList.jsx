import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

// A table-like row layout without using actual table elements
export default function RowList({ columns = [], data = [], onEdit, onDelete }) {
  return (
    <div className="w-full space-y-2">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
        {columns.map((col, idx) => (
          <div key={col.key || idx} className={col.className || 'col-span-2'}>
            {col.label}
          </div>
        ))}
        <div className="col-span-2 text-right">Actions</div>
      </div>
      {/* Rows */}
      <div className="space-y-2">
        {data.map((row, i) => (
          <div
            key={row.id || i}
            className="grid grid-cols-12 gap-4 items-center rounded-lg border border-gray-200 bg-white px-4 py-3"
          >
            {columns.map((col, idx) => (
              <div key={col.key || idx} className={col.className || 'col-span-2'}>
                <div className="text-sm text-gray-900">{row[col.key]}</div>
                {col.subKey && (
                  <div className="text-xs text-gray-500">{row[col.subKey]}</div>
                )}
              </div>
            ))}
            <div className="col-span-2 flex justify-end gap-2">
              <button
                onClick={() => onEdit && onEdit(row)}
                className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                <Pencil className="h-4 w-4" /> Edit
              </button>
              <button
                onClick={() => onDelete && onDelete(row)}
                className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm text-red-700 hover:bg-red-100"
              >
                <Trash2 className="h-4 w-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
