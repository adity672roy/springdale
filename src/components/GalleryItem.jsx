import React from 'react';

const GalleryItem = ({ item }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-700">{item.description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;