import type { Colour } from '@/constants/colours';
import FancyRectangle from './FancyRectangle';

interface StatCardProps {
    number: number;
    label: string;
    colour: Colour;
}

export default function StatCard({ number, label, colour }: StatCardProps) {
    return (
        <FancyRectangle colour={colour} offset="6" filled fullWidth fullHeight>
            <div className="flex h-full w-full flex-col items-center justify-center border-4 border-black bg-white px-6 py-8 text-center">
                <div className="text-5xl font-black text-grey md:text-6xl">
                    {number}+
                </div>
                <div className="mt-4 text-lg font-bold text-black md:text-xl">
                    {label}
                </div>
            </div>
        </FancyRectangle>
    );
}
