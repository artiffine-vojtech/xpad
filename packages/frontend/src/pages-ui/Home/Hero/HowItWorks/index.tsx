import { FC } from "react";
import Image from "next/image";

const cards = [
    "/images/home/how-it-works-card-1.png",
    "/images/home/how-it-works-card-2.png",
    "/images/home/how-it-works-card-3.png",
];

export const HowItWorks: FC = () => {
    return (
        <section className="py-16 max-w-[1170px] mx-5 xl:mx-auto">
            <h2 className="text-center lg:text-left text-[32px] font-[32px] leading-[32px] font-square mb-12">
                HOW IT WORKS?
            </h2>
            <div className="flex flex-col flex-wrap items-center md:items-start md:flex-row justify-start gap-5">
                {cards.map((src, i) => (
                    <Card key={i} src={src} isCursor={i === 1} />
                ))}
            </div>
        </section>
    );
};

const Card: FC<{ src: string; isCursor?: boolean }> = ({ src, isCursor }) => {
    return (
        <div className="relative w-[335px] xl:w-[374px] h-[289px] rounded-[20px] hover:scale-105 duration-75">
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
