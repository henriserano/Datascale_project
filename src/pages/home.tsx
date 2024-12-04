import React, { useState } from 'react';
import { Search } from '../components/ui/search';
import { SectorCard } from '../components/sector/sector-card';

const SECTORS = [
  {
    id: '1',
    name: 'Human Resources',
    description: 'Employee management, recruitment, and workplace policies',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Information Technology',
    description: 'Technical support, infrastructure, and digital solutions',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Management',
    description: 'Strategic planning, leadership, and business operations',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  // Add more sectors as needed
];

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSectors = SECTORS.filter((sector) =>
    sector.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white py-12 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-gray-900">
            Welcome to Process Boost
          </h1>
          <p className="mt-4 text-center text-lg text-gray-600">
            Find the right department and start your request
          </p>
          <div className="mt-8 flex justify-center">
            <Search onSearch={setSearchQuery} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSectors.map((sector) => (
            <SectorCard key={sector.id} {...sector} />
          ))}
        </div>
      </div>
    </div>
  );
}