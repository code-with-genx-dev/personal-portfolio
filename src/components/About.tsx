'use client';

import { Slide } from '@/app/animation/Slide';
import { useState } from 'react';
import { MdFlipCameraAndroid } from 'react-icons/md';

interface Card {
  id: number;
  icon: string;
  title: string;
  front: string;
  back: string;
}

const aboutCards: Card[] = [
  {
    id: 1,
    icon: '👋',
    title: "Hey, I’m Visva",
    front: 'Frontend Developer',
    back: 'Frontend Developer based in Chennai, India, building scalable web applications used in real-world business systems.'
  },
  {
    id: 2,
    icon: '🧩',
    title: 'What I Do',
    front: 'Frontend Engineering',
    back: 'I build responsive, modular web applications using Next.js, TypeScript, and Tailwind CSS with clean architecture.'
  },
  {
    id: 3,
    icon: '🎯',
    title: 'My Focus',
    front: 'Scalable UI Systems',
    back: 'I focus on reusable components, design consistency, and performance-driven interfaces for complex workflows.'
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Currently',
    front: 'Building HRMS Products',
    back: 'Developing and maintaining HRMS modules, including Leave, Attendance, and Payroll, in Agile production environments.'
  }
];


export default function AboutCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleFlip = (id: number) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aboutCards.map((card) => (
         <Slide key={card.id} delay={0.14} direction='left'>
           <div
            key={card.id}
            style={{ perspective: '1000px' }}
            className="h-64"
            onClick={() => handleFlip(card.id)}
          >
            <div
              className="relative w-full h-full transition-transform duration-500 cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: activeCard === card.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Front of Card */}
              <div
                className="absolute w-full h-full bg-(--abt-card-bg) rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center  hover:shadow-xl transition-shadow"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-6xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-(--accent-primary) mb-2">{card.title}</h3>
                <p className="text-(--accent-secondary) font-semibold">{card.front}</p>
                <div className="absolute bottom-4 text-gray-400 text-sm">
                 <MdFlipCameraAndroid />
                </div>
              </div>

              {/* Back of Card */}
              <div
                className="absolute w-full h-full bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl shadow-lg p-6 flex items-center justify-center text-white"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <p className="text-center leading-relaxed text-[15px]">
                  {card.back}
                </p>
              </div>
            </div>
          </div>
         </Slide>
        ))}
      </div>
    </div>
  );
}