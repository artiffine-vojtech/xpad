import Image from "next/image";
import Link from "next/link";

import { FC } from "react";
import { Carousel } from "src/components/Carousel";
import { TokenCard } from "src/components/TokenCard";

export const cards = [
    {
        id: 1,
        image: {
            src: "/images/home/card-1.png",
            alt: "token-1",
            size: 68,
        },
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 2,
        image: {
            src: "/images/home/card-2.png",
            alt: "token-2",
            size: 68,
        },
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 3,
        image: {
            src: "/images/home/card-3.png",
            alt: "token-3",
            size: 68,
        },
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 4,
        image: {
            src: "/images/home/card-4.png",
            alt: "token-4",
            size: 68,
        },
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 5,
        image: {
            src: "/images/home/card-5.png",
            alt: "token-1",
            size: 68,
        },
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 6,
        image: {
            src: "/images/home/card-5.png",
            alt: "token-1",
            size: 52,
        },
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 7,
        image: {
            src: "/images/home/card-2.png",
            alt: "token-1",
            size: 52,
        },
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
    },
    {
        id: 7,
        image: {
            src: "/images/home/card-3.png",
            alt: "token-1",
            size: 52,
        },
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

                <h3 className="heading-h3">RECENTLY LAUNCHED</h3>
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
                    <Link key={i} href={`/token/${card.id}`}>
                        <TokenCard content {...card} />
                    </Link>
                ))}
            </Carousel>
        </section>
    );
};
