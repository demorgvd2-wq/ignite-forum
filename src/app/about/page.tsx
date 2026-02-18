import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';
import ModernCard from '@/components/ModernCard';
import { fetchCommitteeMember } from '@/data/committee-members';
import { LINKS } from '@/data/links';
import type { Metadata } from 'next';
import Image from 'next/image';
import FAQ from './FAQ';

export const metadata: Metadata = {
    title: 'About',
};

export default async function AboutPage() {
    const committeeMembers = await fetchCommitteeMember();

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="mb-20 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-balance">
                                About <span className="text-accent">Ignite Forum</span>
                            </h1>
                        </div>
                        
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Ignite Forum is a dynamic technical community at St Vincent College of Engineering and Technology, Nagpur. We bring together students passionate about coding, innovation, and technology to collaborate, learn, and build the future.
                        </p>

                        <div className="space-y-4 pt-6">
                            <div className="flex gap-4">
                                <div className="text-2xl text-accent">🚀</div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Innovation First</h3>
                                    <p className="text-text-secondary text-sm">Pushing boundaries and exploring cutting-edge technologies</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-2xl text-accent">🤝</div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Community Driven</h3>
                                    <p className="text-text-secondary text-sm">Building meaningful connections with passionate peers</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-2xl text-accent">📈</div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Growth Focused</h3>
                                    <p className="text-text-secondary text-sm">Empowering members to achieve their full potential</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hidden lg:block relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-3xl" />
                        <div className="relative rounded-2xl overflow-hidden border border-accent/30 h-96">
                            <Image
                                src="/images/about/meet-and-greet.jpg"
                                alt="Community gathering"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="mb-20 py-12">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                        Our <span className="text-accent">Mission</span>
                    </h2>
                </div>

                <ModernCard variant="glass" className="mb-12">
                    <p className="text-lg text-foreground leading-relaxed">
                        At Ignite Forum, we believe in empowering students to think innovatively, collaborate effectively, and build the future. With a passionate and active community, we provide mentorship, resources, and opportunities for everyone to excel. We are committed to fostering a culture of innovation, inclusion, and excellence.
                    </p>
                </ModernCard>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard title="Excellence" icon={<div className="text-4xl">⭐</div>}>
                        <p className="text-text-secondary">
                            Committed to delivering high-quality events, workshops, and experiences that empower our members.
                        </p>
                    </GlassCard>

                    <GlassCard title="Inclusion" icon={<div className="text-4xl">🌍</div>}>
                        <p className="text-text-secondary">
                            Creating a welcoming space where everyone feels valued and can contribute their unique perspectives.
                        </p>
                    </GlassCard>

                    <GlassCard title="Innovation" icon={<div className="text-4xl">💡</div>}>
                        <p className="text-text-secondary">
                            Encouraging creative thinking and exploration of new technologies and methodologies.
                        </p>
                    </GlassCard>
                </div>
            </section>

            {/* Member Benefits */}
            <section className="mb-20 py-12">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                        Why Join <span className="text-accent">Ignite Forum</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: 'Ignite Hub Access',
                            description: 'Dedicated community workspace for collaboration, study, and networking.',
                            icon: '🏢'
                        },
                        {
                            title: 'Expert Workshops',
                            description: 'Learn from industry professionals and experienced mentors in our structured workshops.',
                            icon: '📚'
                        },
                        {
                            title: 'Hackathons',
                            description: 'Compete, collaborate, and showcase your skills in exciting annual hackathon events.',
                            icon: '⚡'
                        },
                        {
                            title: 'Tech Talks',
                            description: 'Stay updated with cutting-edge technologies through regular technical talks and seminars.',
                            icon: '🎤'
                        },
                        {
                            title: 'Community Network',
                            description: 'Build meaningful connections with passionate peers who share your interests.',
                            icon: '🤝'
                        },
                        {
                            title: 'Career Growth',
                            description: 'Access mentorship, networking opportunities, and resources for professional development.',
                            icon: '📈'
                        },
                    ].map((benefit, i) => (
                        <GlassCard key={i} title={benefit.title} icon={<div className="text-4xl">{benefit.icon}</div>}>
                            <p className="text-text-secondary">
                                {benefit.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Committee Members */}
            {committeeMembers && committeeMembers.length > 0 && (
                <section className="mb-20 py-12">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                            Meet the <span className="text-accent">Team</span>
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Passionate leaders dedicated to making Ignite Forum exceptional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {committeeMembers.slice(0, 6).map((member, i) => (
                            <ModernCard key={i} variant="glass">
                                <div className="space-y-4 text-center">
                                    {member.image && (
                                        <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                                            <Image
                                                src={member.image.url}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                                        <p className="text-accent text-sm">{member.position}</p>
                                    </div>
                                </div>
                            </ModernCard>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            <section className="mb-20 py-12">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                        Frequently Asked <span className="text-accent">Questions</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    <FAQ
                        question="How do I become a club member?"
                        answer={
                            <p>
                                You can register as a member on our{' '}
                                <a href="/join" className="text-accent hover:text-primary underline">
                                    join page
                                </a>
                                . Simply fill in your details and complete the registration process. You&apos;ll then gain access to all member benefits, exclusive events, and our community resources.
                            </p>
                        }
                        colour="accent"
                    />
                    <FAQ
                        question="What are the benefits of membership?"
                        answer={
                            <p>
                                Members enjoy access to the Ignite Hub, expert-led technical talks and workshops, hackathons and coding competitions, mentorship from experienced developers, networking opportunities, and a supportive community of passionate tech enthusiasts.
                            </p>
                        }
                        colour="secondary"
                    />
                    <FAQ
                        question="How can I contact Ignite Forum?"
                        answer={
                            <p>
                                Reach out to us on our{' '}
                                <a href="/contact" className="text-accent hover:text-primary underline">
                                    contact page
                                </a>
                                , join our Discord community, or follow us on social media for updates and announcements.
                            </p>
                        }
                        colour="accent"
                    />
                </div>
            </section>

            {/* Call to Action */}
            <section className="mb-20 py-16 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20" />
                <div className="relative z-10 text-center space-y-6 px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance">
                        Ready to Join <span className="text-accent">Ignite Forum</span>?
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Become part of a thriving community of innovators and engineers.
                    </p>
                    <Button colour="cyan" href="/join" size="large">
                        Join Now
                    </Button>
                </div>
            </section>
        </main>
    );
}
