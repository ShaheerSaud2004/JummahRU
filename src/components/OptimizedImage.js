import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackText = null,
  size = 400 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleLoad = () => {
    setImageLoading(false);
  };

  if (imageError) {
    // Generate fallback avatar with initials
    const initials = alt.split(' ').map(name => name[0]).join('').toUpperCase();
    const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=8B0000&color=fff&size=${size}&bold=true`;
    
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        title={`Fallback image for ${alt}`}
      />
    );
  }

  return (
    <div className="relative">
      {imageLoading && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="w-8 h-8 border-4 border-rutgers-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoading ? 'opacity-0 absolute' : 'opacity-100'}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
};

export default OptimizedImage;
