import React, { useMemo, useState } from 'react';
import HomeGrid from './components/HomeGrid';
import SectionShell from './components/SectionShell';
import RowList from './components/RowList';

function useTabs(initial) {
  const [tab, setTab] = useState(initial);
  return { tab, setTab };
}

function DeliverySection({ onBack }) {
  const { tab, setTab } = useTabs('Daily Entries');

  const dailyColumns = [
    { label: 'Date', key: 'date', className: 'col-span-2' },
    { label: 'Supplier', key: 'supplier', className: 'col-span-3' },
    { label: 'Items', key: 'items', className: 'col-span-3' },
    { label: 'Quantity', key: 'qty', className: 'col-span-2' },
    { label: 'Status', key: 'status', className: 'col-span-2' },
  ];
  const dailyData = [
    { id: 1, date: '2025-11-07', supplier: 'Fresh Farms Co.', items: 'Tomatoes', qty: 120, status: 'Received' },
    { id: 2, date: '2025-11-07', supplier: 'Oceanic Ltd.', items: 'Salmon', qty: 30, status: 'Pending' },
  ];

  const supplierColumns = [
    { label: 'Supplier', key: 'name', className: 'col-span-4' },
    { label: 'Contact', key: 'contact', className: 'col-span-4' },
    { label: 'Phone', key: 'phone', className: 'col-span-4' },
  ];
  const supplierData = [
    { id: 1, name: 'Fresh Farms Co.', contact: 'Ava Patel', phone: '+1 555-0134' },
    { id: 2, name: 'Oceanic Ltd.', contact: 'Liam Chen', phone: '+1 555-2211' },
  ];

  const data = tab === 'Daily Entries' ? dailyData : supplierData;
  const columns = tab === 'Daily Entries' ? dailyColumns : supplierColumns;

  return (
    <SectionShell
      title="Delivery"
      tabs={["Daily Entries", "Suppliers"]}
      currentTab={tab}
      onTabChange={setTab}
      onBack={onBack}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{tab}</h2>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Add New</button>
      </div>
      <RowList columns={columns} data={data} onEdit={() => {}} onDelete={() => {}} />
    </SectionShell>
  );
}

function StockSection({ onBack }) {
  const { tab, setTab } = useTabs('Available');

  const availableCols = [
    { label: 'Product', key: 'product', className: 'col-span-4' },
    { label: 'Qty', key: 'qty', className: 'col-span-2' },
    { label: 'Unit', key: 'unit', className: 'col-span-2' },
    { label: 'Price', key: 'price', className: 'col-span-2' },
    { label: 'Expiry', key: 'expiry', className: 'col-span-2' },
  ];
  const available = [
    { id: 1, product: 'Milk', qty: 80, unit: 'L', price: '$1.50', expiry: '2025-12-01' },
    { id: 2, product: 'Eggs', qty: 200, unit: 'pcs', price: '$0.20', expiry: '2025-12-20' },
  ];

  const expiredCols = [
    { label: 'Product', key: 'product', className: 'col-span-6' },
    { label: 'Qty', key: 'qty', className: 'col-span-2' },
    { label: 'Expired On', key: 'expiredOn', className: 'col-span-4' },
  ];
  const expired = [
    { id: 11, product: 'Yogurt', qty: 15, expiredOn: '2025-10-01' },
  ];

  return (
    <SectionShell
      title="Stock"
      tabs={["Available", "Expired"]}
      currentTab={tab}
      onTabChange={setTab}
      onBack={onBack}
    >
      <div className="grid gap-8">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{tab === 'Available' ? 'Available Stock' : 'Expired Stock'}</h2>
            <div className="flex items-center gap-2">
              <button className="rounded-md border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50">Import</button>
              <button className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Add Item</button>
            </div>
          </div>
          <RowList columns={tab === 'Available' ? availableCols : expiredCols} data={tab === 'Available' ? available : expired} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h3 className="mb-2 font-medium">Monthly Profit/Loss</h3>
            <div className="h-40 bg-gradient-to-tr from-emerald-50 to-white rounded-md" />
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h3 className="mb-2 font-medium">Annual Overview (Pie)</h3>
            <div className="h-40 bg-gradient-to-tr from-indigo-50 to-white rounded-md" />
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="mb-4 flex flex-wrap items-end gap-3">
            <div>
              <label className="block text-xs text-gray-600">Product</label>
              <input className="mt-1 w-48 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Search name" />
            </div>
            <div>
              <label className="block text-xs text-gray-600">From</label>
              <input type="date" className="mt-1 w-48 rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs text-gray-600">To</label>
              <input type="date" className="mt-1 w-48 rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <button className="h-9 rounded-md bg-blue-600 px-4 text-white">Filter</button>
          </div>
          <RowList
            columns={[{ label: 'Product', key: 'product', className: 'col-span-6' }, { label: 'Profit', key: 'profit', className: 'col-span-3' }, { label: 'Loss', key: 'loss', className: 'col-span-3' }]}
            data={[{ id: 1, product: 'Milk', profit: '$120', loss: '$0' }, { id: 2, product: 'Yogurt', profit: '$0', loss: '$30' }]}
          />
        </div>
      </div>
    </SectionShell>
  );
}

function EmployeesSection({ onBack }) {
  const { tab, setTab } = useTabs('Info');
  const infoCols = [
    { label: 'Name', key: 'name', className: 'col-span-4' },
    { label: 'Role', key: 'role', className: 'col-span-3' },
    { label: 'Phone', key: 'phone', className: 'col-span-3' },
  ];
  const infoData = [
    { id: 1, name: 'John Doe', role: 'Cashier', phone: '+1 555 0101' },
    { id: 2, name: 'Sara Lee', role: 'Stock Manager', phone: '+1 555 0102' },
  ];

  const attendanceCols = [
    { label: 'Name', key: 'name', className: 'col-span-6' },
    { label: 'Present', key: 'present', className: 'col-span-6' },
  ];
  const attendanceData = infoData.map((e) => ({ ...e, present: '⬜' }));

  return (
    <SectionShell
      title="Employees"
      tabs={["Info", "Attendance"]}
      currentTab={tab}
      onTabChange={setTab}
      onBack={onBack}
    >
      {tab === 'Info' ? (
        <>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Employee Info</h2>
            <button className="rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">Add Employee</button>
          </div>
          <RowList columns={infoCols} data={infoData} />
        </>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Daily Attendance</h2>
            <div className="text-sm text-gray-600">{new Date().toDateString()}</div>
          </div>
          <div className="space-y-2">
            {infoData.map((e) => (
              <div key={e.id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                <div className="font-medium">{e.name}</div>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4" /> Present
                </label>
              </div>
            ))}
          </div>
        </>
      )}
    </SectionShell>
  );
}

function BillingSection({ onBack }) {
  const [items, setItems] = useState([{ product: '', qty: 1 }]);
  const total = useMemo(() => 0, [items]);

  const addRow = () => setItems((prev) => [...prev, { product: '', qty: 1 }]);
  const updateRow = (i, key, value) => setItems((prev) => prev.map((r, idx) => (idx === i ? { ...r, [key]: value } : r)));

  return (
    <SectionShell title="Billing" onBack={onBack}>
      <div className="grid gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <h2 className="mb-4 text-lg font-semibold">Create Bill</h2>
          <div className="space-y-3">
            {items.map((row, i) => (
              <div key={i} className="grid grid-cols-12 items-center gap-3">
                <input
                  className="col-span-7 rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Product name"
                  value={row.product}
                  onChange={(e) => updateRow(i, 'product', e.target.value)}
                />
                <input
                  type="number"
                  className="col-span-3 rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Qty"
                  value={row.qty}
                  onChange={(e) => updateRow(i, 'qty', Number(e.target.value))}
                />
                <button className="col-span-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-50" onClick={addRow}>Add</button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <div className="text-sm text-gray-600">Total (from backend pricing)</div>
            <div className="text-xl font-semibold">${total.toFixed(2)}</div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="rounded-md bg-rose-600 px-4 py-2 text-white hover:bg-rose-700">Make Bill</button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SalesSection({ onBack }) {
  return (
    <SectionShell title="Sales" onBack={onBack}>
      <div className="grid gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <h2 className="mb-2 text-lg font-semibold">Recent Sales</h2>
          <div className="text-sm text-gray-600">Sales summaries and quick insights will appear here.</div>
        </div>
      </div>
    </SectionShell>
  );
}

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {screen === 'home' ? (
        <HomeGrid onSelect={setScreen} />
      ) : screen === 'Delivery' ? (
        <DeliverySection onBack={() => setScreen('home')} />
      ) : screen === 'Stock' ? (
        <StockSection onBack={() => setScreen('home')} />
      ) : screen === 'Employees' ? (
        <EmployeesSection onBack={() => setScreen('home')} />
      ) : screen === 'Billing' ? (
        <BillingSection onBack={() => setScreen('home')} />
      ) : screen === 'Sales' ? (
        <SalesSection onBack={() => setScreen('home')} />
      ) : (
        <SectionShell title={screen} onBack={() => setScreen('home')}>
          <div className="text-gray-600">Page under construction</div>
        </SectionShell>
      )}
    </div>
  );
}
