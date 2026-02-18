import LINKS from '@/constants/links';
import Link from 'next/link';

export type HeaderNextStep = 'signup' | 'payment' | null;

export type HeaderData = {
    isSignedIn: boolean;
    nextStep: HeaderNextStep;
    isCommittee: boolean;
    isAdmin: boolean;
    avatar: string | null;
};

export default function Header() {
    return (
        <header className="fixed z-[9999] w-full">
            <div className="relative">
                {/* Background with glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-background/40 backdrop-blur-md border-b border-white/10" />
                
                <div className="relative mx-auto w-responsive px-4 py-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link 
                            href="/" 
                            className="group relative text-2xl font-black transition-all duration-300"
                        >
                            <span className="bg-gradient-cyan bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary-dark">
                                Ignite
                            </span>
                            <span className="text-accent ml-1">Forum</span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex gap-8 items-center">
                            {LINKS.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href ?? '#'}
                                    className="text-foreground hover:text-accent transition-colors duration-300 text-sm font-medium relative group"
                                >
                                    {link.title}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-cyan group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="flex gap-4 items-center">
                            <Link
                                href="/join"
                                className="hidden sm:flex px-6 py-2.5 rounded-lg bg-gradient-cyan text-background font-semibold transition-all duration-300 hover:shadow-button hover:scale-105 active:scale-95"
                            >
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
