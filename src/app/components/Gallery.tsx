'use client';

import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const galleryItems = [
    {
      id: 1,
      title: '',
      story: 'This is the perfect photo everrrrrrr. We look like husband and wife',
      image: '/assets/photos/1.jpg'
    },
    {
      id: 2,
      title: '',
      story: 'Meri princess, beautiful, gorgeous princess😚',
      image: '/assets/photos/2.jpg'
    },
    {
      id: 3,
      title: '',
      story: 'The dress you chose for me.',
      image: '/assets/photos/3.jpg'
    },
    {
      id: 4,
      title: '',
      story: 'Korean bhauuuu',
      image: '/assets/photos/4.jpg'
    },
    {
      id: 5,
      title: '',
      story: 'Flowers for the person who gives me flowers everytime',
      image: '/assets/photos/5.jpg'
    },
    {
      id: 6,
      title: '',
      story: 'Dekha hai kahi itna handsome banda?🤭',
      image: '/assets/photos/6.jpg'
    },
    {
      id: 7,
      title: '',
      story: 'More bhauuu',
      image: '/assets/photos/7.jpg'
    },
    {
      id: 8,
      title: '',
      story: 'OH MY GODD🔥',
      image: '/assets/photos/8.jpg'
    },
    {
      id: 9,
      title: '',
      story: 'Mujhe chodke gaya tha ghumne🤧',
      image: '/assets/photos/9.jpg'
    },
    {
      id: 10,
      title: '',
      story: 'This was fun',
      image: '/assets/photos/10.jpg'
    },
    {
      id: 11,
      title: '',
      story: 'Kashi distey?',
      image: '/assets/photos/11.jpg'
    },
    {
      id: 12,
      title: '',
      story: 'Pata nahi pr iss frame me sirf meri ass dikh rhi hai',
      image: '/assets/photos/12.jpg'
    },
    {
      id: 13,
      title: '',
      story: 'sexyyy couple',
      image: '/assets/photos/13.jpg'
    },
    {
      id: 14,
      title: '',
      story: '🥹🥹🥹',
      image: '/assets/photos/14.jpg'
    },
    {
      id: 15,
      title: '',
      story: 'Saviour Coffee',
      image: '/assets/photos/15.jpg'
    },
    {
      id: 16,
      title: '',
      story: 'Achi toh dikh rhi hu mein',
      image: '/assets/photos/16.jpg'
    },
    {
      id: 17,
      title: '',
      story: 'Mera pyaara baccha',
      image: '/assets/photos/17.jpg'
    },
    {
      id: 18,
      title: '',
      story: 'Bachke raho humseee🔫',
      image: '/assets/photos/18.jpg'
    },
    {
      id: 19,
      title: '',
      story: 'Mujhe bhi jersey chahiyeeeeee',
      image: '/assets/photos/19.jpg'
    },
    {
      id: 20,
      title: '',
      story: 'Best Diwali bhaiiii',
      image: '/assets/photos/20.jpg'
    },
    {
      id: 21,
      title: '',
      story: 'Kya kya khaaya tha iss din bhaii',
      image: '/assets/photos/21.jpg'
    },
    {
      id: 22,
      title: '',
      story: 'Angelssssss',
      image: '/assets/photos/22.jpg'
    },
    {
      id: 23,
      title: '',
      story: 'you remember what we did before this?',
      image: '/assets/photos/23.jpg'
    },
    {
      id: 24,
      title: '',
      story: 'I love you🥺',
      image: '/assets/photos/24.jpg'
    },
    {
      id: 25,
      title: '',
      story: 'Cutieee',
      image: '/assets/photos/25.jpg'
    },
    {
      id: 26,
      title: '',
      story: '😚😚😚',
      image: '/assets/photos/26.jpg'
    }
  ];

  // Show only first 6 photos initially, or all if showAllPhotos is true
  const displayedItems = showAllPhotos ? galleryItems : galleryItems.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 gradient-text">
          The Gallery
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A collection of moments that tell our story, each image a window to a memory
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, index) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Actual image */}
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{item.story}</p>
              </div>
            </div>

            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
              hoveredIndex === index 
                ? 'shadow-2xl shadow-blue-500/25 scale-105' 
                : 'shadow-lg shadow-blue-500/10'
            }`} />
          </div>
        ))}
      </div>

      {/* Gallery navigation */}
      <div className="text-center mt-12">
        {!showAllPhotos && (
          <button 
            onClick={() => setShowAllPhotos(true)}
            className="px-8 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            View All Memories
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery; 