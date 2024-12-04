import React from 'react';
import { User, Bot } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isBot = false, timestamp }: ChatMessageProps) {
  return (
    <div className={cn(
      'mx-4 my-2 flex items-start space-x-3 rounded-lg p-4',
      isBot ? 'bg-white' : 'bg-blue-50'
    )}>
      <div className={cn(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
        isBot ? 'bg-blue-100 text-blue-600' : 'bg-blue-600 text-white'
      )}>
        {isBot ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
      </div>
      <div className="flex-1 space-y-1">
        <p className={cn(
          'text-sm',
          isBot ? 'text-gray-900' : 'text-gray-800'
        )}>{message}</p>
        <span className="text-xs text-gray-500">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}