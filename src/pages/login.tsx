import React from 'react';
import { LoginForm } from '../components/auth/login-form';

export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to Process Boost
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access your company's processes and requests
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}