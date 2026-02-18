import React from 'react';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
  hover?: boolean;
}

export default function ModernCard({
  children,
  className,
  variant = 'default',
  hover = true,
}: ModernCardProps) {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';

  const variants = {
    default: 'bg-surface border border-surface-light',
    gradient: 'bg-gradient-to-br from-accent-purple/10 to-accent/10 border border-accent/20',
    glass:
      'bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/50',
  };

  const hoverStyles = hover ? 'hover:shadow-card hover:border-accent/50' : '';

  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  );
}
