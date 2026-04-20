import React from "react";
import element8 from "../assets/element8.svg";

interface AnimatedElementProps {
  className?: string;
  size?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  className = "",
  size = 60,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}>
      <img
        src={element8}
        alt="Element 8"
        className="animate-rotate-custom"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default AnimatedElement;
