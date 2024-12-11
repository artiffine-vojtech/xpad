import { FC, Fragment } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";

import { TokenCardLarge } from "@/components/TokenCardLarge";
import Link from "next/link";
import { ActionWrapper } from "../ActionLinks/ActionWrapper";
import { ArrowUpRight } from "lucide-react";

const cards = [
    {
        id: 1,
        src: "/images/home/card-1.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        description: "Lorem ipsum dolor sit amet, consec.",
        created: "Created 2 seconds ago",
    },
    {
        id: 2,
        src: "/images/home/card-2.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        created: "Created 2 seconds ago",
    },
    {
        id: 3,
        src: "/images/home/card-3.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. M dui vel mauris consectetu...",
        created: "Created 2 seconds ago",
    },
    {
        id: 4,
        src: "/images/home/card-4.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor dui vel mauris consectetu...",
        created: "Created 2 seconds ago",
    },
    {
        id: 5,
        src: "/images/home/card-5.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        created: "Created 2 seconds ago",
    },
    {
        id: 6,
        src: "/images/home/card-2.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        created: "Created 2 seconds ago",
    },
    {
        id: 7,
        src: "/images/home/card-3.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. M dui vel mauris consectetu...",
        created: "Created 2 seconds ago",
    },
    {
        id: 8,
        src: "/images/home/card-4.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor dui vel mauris consectetu...",
        created: "Created 2 seconds ago",
    },
    {
        id: 9,
        src: "/images/home/card-5.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        created: "Created 2 seconds ago",
    },
    {
        id: 10,
        src: "/images/home/card-3.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. M dui vel mauris consectetu...",
        created: "Created 2 seconds ago",
    },
    {
        id: 11,
        src: "/images/home/card-4.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor dui vel mauris consectetu...",
        created: "Created 2 seconds ago",
    },
    {
        id: 12,
        src: "/images/home/card-5.png",
        tokenName: "Name of the token",
        tokenCreator: "Creator",
        marketCap: "41.2",
        created: "Created 2 seconds ago",
    },
];

export const TokensList: FC = () => {
    return (
        <section>
            <div className="flex flex-col gap-6 lg:flex-row justify-between items-start lg:items-end mb-8">
                <h2 className="text-[32px] leading-10 font-square">
                    all tokens
                </h2>
                <Select>
                    <SelectTrigger className="w-fit">
                        <SelectValue placeholder="RECENTLY LAUNCHED" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">RECENTLY LAUNCHED</SelectItem>
                        <SelectItem value="dark">RECENTLY LAUNCHED</SelectItem>
                        <SelectItem value="system">
                            RECENTLY LAUNCHED
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {cards.map((card, i, arr) => {
                    if (i === Math.floor(arr.length / 2)) {
                        return (
                            <Fragment key={card.id}>
                                <Link
                                    href="/token-launcher"
                                    className="sm:hidden"
                                >
                                    <ActionWrapper className="flex flex-col justify-between bg-red hover:bg-dark-red h-[289px]">
                                        <ArrowUpRight
                                            width={24}
                                            height={24}
                                            color="white"
                                            className="ml-auto"
                                        />
                                        <span className="text-[32px] leading-[32px] font-square text-white">
                                            LAUNCH <br /> YOUR <br /> TOKEN
                                        </span>
                                    </ActionWrapper>
                                </Link>
                                <TokenCardLarge key={card.id} {...card} />
                            </Fragment>
                        );
                    }
                    return <TokenCardLarge key={card.id} {...card} />;
                })}
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/launchpad">10</PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    );
};
