import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import ModernCard from '@/components/ModernCard';
import { fetchEvents, type Event } from '@/data/events';
import { CAROUSEL_IMAGES } from '@/data/images';
import { SPONSOR_TYPES, fetchSponsors } from '@/data/sponsors';
import { TESTIMONIALS } from '@/data/testimonials';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import UpcomingEventCard from './UpcomingEventCard';

export default async function HomePage() {
    const EVENTS: Event[] = await fetchEvents();
    const CURRENT_DATE = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'Australia/Adelaide' })
    );
    const UPCOMING_EVENTS = EVENTS.filter((event) => event.date.timestamp >= CURRENT_DATE);
    const sponsors = await fetchSponsors();

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="mb-20 py-12 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                                <span className="text-gradient-cyan bg-clip-text text-transparent">Innovate</span>,{' '}
                                <span className="text-accent">Connect</span>, <span className="text-accent-purple">Excel</span>
                            </h1>
                        </div>
                        
                        <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                            Ignite Forum is a technical community where passionate engineers and innovators come together to build, learn, and grow. Join us at St Vincent College of Engineering and Technology, Nagpur.
                        </p>

                        <div className="flex gap-4 pt-6">
                            <Button colour="cyan" href="/join" size="large">
                                Join Ignite Forum
                            </Button>
                            <Button colour="outline" href="#features" size="large">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-3xl" />
                        <div className="relative rounded-2xl overflow-hidden border border-accent/30">
                            <Image
                                src="/images/square-grid.svg"
                                alt="Hero"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="mb-20 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: '150+', label: 'Active Members' },
                        { number: '25+', label: 'Workshops' },
                        { number: '10+', label: 'Projects' },
                        { number: '5+', label: 'Hackathons' },
                    ].map((stat, i) => (
                        <ModernCard key={i} variant="glass">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-text-secondary">{stat.label}</p>
                            </div>
                        </ModernCard>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="mb-20 py-12">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                        What <span className="text-accent">We Offer</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        Everything you need to accelerate your tech journey and connect with like-minded innovators.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard
                        title="Workshops & Talks"
                        icon={<div className="text-4xl">🚀</div>}
                    >
                        <p className="text-text-secondary">
                            Learn from industry experts through cutting-edge technical talks and hands-on workshops covering the latest technologies and best practices.
                        </p>
                    </GlassCard>

                    <GlassCard
                        title="Hackathons"
                        icon={<div className="text-4xl">⚡</div>}
                    >
                        <p className="text-text-secondary">
                            Compete, collaborate, and create in exciting hackathon events. Build innovative solutions, win prizes, and showcase your skills.
                        </p>
                    </GlassCard>

                    <GlassCard
                        title="Community"
                        icon={<div className="text-4xl">🤝</div>}
                    >
                        <p className="text-text-secondary">
                            Connect with passionate peers, build meaningful relationships, and grow together in our vibrant tech community.
                        </p>
                    </GlassCard>

                    <GlassCard
                        title="Competitions"
                        icon={<div className="text-4xl">🏆</div>}
                    >
                        <p className="text-text-secondary">
                            Participate in coding challenges that test your skills and help you grow as a developer while competing with peers.
                        </p>
                    </GlassCard>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="mb-20 py-16 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20" />
                <div className="relative z-10 text-center space-y-6 px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance">
                        Ready to <span className="text-accent">Ignite</span> Your Passion?
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Join hundreds of engineers and innovators building the future together.
                    </p>
                    <Button colour="cyan" href="/join" size="large">
                        Get Started Now
                    </Button>
                </div>
            </section>

            {/* Upcoming Events */}
            {UPCOMING_EVENTS.length > 0 && (
                <section className="mb-20 py-12">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                            Upcoming <span className="text-accent">Events</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {UPCOMING_EVENTS.slice(0, 4).map((event, i) => (
                            <UpcomingEventCard key={i} event={event} index={i} />
                        ))}
                    </div>
                </section>
            )}

            {/* Testimonials Section */}
            {TESTIMONIALS.length > 0 && (
                <section className="mb-20 py-12">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                            What Members <span className="text-accent">Say</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {TESTIMONIALS.map((testimonial, i) => (
                            <ModernCard key={i} variant="gradient">
                                <div className="space-y-4">
                                    <div className="text-accent text-2xl">★★★★★</div>
                                    <p className="text-foreground italic">"{testimonial.quote}"</p>
                                    <div className="pt-4 border-t border-white/10">
                                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                                        <p className="text-text-secondary text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </ModernCard>
                        ))}
                    </div>
                </section>
            )}

            {/* Sponsors Section */}
            {sponsors && sponsors.length > 0 && (
                <section className="mb-20 py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                            Proud Partners
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Supported by organizations committed to fostering tech talent.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {sponsors.map((sponsor) => (
                            <ModernCard key={sponsor.id} variant="glass" hover>
                                <a href={sponsor.website || '#'} target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center justify-center h-32">
                                        {sponsor.logo && (
                                            <Image
                                                src={sponsor.logo.url}
                                                alt={sponsor.name}
                                                width={200}
                                                height={100}
                                                className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                                            />
                                        )}
                                    </div>
                                </a>
                            </ModernCard>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
