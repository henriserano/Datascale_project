import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuthStore } from '../../lib/store';

export function LoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'employee'>('employee');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - In a real app, this would make an API call
    login({
      id: '1',
      email,
      name: email.split('@')[0],
      role,
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Company Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <div className="mt-1 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="employee"
              checked={role === 'employee'}
              onChange={(e) => setRole(e.target.value as 'employee')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">Employee</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={(e) => setRole(e.target.value as 'admin')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">Admin</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center space-x-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        <LogIn className="h-5 w-5" />
        <span>Sign In</span>
      </button>
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Create one
        </a>
      </p>
    </form>
  );
}