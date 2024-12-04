import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface SectorCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export function SectorCard({ id, name, description, imageUrl, className }: SectorCardProps) {
  return (
    <Link
      to={`/sectors/${id}`}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg',
        className
      )}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}