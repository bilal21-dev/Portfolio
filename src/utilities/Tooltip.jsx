import React from 'react';

export default function Tooltip({ children, title }) {
    return (
        <div className="relative group">
            {children}
            {title && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center bg-gray-800 text-white text-sm rounded px-2 py-1">
                    {title}
                </div>
            )}
        </div>
    );
}