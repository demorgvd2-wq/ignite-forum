import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    colour?: 'cyan' | 'purple' | 'ghost' | 'outline';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    size?: 'base' | 'small' | 'large';
    targetBlank?: boolean;
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            colour = 'cyan',
            href,
            type = 'button',
            loading = false,
            size = 'base',
            targetBlank = false,
            className,
            ...props
        },
        ref
    ) => {
        const isAnchor = !!href;
        const Component = isAnchor ? ('a' as any) : 'button';

        const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background inline-flex items-center justify-center whitespace-nowrap';

        const colours = {
            cyan: 'bg-gradient-cyan text-background hover:shadow-button hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
            purple: 'bg-accent-purple text-background hover:shadow-button hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
            ghost: 'text-foreground hover:bg-surface hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
            outline: 'border border-accent text-accent hover:bg-accent/10 disabled:opacity-50 disabled:cursor-not-allowed',
        };

        const sizes = {
            small: 'px-4 py-2 text-sm',
            base: 'px-6 py-2.5 text-base',
            large: 'px-8 py-3.5 text-lg',
        };

        const buttonClassName = cn(baseStyles, colours[colour], sizes[size], className);

        if (isAnchor) {
            return (
                <a
                    href={href}
                    target={targetBlank ? '_blank' : undefined}
                    rel={targetBlank ? 'noopener noreferrer' : undefined}
                    className={buttonClassName}
                    {...(props as any)}
                >
                    {children}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                type={type}
                disabled={loading}
                className={buttonClassName}
                {...props}
            >
                {loading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {children}
                    </>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
