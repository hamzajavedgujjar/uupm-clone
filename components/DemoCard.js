'use client';

import Link from 'next/link';
import { ExternalLink, Eye } from 'lucide-react';

export default function DemoCard({ demoNumber, title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      {/* Thumbnail */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <img
          src={image || `https://via.placeholder.com/400x300?text=Demo+${demoNumber}`}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/demos/demo${demoNumber}`}
            className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <Eye size={18} className="mr-2" />
            Preview
          </Link>
          <Link
            href={`/demos/demo${demoNumber}`}
            className="flex-1 inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <ExternalLink size={18} className="mr-2" />
            Live
          </Link>
        </div>
      </div>
    </div>
  );
}
