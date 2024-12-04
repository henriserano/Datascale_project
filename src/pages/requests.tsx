import React from 'react';
import { RequestList } from '../components/request/request-list';

export function RequestsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Requests</h1>
          <p className="mt-2 text-gray-600">
            View and manage all your business process requests
          </p>
        </div>
        <RequestList />
      </div>
    </div>
  );
}