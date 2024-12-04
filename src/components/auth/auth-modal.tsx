import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LogIn, UserPlus } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Welcome to Process Boost</h3>
          <p className="mt-2 text-gray-600">Please sign in or create an account to continue</p>
        </div>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => {
              onClose();
              navigate('/login');
            }}
            className="flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <LogIn className="h-5 w-5" />
            <span>Sign In</span>
          </button>
          <button
            onClick={() => {
              onClose();
              navigate('/register');
            }}
            className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-4 py-3 text-white shadow-sm hover:bg-blue-700"
          >
            <UserPlus className="h-5 w-5" />
            <span>Create Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}