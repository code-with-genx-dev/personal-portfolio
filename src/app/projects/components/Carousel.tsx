'use client'
import { useState, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Carousel({ images }: any) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // Auto Slide (optional)
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-xl!">
            <div className="flex transition-transform duration-500 rounded-xl! ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }} >
                {images.map((img: any, index: any) => (
                    <img
                        key={index}
                        src={img}
                        className="w-full h-60 md:h-125 shrink-0 object-fill rounded-xl!"
                        alt="slide"
                    />
                ))}
            </div>

            {/* Buttons */}
            <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/20 rounded-full p-2 cursor-pointer" >
                <FaCaretLeft color="#10b981" />
            </button>

            <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/20 rounded-full p-2 cursor-pointer" >
                <FaCaretRight color="#10b981" />
            </button>
        </div>
    );
}