import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Request {
  id: string;
  title: string;
  sector: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
  description: string;
}

const MOCK_REQUESTS: Request[] = [
  {
    id: '1',
    title: 'New Employee Onboarding',
    sector: 'Human Resources',
    status: 'pending',
    date: '2024-03-15',
    description: 'Request for onboarding process for new software developer',
  },
  {
    id: '2',
    title: 'Software License Request',
    sector: 'IT',
    status: 'approved',
    date: '2024-03-14',
    description: 'Request for development tools license',
  },
  {
    id: '3',
    title: 'Budget Approval',
    sector: 'Management',
    status: 'rejected',
    date: '2024-03-13',
    description: 'Q2 budget approval request for IT department',
  },
];

export function RequestList() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <ul className="divide-y divide-gray-200">
        {MOCK_REQUESTS.map((request) => (
          <li key={request.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{request.title}</h3>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
                      {
                        'bg-yellow-100 text-yellow-800': request.status === 'pending',
                        'bg-green-100 text-green-800': request.status === 'approved',
                        'bg-red-100 text-red-800': request.status === 'rejected',
                      }
                    )}
                  >
                    {request.status === 'pending' && <Clock className="mr-1.5 h-4 w-4" />}
                    {request.status === 'approved' && <CheckCircle className="mr-1.5 h-4 w-4" />}
                    {request.status === 'rejected' && <XCircle className="mr-1.5 h-4 w-4" />}
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{request.description}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span>{request.sector}</span>
                    <span>•</span>
                    <span>{new Date(request.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}