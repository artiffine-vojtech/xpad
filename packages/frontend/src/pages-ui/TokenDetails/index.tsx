"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { Decorations } from "./Decorations";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { TokenActions } from "./TokenActions";
import { TokenStatistics } from "./TokenStatistics";
import { cards } from "../Home/Hero/RecentlyLaunched";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const TokenDetails: FC = () => {
    const { back } = useRouter();
    return (
        <main className="relative flex-1 pt-8 pb-16">
            <Decorations />
            <div className="mx-[140px]">
                <div className="flex justify-between">
                    <Button variant="link" className="p-0" onClick={back}>
                        <ArrowLeft width={20} height={20} />
                        <span>Back</span>
                    </Button>
                    <div className="flex gap-6">
                        <Image
                            src="/images/home/card-2.png"
                            alt="card"
                            width={60}
                            height={60}
                            className="border rounded"
                        />
                        <div className="flex flex-col justify-between gap-1">
                            <h3 className="text-base font-semibold leading-4 tracking-medium">
                                Created by:
                            </h3>
                            <span className="text-base leading-4 font-semibold tracking-medium uppercase">
                                Creator name
                            </span>
                            <span
                                className={cn(
                                    "text-[11px] leading-4 font-semibold tracking-wide text-dark-purple"
                                )}
                            >
                                Market cap: ${cards[1].marketCap}K
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 pt-16 ">
                    <TokenActions />
                    <TokenStatistics />
                </div>
            </div>
        </main>
    );
};
