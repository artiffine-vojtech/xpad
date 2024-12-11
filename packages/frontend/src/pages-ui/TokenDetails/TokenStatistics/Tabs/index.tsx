import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaticticsTable } from "../StatisticsTable";
import Image from "next/image";

export const StatisticsTabs: FC = () => {
    return (
        <Tabs defaultValue="trades">
            <TabsList className="flex flex-col lg:flex-row gap-6 items-start justify-between w-full mb-[100px] lg:mb-8">
                <h2 className="flex-1 font-square text-black text-[32px] leading-8">
                    ACTIVITY
                </h2>
                <div>
                    <TabsTrigger
                        value="chat"
                        className="data-[state=active]:shadow-none data-[state=active]:bg-transparent "
                    >
                        CHAT
                    </TabsTrigger>
                    <TabsTrigger
                        value="trades"
                        className="data-[state=active]:shadow-none data-[state=active]:bg-transparent "
                    >
                        TRADES
                    </TabsTrigger>
                </div>
            </TabsList>
            <TabsContent value="chat">
                <div className="flex flex-col gap-16">
                    <Image
                        src="/images/tokens/chat-input.png"
                        alt="chat"
                        width={793}
                        height={191}
                    />
                    <Image
                        src="/images/tokens/chat.png"
                        alt="chat"
                        width={793}
                        height={1287}
                    />
                </div>
            </TabsContent>
            <TabsContent value="trades">
                <StaticticsTable />
            </TabsContent>
        </Tabs>
    );
};
