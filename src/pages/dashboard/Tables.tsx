/**
 * Tables Page - Mock Database Tables View
 * Lists mock database tables for the selected project
 */

import { useState } from 'react';
import { Layers, Lock, LockOpen, ArrowLeft, Table2 } from 'lucide-react';
import { MockLabel } from '@/components/ui/MockLabel';
import { mockTables, mockTableData } from '@/data/mockData';

export default function Tables() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const tableData = selectedTable ? mockTableData[selectedTable as keyof typeof mockTableData] : null;

  if (selectedTable && tableData) {
    const columns = Object.keys(tableData[0] || {});
    
    return (
      <div className="p-8">
        {/* Back Button */}
        <button 
          onClick={() => setSelectedTable(null)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tables
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-semibold font-mono">{selectedTable}</h1>
            <MockLabel />
          </div>
          <p className="text-muted-foreground">
            Read-only view of mock table data
          </p>
        </div>

        {/* Table Data */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  {columns.map((col) => (
                    <th key={col} className="px-4 py-3 text-left font-medium text-muted-foreground">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    {columns.map((col) => (
                      <td key={col} className="px-4 py-3 font-mono text-foreground">
                        {String(row[col as keyof typeof row])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Mock data — no real database queries
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold">Tables</h1>
          <MockLabel />
        </div>
        <p className="text-muted-foreground">
          Database tables for your project
        </p>
      </div>

      {/* Tables List */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Table Name</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rows</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">RLS</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockTables.map((table) => (
              <tr key={table.name} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Table2 className="w-4 h-4 text-primary" />
                    <span className="font-mono text-foreground">{table.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground font-mono">
                  {table.rows.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  {table.rls ? (
                    <span className="flex items-center gap-1 text-success text-xs">
                      <Lock className="w-3 h-3" />
                      Enabled
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-warning text-xs">
                      <LockOpen className="w-3 h-3" />
                      Disabled
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  {mockTableData[table.name as keyof typeof mockTableData] ? (
                    <button
                      onClick={() => setSelectedTable(table.name)}
                      className="text-primary hover:underline text-sm"
                    >
                      View Data
                    </button>
                  ) : (
                    <span className="text-muted-foreground text-sm">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Mock tables — no real database connection
      </p>
    </div>
  );
}