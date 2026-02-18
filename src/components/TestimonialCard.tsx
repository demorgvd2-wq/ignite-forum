import type { Colour } from '@/constants/colours';
import FancyRectangle from './FancyRectangle';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    colour: Colour;
}

export default function TestimonialCard({ quote, author, role, colour }: TestimonialCardProps) {
    return (
        <FancyRectangle colour={colour} offset="6" filled fullWidth fullHeight>
            <div className="flex h-full w-full flex-col justify-between border-4 border-black bg-white px-6 py-8">
                <div className="mb-6">
                    <svg
                        className="h-8 w-8 text-grey"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5s-7 3.75-7 5c0 6 0 7 7 8zm14 6c3 0 7-1 7-8v-6c0-1.25-4.5-5-7-5s-7 3.75-7 5v6c0 7 4 8 7 8z" />
                    </svg>
                    <p className="mt-4 text-lg text-black md:text-xl">
                        {quote}
                    </p>
                </div>
                <div>
                    <p className="font-bold text-black">
                        {author}
                    </p>
                    <p className="text-sm text-grey">
                        {role}
                    </p>
                </div>
            </div>
        </FancyRectangle>
    );
}
