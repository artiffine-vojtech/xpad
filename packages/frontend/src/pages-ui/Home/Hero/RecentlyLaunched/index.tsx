import Image from "next/image";

import { FC } from "react";
import { Carousel } from "src/components/Carousel";
import { TokenCard } from "src/components/TokenCard";

const cards = [
    {
        id: 1,
        src: "/images/home/card-1.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 2,
        src: "/images/home/card-2.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 3,
        src: "/images/home/card-3.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 4,
        src: "/images/home/card-4.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 5,
        src: "/images/home/card-5.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
];

export const RecentlyLaunched: FC = () => {
    return (
        <section className="pt-[108px] py-16">
            <div className="flex gap-[37px] items-center justify-center mb-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <Image
                        key={i}
                        src="/images/icons/chevron-down.svg"
                        alt="chevron-down"
                        width={24}
                        height={24}
                    />
                ))}

                <h3 className="text-base leading-4 font-semibold tracking-medium">
                    RECENTLY LAUNCHED
                </h3>
                {Array.from({ length: 8 }).map((_, i) => (
                    <Image
                        key={i}
                        src="/images/icons/chevron-down.svg"
                        alt="chevron-down"
                        width={24}
                        height={24}
                    />
                ))}
            </div>

            <Carousel speed={20} gradient autoFill>
                {cards.map((card, i) => (
                    <TokenCard key={i} {...card} />
                ))}
            </Carousel>
        </section>
    );
};
