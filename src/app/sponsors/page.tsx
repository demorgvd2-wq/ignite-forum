import Sponsors from '@/app/sponsors/Sponsors';
import Duck from '@/components/Duck';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import type { Sponsor } from '@/data/sponsors';
import { YEAR, fetchSponsors } from '@/data/sponsors';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sponsors',
};

export default async function SponsorsPage() {
    // Get sponsors from payload
    const sponsors: Sponsor[] = await fetchSponsors();

    return (
        <main className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-8">
                <Duck colour="yellow" size={80} className="hidden md:block" />
                <Title colour="yellow">{`${YEAR} Sponsors`}</Title>
                <Duck colour="yellow" size={80} className="hidden md:block" />
            </div>
            <div className="max-w-3xl border-x-4 border-white p-2 text-center text-lg md:p-5 md:text-2xl">
                <b>Ignite Forum</b> is proudly supported by our <b>generous sponsors</b>. Their
                unwavering support enables us to host events, workshops, and competitions, creating
                opportunities for students to learn, innovate, and excel in the tech community.
            </div>
            <Sponsors sponsors={sponsors} />
            <Paragraph>
                If you&apos;d like to partner with Ignite Forum, please reach out to us on our{' '}
                <a href="/contact" className="underline">
                    contact page
                </a>
                .
            </Paragraph>
        </main>
    );
}
