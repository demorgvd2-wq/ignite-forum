import { LINKS } from '@/data/links';
import Link from './Link';

export default function Footer() {
    return (
        <footer className="relative z-0 pt-12 md:pt-16 mt-20">
            <div className="relative mx-auto w-responsive">
                {/* Top border with gradient */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-12" />
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-8">
                    {/* Brand & Description */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="bg-gradient-cyan bg-clip-text text-transparent">Ignite</span>
                            <span className="text-accent ml-1">Forum</span>
                        </h3>
                        <p className="text-text-secondary mb-6 max-w-md">
                            A technical community at St Vincent College of Engineering and Technology, Nagpur. Uniting passionate engineers and innovators.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <nav className="space-y-2">
                            <a href="/" className="text-text-secondary hover:text-accent transition-colors">Home</a>
                            <a href="/about" className="text-text-secondary hover:text-accent transition-colors">About</a>
                            <a href="/events" className="text-text-secondary hover:text-accent transition-colors">Events</a>
                            <a href="/join" className="text-text-secondary hover:text-accent transition-colors">Join</a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {LINKS.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:text-primary transition-colors text-2xl"
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-secondary text-sm">
                        &copy; {new Date().getFullYear()} Ignite Forum. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="/contact" className="text-text-secondary hover:text-accent transition-colors">Contact</a>
                        <a href="#" className="text-text-secondary hover:text-accent transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
