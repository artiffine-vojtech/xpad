import { FC } from "react";
import Image from "next/image";

const cards = [
    "/images/home/how-it-works-card-1.png",
    "/images/home/how-it-works-card-2.png",
    "/images/home/how-it-works-card-3.png",
];

export const HowItWorks: FC = () => {
    return (
        <section className="pb-16 px-[140px]">
            <h2 className="text-[32px] font-[32px] leading-[32px] font-littlebit-square font-variation-settings-square mb-12">
                HOW IT WORKS?
            </h2>
            <div className="flex justify-between gap-5 ">
                {cards.map((src, i) => (
                    <Card key={i} src={src} isCursor={i === 1} />
                ))}
            </div>
        </section>
    );
};

const Card: FC<{ src: string; isCursor?: boolean }> = ({ src, isCursor }) => {
    return (
        <div className="relative w-[374px] h-[289px] rounded-[20px]">
            <Image src={src} alt="card" fill />
            {isCursor && (
                <Image
                    src="/images/home/cursor.svg"
                    alt="card"
                    width={44}
                    height={69}
                    className="absolute top-[83px] left-[128px]"
                />
            )}
        </div>
    );
};
