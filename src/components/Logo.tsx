import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
  dotColor?: string;
  taglineColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  showTagline = true,
  className = "",
  dotColor = "text-fuchsia-500",
  taglineColor = "text-fuchsia-400/90",
}) => {
  const sizeClasses = {
    sm: {
      text: "text-lg sm:text-xl",
      dot: "text-xl sm:text-2xl",
      tagline: "text-[9px] sm:text-[10px] -mt-0.5",
      icon: "w-7 h-7 text-xs",
    },
    md: {
      text: "text-2xl sm:text-3xl",
      dot: "text-3xl sm:text-4xl",
      tagline: "text-[11px] sm:text-[12px] -mt-0.5 sm:-mt-1",
      icon: "w-9 h-9 text-sm",
    },
    lg: {
      text: "text-3xl sm:text-4xl",
      dot: "text-4xl sm:text-5xl",
      tagline: "text-xs sm:text-sm -mt-0.5 sm:-mt-1",
      icon: "w-11 h-11 text-base",
    },
    xl: {
      text: "text-4xl sm:text-5xl",
      dot: "text-5xl sm:text-6xl",
      tagline: "text-sm sm:text-base -mt-1 sm:-mt-1.5",
      icon: "w-14 h-14 text-lg",
    },
  };

  const current = sizeClasses[size];

  return (
    <div className={`inline-flex flex-col select-none leading-none ${className}`}>
      {/* Main Wordmark */}
      <div className="flex items-baseline tracking-tighter">
        <span
          className={`font-black italic text-white ${current.text} tracking-[-0.04em] transition-colors`}
          style={{ fontStyle: "italic" }}
        >
          moockup
        </span>
        <span
          className={`font-black italic ${dotColor} ${current.dot} drop-shadow-[0_0_12px_rgba(217,70,239,0.7)] ml-0.5 animate-pulse`}
          style={{ fontStyle: "italic" }}
        >
          .
        </span>
      </div>

      {/* Tagline: your vision, our mission */}
      {showTagline && (
        <span
          className={`font-semibold italic tracking-wider lowercase ${taglineColor} ${current.tagline} transition-colors`}
          style={{ fontStyle: "italic" }}
        >
          your vision, our mission
        </span>
      )}
    </div>
  );
};
