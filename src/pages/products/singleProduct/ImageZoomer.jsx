 
import { useState, useEffect } from "react";

const ImageZoomer = ({ imageUrl }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);

  
  useEffect(() => {
    const animation = setInterval(() => {
      setPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.5,
        y: prev.y + (position.y - prev.y) * 0.5,
      }));
    }, 16); 
    return () => clearInterval(animation);
  }, [position]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="w-[300px] h-[400px] overflow-hidden relative cursor-zoom-in rounded border border-gray-200 bg-white"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none ${
          isHover ? "opacity-10" : "opacity-0"
        }`}
      />

  
      <img
        src={imageUrl}
        alt="product"
        className="w-full h-full  transition-transform duration-500 ease-out "
        style={{
          transform: isHover ? "scale(1.4)" : "scale(1)",
          transformOrigin: `${pos.x}% ${pos.y}%`,
        }}
      />
    </div>
  );
};

export default ImageZoomer;
