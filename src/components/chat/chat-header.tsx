import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatHeaderProps {
  sectorName: string;
  lastRequest?: string;
}

export function ChatHeader({ sectorName, lastRequest }: ChatHeaderProps) {
  return (
    <div className="border-b bg-white p-4">
      <div className="flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <MessageSquare className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{sectorName} Assistant</h1>
          {lastRequest && (
            <p className="mt-1 text-sm text-gray-500">
              Last request: {lastRequest}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}