import Image from "next/image";
import { FC } from "react";
import { StatisticsTabs } from "./Tabs";

export const TokenStatistics: FC = () => {
    return (
        <section className="flex flex-col gap-10">
            <Image
                src="/images/tokens/graph.png"
                alt="graph"
                width={793}
                height={470}
                className="z-10"
            />
            <StatisticsTabs />
        </section>
    );
};
