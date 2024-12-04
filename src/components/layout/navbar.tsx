import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, LogIn, Plus, MessageSquare, UserCircle } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Process Boost</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/create-sector"
              className="flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <Plus className="h-5 w-5" />
              <span>Create Sector</span>
            </Link>
            
            <Link
              to="/requests"
              className="flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Requests</span>
            </Link>
            
            <Link
              to="/login"
              className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
            
            <Link
              to="/profile"
              className="flex items-center space-x-2 rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            >
              <UserCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}