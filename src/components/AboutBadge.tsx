import React from "react";

interface AboutBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutBadge: React.FC<AboutBadgeProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-pink-50 w-full">
      {/* Icon Wrapper - Ensuring Equal Shape for All */}
      <div className="flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-md">
        {icon}
      </div>

      {/* Text Wrapper - Keeping Sizes Consistent */}
      <div className="flex-1 text-left min-w-0">
        <h3 className="font-semibold text-lg text-pink-600 leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-snug">{description}</p>
      </div>
    </div>
  );
};

export default AboutBadge;
