import { FC } from "react";
import { TokenInfo } from "./TokenInfo";
import { TradeForm } from "./TradeForm";
import { BondingProgress } from "./BondingProgress";
import { HolderDistribution } from "./HolderDistribution";

export const TokenActions: FC = () => {
    return (
        <section className="flex flex-col gap-8 max-w-[327px]">
            <TokenInfo />
            <TradeForm />
            <BondingProgress value={72} />
            <HolderDistribution />
        </section>
    );
};
