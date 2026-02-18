import Duck from '@/components/Duck';
import FancyRectangle from '@/components/FancyRectangle';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
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
            <div className="h-full">
                <div className="mb-8 flex justify-center">
                    <Title colour="orange">About Us</Title>
                </div>
                {/* Basic Description */}
                <section className="flex flex-col gap-10 md:flex-row">
                    {/* Grid */}
                    <Image
                        src="/images/square-grid.svg"
                        alt="Square Grid"
                        width={500}
                        height={500}
                        className="absolute -z-10 ml-8 mt-8 w-0 max-w-[800px] md:w-[70vw] lg:w-[50vw]"
                    />
                    <div className="mr-2 flex">
                        <FancyRectangle colour={'purple'} offset={'8'} filled rounded>
                            <Image
                                src={'/images/about/meet-and-greet.jpg'}
                                alt={'Meet and Greet'}
                                width={1210}
                                height={800}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                        </FancyRectangle>
                    </div>
                    <div className="mb-10 mt-8 flex flex-col lg:justify-center">
                        <div className="relative flex justify-end">
                            <Image
                                src="/images/white-star.svg"
                                alt="White Star"
                                className="absolute right-0 -translate-x-14 -translate-y-4"
                                width={30}
                                height={30}
                            />
                            <Image
                                src="/images/white-star.svg"
                                alt="White Star"
                                className="absolute right-0 -translate-y-8"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="flex h-fit flex-row self-center border-b-2 border-t-2 border-white bg-grey px-4">
                            <Image
                                src="/images/yellow-triangle.svg"
                                alt="Yellow Triangle"
                                className="mb-12 mr-4"
                                width={30}
                                height={30}
                            />
                            <p className="my-4 text-lg md:text-xl">
                                Ignite Forum is a dynamic technical community at St Vincent College
                                of Engineering and Technology, Nagpur. We bring together students
                                passionate about coding, innovation, and technology. Whether you&apos;re
                                a coding enthusiast, innovator, or simply curious about tech, you&apos;re
                                welcome to join our vibrant community!
                            </p>
                        </div>
                    </div>
                </section>
                {/* Member Perks */}
                <section className="flex flex-col gap-10 md:flex-row">
                    <div className="mr-2 md:w-[54vw]">
                        <div className="mb-4 flex flex-row flex-wrap text-2xl font-black md:mt-6 lg:mt-12 lg:text-3xl">
                            <h3 className="mb-2 mr-2 md:mb-0">Members will have </h3>
                            <div className="flex items-center">
                                <div className="mb-2 w-fit bg-yellow px-2 md:mb-0">
                                    <h3 className="text-grey">access</h3>
                                </div>
                                <h3 className="mb-2 ml-2 md:mb-0">to</h3>
                            </div>
                        </div>
                        <FancyRectangle colour={'purple'} offset={'8'} filled rounded>
                            <Paragraph>
                                <ul className="ml-6 list-disc">
                                    <li>
                                        Access to the{' '}
                                        <span className="font-bold text-yellow">Ignite Hub</span>{' '}
                                        (our dedicated community workspace)
                                    </li>
                                    <li>
                                        Frequent computer science talks on a diverse range of topics
                                    </li>
                                    <li>
                                        Educational{' '}
                                        <span className="font-bold text-purple">workshops</span>
                                    </li>
                                    <li>
                                        <span className="font-bold text-yellow">Social nights</span>
                                    </li>
                                    <li>
                                        A wide{' '}
                                        <span className="font-bold text-orange">network</span> of
                                        other computer science students and graduates
                                    </li>
                                    <li>
                                        And of course,{' '}
                                        <span className="font-bold text-orange">
                                            {' '}
                                            cooperative food
                                        </span>
                                        ,{' '}
                                        <span className="font-bold text-purple">
                                            drink ventures
                                        </span>
                                        , and <span className="font-bold text-yellow">BBQs</span>{' '}
                                        throughout the year
                                    </li>
                                    <li>
                                        And let&apos;s not forget, a{' '}
                                        <span className="font-bold text-yellow">pub crawl</span>{' '}
                                        each year to celebrate our studies
                                    </li>
                                </ul>
                            </Paragraph>
                        </FancyRectangle>
                    </div>
                    <div>
                        <Image src="/images/crosses.svg" alt="Crosses" height={80} width={237} />
                        <Image
                            src={'/images/about/duck-ctf.jpg'}
                            alt={'Duck CTF'}
                            width={500}
                            height={500}
                            className="rounded-xl border-2 border-white"
                        ></Image>
                    </div>
                </section>
                {/* Competitions & Projects */}
                <section className="mt-10 flex flex-col gap-10 md:flex-row">
                    <div className="flex h-fit flex-row self-center border-b-2 border-t-2 border-white bg-grey px-4">
                        <Image
                            src="/images/yellow-triangle.svg"
                            alt="Yellow Triangle"
                            className="mb-12 mr-4"
                            width={30}
                            height={30}
                        />
                        <p className="my-4 text-lg lg:text-xl">
                            Ignite Forum hosts coding challenges, hackathons, and tech competitions
                            throughout the year, providing members the opportunity to showcase their
                            skills and win exciting prizes. We also facilitate collaborative projects
                            where members work in teams on real-world problems, gaining hands-on
                            experience and building a portfolio of impactful work.
                        </p>
                    </div>
                    <div className="mr-2 flex justify-center lg:justify-end">
                        <FancyRectangle colour={'purple'} offset={'8'} filled rounded>
                            <Image
                                src={'/images/about/quiz-night.jpg'}
                                alt={'Quiz Night'}
                                width={1317}
                                height={750}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                        </FancyRectangle>
                    </div>
                </section>
                {/* Welcome to join */}
                <section className="mt-10 grid flex-col gap-6 md:grid-cols-3">
                    <Image
                        src={'/images/about/cocktail-night.jpg'}
                        alt={'Cocktail Night'}
                        width={500}
                        height={500}
                        className="rounded-xl border-2 border-white"
                    ></Image>
                    <Image
                        src={'/images/about/duck-ctf-2.jpg'}
                        alt={'Duck CTF 2'}
                        width={500}
                        height={500}
                        className="rounded-xl border-2 border-white"
                    ></Image>
                    <Image
                        src={'/images/about/ai-panel.jpg'}
                        alt={'AI Panel'}
                        width={500}
                        height={500}
                        className="rounded-xl border-2 border-white"
                    ></Image>
                </section>
                <section className="relative mt-8">
                    <Image
                        src="/images/white-star-outline.svg"
                        alt="White Star Outline"
                        className="absolute z-10 -translate-x-4 -translate-y-4"
                        width={50}
                        height={50}
                    />
                    <div className="relative rounded-xl border-2 border-white bg-grey px-4 py-4 md:px-6 md:py-6">
                        <p className="text-lg md:text-xl">
                            At Ignite Forum, we believe in empowering students to think innovatively,
                            collaborate effectively, and build the future. With a passionate and active
                            community, we provide mentorship, resources, and opportunities for everyone
                            to excel. All are welcome to join us for an exciting journey of learning,
                            building, and growing together.
                        </p>
                    </div>
                    <Image
                        src="/images/white-star-outline.svg"
                        alt="White Star Outline"
                        className="absolute right-0 z-10 -translate-y-8 translate-x-4"
                        width={50}
                        height={50}
                    />
                </section>
                {/* Committee Members */}
                <section id="committee" className="mt-8">
                    {/* Grid */}
                    <Image
                        src="/images/rectangle-grid.svg"
                        alt="Rectangle Grid"
                        width={750}
                        height={750}
                        className="absolute -z-10 ml-20 mt-8 w-0 max-w-[1200px] lg:w-[80vw]"
                    />
                    <div className="flex w-fit bg-orange px-2 lg:mb-0">
                        <h2 className="text-5xl font-bold">Committee Members</h2>
                    </div>
                    <div className="mb-2 mr-2 mt-8 grid auto-rows-fr grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {committeeMembers.map((member, index) => (
                            <FancyRectangle
                                key={index}
                                colour={member.exec ? 'yellow' : 'white'}
                                offset={'8'}
                                filled
                                rounded
                                fullWidth
                                fullHeight
                            >
                                <div
                                    className={`h-full w-full rounded-xl border-2 ${member.exec ? 'border-yellow' : 'border-white'} flex flex-col justify-center bg-grey p-4`}
                                >
                                    <h3 className="text-2xl font-bold">{member.name}</h3>
                                    <p>{member.position}</p>
                                </div>
                            </FancyRectangle>
                        ))}
                    </div>
                    <div className="relative mb-2 mt-8 flex flex-row justify-end space-x-4 *:h-12 md:*:h-16">
                        <Duck colour="white" outline />
                        <Duck colour="white" outline />
                        <Duck colour="white" />
                        <Duck colour="white" />
                        <Duck colour="white" />
                    </div>
                </section>
                <section className="mt-8 md:mt-0">
                    <FancyRectangle colour="purple" offset="8" filled={false}>
                        <div className="w-fit bg-purple px-2 py-2">
                            <h2 className="text-4xl font-bold text-grey md:text-5xl">FAQ</h2>
                        </div>
                    </FancyRectangle>
                    <div className="mt-8" />
                    <div className="flex flex-col gap-x-16 gap-y-8 lg:flex-row">
                        {/* FAQ */}
                        <div className="mb-8 mr-2 flex flex-col justify-items-center gap-12 lg:w-full">
                            {/* Grid */}
                            <Image
                                src="/images/rectangle-grid.svg"
                                alt="Rectangle Grid"
                                width={750}
                                height={750}
                                className="absolute -z-10 ml-20 mt-8 max-h-[600px] w-0 max-w-[1200px] lg:w-[70vw]"
                            />

                            <FAQ
                                question={'How do I become a club member?'}
                                answer={
                                    <p>
                                        You can register as a member on our website{' '}
                                        <a href="/join" className="underline">
                                            here
                                        </a>
                                        . Simply fill in your details and complete the registration
                                        process. You&apos;ll then gain access to all member benefits,
                                        exclusive events, and our community resources. It only takes
                                        a few minutes!
                                    </p>
                                }
                                colour={'orange'}
                            ></FAQ>
                            <FAQ
                                question={'What are the perks of being a member?'}
                                answer={
                                    <div>
                                        <p>
                                            Members enjoy access to the Ignite Hub, expert-led technical
                                            talks and workshops, hackathons and coding competitions,
                                            mentorship from experienced developers, networking opportunities
                                            with industry professionals, and a supportive community of
                                            passionate tech enthusiasts.
                                        </p>
                                    </div>
                                }
                                colour={'yellow'}
                            ></FAQ>
                            <FAQ
                                question={'How much does membership cost?'}
                                answer={
                                    <p>
                                        Membership is affordable and accessible to all. Details about
                                        current membership fees can be found on our{' '}
                                        <a href="/join" className="underline">
                                            join page
                                        </a>
                                        . You can register online through our website, and payments can
                                        be made securely during the registration process.
                                    </p>
                                }
                                colour={'purple'}
                            ></FAQ>
                            <FAQ
                                question={'What is the Ignite Hub?'}
                                answer={
                                    <p>
                                        The Ignite Hub is our dedicated community workspace where members
                                        can collaborate on projects, study together, attend workshops,
                                        and connect with fellow enthusiasts. It&apos;s designed to foster
                                        innovation and provide a welcoming space for all our members to
                                        learn and grow together.
                                    </p>
                                }
                                colour={'orange'}
                            ></FAQ>
                            <FAQ
                                question={'How can I contact Ignite Forum?'}
                                answer={
                                    <p>
                                        Have questions or want to get involved? Reach out to us on our{' '}
                                        <a href="/contact" className="underline">
                                            contact page
                                        </a>
                                        , join our{' '}
                                        <a
                                            href={
                                                LINKS.find((link) => link.name === 'Discord')?.link
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >
                                            Discord community
                                        </a>
                                        , or follow us on social media for updates and announcements.
                                    </p>
                                }
                                colour={'purple'}
                            ></FAQ>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Image
                                src={'/images/about/o-week.jpg'}
                                alt={'O Week'}
                                width={1055.5}
                                height={500}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                            <Image
                                src={'/images/about/women-in-cs.jpg'}
                                alt={'Women in CS'}
                                width={1342}
                                height={500}
                                className="rounded-xl border-2 border-white"
                            ></Image>
                        </div>
                    </div>
                </section>
                <br />
                <Paragraph>
                    For detailed information about our club&apos;s rules and governance, please
                    refer to our{' '}
                    <a href="https://github.com/compsci-adl/Constitution" className="underline">
                        Constitution
                    </a>
                    .
                </Paragraph>
            </div>
        </main>
    );
}
