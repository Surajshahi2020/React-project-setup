// reusable/IconButton.tsx - UPDATED: Icons show even with background images
import React from 'react';

interface ButtonProps {
  text?: string;
  text2?: string;
  imageIcon?: string | React.ReactNode;
  bgImage?: string;
  reverse?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text' | 'default';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  textColor?: string;
  leftBgColor?: string;
}

export function IconRButton({
  text,
  text2,
  imageIcon,
  bgImage,
  reverse = false,
  variant = 'default',
  size = 'md',
  onClick,
  className = '',
  textColor: customTextColor,
  leftBgColor = 'bg-transparent',
}: ButtonProps) {
  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    text: 'text-gray-300 hover:text-white hover:bg-gray-800',
    default: 'bg-black'
  };

  const renderIcon = () => {
    if (!imageIcon) return null;

    if (typeof imageIcon === 'string') {
      if (imageIcon.startsWith('http') || imageIcon.startsWith('/')) {
        return <img src={imageIcon} alt="" className="w-5 h-5 object-contain" />;
      }
      return <span className="text-xl">{imageIcon}</span>;
    }
    
    return imageIcon;
  };

  const icon = renderIcon();

  // REVERSE LAYOUT: Background image on RIGHT side
  if (bgImage && reverse) {
    return (
      <button
        onClick={onClick}
        className={`relative overflow-hidden ${sizes[size]} rounded-lg transition-all duration-200 w-full ${className}`}
      >
        {/* LEFT SIDE */}
        <div className={`absolute left-0 top-0 bottom-0 w-3/4 ${leftBgColor}`}></div>
        
        {/* RIGHT SIDE: Background image */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/4 bg-cover bg-center rounded-r-lg"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        
        {/* Dark overlay for background image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-black/20"></div>
        
        {/* Content with icon on left */}
        <div className="relative z-10 flex items-center w-full h-full pr-1/4">
          {icon && <span className="flex-shrink-0 ml-3">{icon}</span>}
          
          <div className="flex-1 flex flex-col text-left pl-3">
            {text && <span className="text-white font-bold">{text}</span>}
            {text2 && <span className="text-yellow-300 font-bold text-sm mt-1">{text2}</span>}
          </div>
        </div>
      </button>
    );
  }

  // NORMAL LAYOUT with background image
  if (bgImage && !reverse) {
    return (
      <button
        onClick={onClick}
        className={`relative overflow-hidden ${sizes[size]} rounded-lg transition-all duration-200 w-full ${className}`}
      >
        {/* Full background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors duration-200"></div>
        
        {/* Content with icon */}
        <div className="relative z-10 flex items-center w-full">
          {icon && <span className="flex-shrink-0 mr-3">{icon}</span>}
          
        {/* flex making the gap between icon and text */}
          <div className="flex-0.5 flex flex-col">
            {text && <span className="text-white font-bold">{text}</span>}
            {text2 && <span className="text-yellow-300 font-bold text-sm mt-0.5">{text2}</span>}
          </div>
        </div>
      </button>
    );
  }

  // Text color
  const textColorClass = customTextColor || (variant === 'text' ? 'text-gray-300 hover:text-white' : 'text-white');

  // Regular button WITHOUT background image
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center rounded-lg transition-all duration-200 w-full
        ${sizes[size]} 
        ${variantStyles[variant]}
        ${variant !== 'text' ? 'shadow-md hover:shadow-lg' : ''}
        ${textColorClass}
        ${className}
      `}
    >
      {!reverse && icon && <span className="flex-shrink-0 ml-3 mr-3">{icon}</span>}
      
      <div className="flex-1 flex flex-col text-left">
        {text && <span className="font-bold">{text}</span>}
        {text2 && <span className="text-yellow-300 font-bold text-sm mt-1">{text2}</span>}
      </div>
      
      {reverse && icon && <span className="flex-shrink-0 ml-3">{icon}</span>}
    </button>
  );
}