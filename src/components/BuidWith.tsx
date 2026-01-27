  import React from 'react';

  interface Tech {
    name: string;
    icon: string;
  }

  interface BuildWithProps {
    technologies: Tech[];
    title?: string;
    className?: string;
  }

  const BuildWith: React.FC<BuildWithProps> = ({ 
    technologies, 
    title = "Built With:",
    className = "" 
  }) => {
    return (
      <div className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 ${className}`}>
        <p className="text-(--text-secondary) text-[10px] sm:text-[10px] flex md:justify-center font-medium whitespace-nowrap">
          {title}
        </p>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-200"
            >
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={tech.name}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 object-contain"
              />
              <p className="text-(--text-secondary) text-[12px] sm:text-[12px] md:text-[12px]">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default BuildWith;