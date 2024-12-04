import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export type Props = {
    id: number;
    src: string;
    tokenName: string;
    tokenCreator: string;
    marketCap: string;
};

export const TokenCard: FC<Props> = ({
    id,
    src,
    tokenName,
    tokenCreator,
    marketCap,
}) => {
    return (
        <Link href={`/token/${id}`}>
            <div className="flex gap-3 p-4 border rounded-[20px] cursor-pointer mx-1.5  ">
                <Image
                    src={src}
                    alt={src}
                    width={68}
                    height={68}
                    className="border rounded"
                />
                <div className="flex flex-col justify-between gap-4">
                    <div>
                        <h3 className="text-base font-semibold leading-4 tracking-medium">
                            {tokenName}
                        </h3>
                        <span className="text-sm font-normal leading-4 tracking-medium">
                            {tokenCreator}
                        </span>
                    </div>
                    <span className="text-[11px] leading-4 font-semibold tracking-wide text-dark-purple">
                        Market cap: ${marketCap}K
                    </span>
                </div>
            </div>
        </Link>
    );
};
