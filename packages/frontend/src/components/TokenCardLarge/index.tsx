import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

export type Props = {
    id: number;
    src: string;
    tokenName: string;
    tokenCreator: string;
    marketCap: string;
    description?: string;
    created?: string;
};

export const TokenCardLarge: FC<Props> = ({
    id,
    src,
    tokenName,
    tokenCreator,
    marketCap,
    description,
    created,
}) => {
    return (
        <Link href={`/token/${id}`}>
            <div className="flex md:flex-col gap-3 group h-full">
                <Image
                    src={src}
                    alt={src}
                    width={180}
                    height={180}
                    className="group-hover:scale-105 duration-75 size-[100px] md:size-[unset]"
                />
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-base font-semibold leading-4 tracking-medium">
                            {tokenName}
                        </h3>
                        <span className="text-sm font-normal leading-4 tracking-medium">
                            {tokenCreator}
                        </span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[11px] leading-4 font-semibold tracking-wide text-dark-purple">
                            Market cap: ${marketCap}K
                        </span>
                        <span className="text-xs tracking-wide">
                            {description}
                        </span>
                        <span className="text-[11px] leading-4 font-semibold tracking-wide text-black-60">
                            {created}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
