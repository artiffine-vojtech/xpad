import { Progress } from "@/components/ui/progress";
import { FC } from "react";

type Props = {
    value: number;
};

export const BondingProgress: FC<Props> = ({ value }) => {
    return (
        <div className="flex flex-col gap-4 border border-black rounded-[20px] p-6">
            <h4 className="font-inter text-base leading-4 font-semibold">
                Bonding curve progress
            </h4>
            <div className="flex items-center gap-2">
                <Progress value={value} />
                <span className="text-xs leading-3 tracking-wide font-semibold">
                    {value}%
                </span>
            </div>
        </div>
    );
};
