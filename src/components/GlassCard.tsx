import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

export default function GlassCard({
  children,
  className,
  title,
  icon,
}: GlassCardProps) {
  return (
    <div className={cn(
      'group relative rounded-2xl',
      'bg-gradient-to-br from-white/10 via-white/5 to-transparent',
      'border border-white/20 hover:border-accent/50',
      'backdrop-blur-xl',
      'p-8 transition-all duration-300',
      'hover:shadow-glow hover:from-white/15 hover:via-white/10',
      'overflow-hidden',
      className
    )}>
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-secondary/0 group-hover:from-accent/10 group-hover:to-secondary/10 transition-all duration-300 rounded-2xl pointer-events-none" />

      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-accent group-hover:text-primary transition-colors duration-300">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
}
