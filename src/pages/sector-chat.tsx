import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChatMessage } from '../components/chat/chat-message';
import { ChatInput } from '../components/chat/chat-input';
import { ChatHeader } from '../components/chat/chat-header';
import { AuthModal } from '../components/auth/auth-modal';
import { useAuthStore } from '../lib/store';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const SECTORS: Record<string, { name: string; greeting: string }> = {
  '1': {
    name: 'Human Resources',
    greeting: 'Welcome to HR Services! How can I assist you with employee-related matters today?',
  },
  '2': {
    name: 'Information Technology',
    greeting: 'Hello! I\'m your IT support assistant. What technical help do you need?',
  },
  '3': {
    name: 'Management',
    greeting: 'Welcome to Management Services. How can I help you with business operations today?',
  },
};

export function SectorChatPage() {
  const { sectorId } = useParams();
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastRequest, setLastRequest] = useState<string>();
  
  const sector = sectorId ? SECTORS[sectorId] : null;

  useEffect(() => {
    if (!sector) {
      navigate('/');
      return;
    }

    setMessages([
      {
        id: '1',
        text: sector.greeting,
        isBot: true,
        timestamp: new Date(),
      },
    ]);
  }, [sector, navigate]);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  }, [isAuthenticated]);

  const handleSendMessage = (text: string) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setLastRequest(text);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `I understand your request for ${sector?.name}. I'll process that right away. Is there anything specific you'd like to know about this request?`,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  if (!sector) return null;

  return (
    <>
      <div className="flex h-screen flex-col">
        <ChatHeader sectorName={sector.name} lastRequest={lastRequest} />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="mx-auto max-w-3xl">
            {messages.map((message) => (
              <ChatMessage key={message.id} {...message} />
            ))}
          </div>
        </div>
        <ChatInput onSend={handleSendMessage} />
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}