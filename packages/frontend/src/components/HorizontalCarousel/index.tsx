"use client";

import { ChevronSeparator } from "@/components/ChevronSeparator";
import { breakpoints } from "@/utils/constants";
import { useBreakpoint } from "@/utils/hooks/useBreakpoint";
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

export const HorizontalCarousel: FC = () => {
    const isMobile = useBreakpoint(breakpoints["2xl"]);

    return (
        <section className="overflow-hidden -mx-5 2xl:mx-unset">
            <div className="flex gap-[37px] items-center justify-center mb-4">
                <ChevronSeparator length={8} />
                <h3 className="heading-h3 whitespace-nowrap">
                    RECENTLY LAUNCHED
                </h3>
                <ChevronSeparator length={8} />
            </div>

            <Carousel speed={20} gradient={!isMobile} autoFill>
                {cards.map((card, i) => (
                    <Link key={i} href={`/token/${card.id}`}>
                        <TokenCard content {...card} />
                    </Link>
                ))}
            </Carousel>
        </section>
    );
};
