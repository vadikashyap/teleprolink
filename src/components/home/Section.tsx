import React from "react";
import { cn } from "../../utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundElements?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  backgroundElements,
}) => {
  return (
    <section className={cn("relative overflow-hidden py-16", className)}>
      {backgroundElements}
      <div className={cn("container-wide relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
