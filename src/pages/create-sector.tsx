import React from 'react';
import { SectorForm } from '../components/sector/sector-form';

export function CreateSectorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Create New Sector</h1>
          <p className="mt-2 text-gray-600">
            Set up a new business sector by providing the required information and process model.
          </p>
        </div>
        <SectorForm />
      </div>
    </div>
  );
}