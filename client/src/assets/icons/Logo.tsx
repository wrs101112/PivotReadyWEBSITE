import React from "react";

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showSlogan = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-[#4A7C74] font-montserrat font-bold text-xl">PivotReady</span>
      {showSlogan && <span className="ml-2 text-xs text-[#E27D60] font-medium">Are You PivotReady?</span>}
    </div>
  );
};

export default Logo;
