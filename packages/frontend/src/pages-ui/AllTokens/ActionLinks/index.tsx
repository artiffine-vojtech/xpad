import { TokenCard } from "@/components/TokenCard";
import { ArrowUpRight, File } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { ActionWrapper } from "./ActionWrapper";
import Link from "next/link";

const tokenOfTheDay = {
    id: 1,
    image: {
        src: "/images/home/card-1.png",
        alt: "token-1",
        size: 68,
    },
    tokenName: "Name of the token",
    tokenCreator: "Creator",
    marketCap: "41.2",
};

export const ActionLinks: FC = () => {
    return (
        <section className="flex flex-col gap-5 sticky top-10 h-fit">
            <ActionWrapper className="bg-purple hover:bg-pure-purple duration-75">
                <div className="flex justify-between mb-5">
                    <h3 className="heading-h3 text-end">TOKEN OF THE DAY</h3>
                    <ArrowUpRight width={20} height={20} />
                </div>
                <TokenCard
                    {...tokenOfTheDay}
                    wrapperClassName="border-none gap-5 p-0 m-0 "
                    textClassName="text-black"
                />
            </ActionWrapper>
            <Link href="/token-launcher">
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

            <div className="flex gap-5">
                <ActionWrapper className="flex justify-center items-center p-8  size-[95px] bg-[#26A4E3] hover:bg-[#1681B7]">
                    <Image
                        src="/images/icons/telegram-white.svg"
                        alt="telegram"
                        width={31}
                        height={25}
                    />
                </ActionWrapper>
                <ActionWrapper className="flex justify-center items-center p-8 size-[95px] bg-[#5865F2] hover:bg-[#3A47D3]">
                    <Image
                        src="/images/icons/discord-white.svg"
                        alt="discord"
                        width={31}
                        height={31}
                    />
                </ActionWrapper>
                <ActionWrapper className="flex justify-center items-center p-8 size-[95px] bg-lime hover:bg-dark-lime">
                    <File width={28} height={28} />
                </ActionWrapper>
            </div>
            <ActionWrapper className="flex flex-col justify-between bg-lemon hover:bg-dark-lemon h-[200px]">
                <div className="flex justify-between">
                    <Image
                        src="/images/tokens/rocket.png"
                        alt="rocket"
                        width={128}
                        height={54}
                    />
                    <ArrowUpRight width={20} height={20} color="black" />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold leading-4 tracking-medium">
                        HOW TO LAUNCH YOUR TOKEN
                    </h3>
                    <span className="text-sm font-normal leading-4 tracking-medium">
                        STEP BY STEP GUIDE
                    </span>
                </div>
            </ActionWrapper>
        </section>
    );
};
