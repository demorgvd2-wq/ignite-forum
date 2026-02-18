import FancyRectangle from '@/components/FancyRectangle';
import ImageCarousel from '@/components/ImageCarousel';
import Title from '@/components/Title';
import { CAROUSEL_IMAGES } from '@/data/images';

export default function Info({ className }: { className?: string }) {
    return (
        <section className={`${className} flex flex-col items-center gap-8`}>
            <Title colour="purple">Events</Title>
            <div className="space-y-4">
                <p>
                    Ignite Forum is excited to be hosting a variety of engaging events throughout the
                    year, from technical workshops to hackathons and networking sessions.
                </p>
                <p>Check out some of our upcoming events below and join our thriving community!</p>
            </div>
            <div className="mb-4 mr-4">
                <FancyRectangle colour="white" offset="16" filled rounded>
                    <div className="relative h-full w-full rounded bg-white p-1">
                        <ImageCarousel images={CAROUSEL_IMAGES} width={400} height={300} />
                    </div>
                </FancyRectangle>
            </div>
        </section>
    );
}
