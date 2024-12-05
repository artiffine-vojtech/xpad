import { FC } from "react";
import Image from "next/image";
import { cn } from "@/utils/tailwind";

export type Props = {
    image: {
        src: string;
        alt: string;
        size: number;
    };
    content?: boolean;
    tokenName?: string;
    tokenCreator?: string;
    marketCap?: string;
    wrapperClassName?: string;
    textClassName?: string;
};

export const TokenCard: FC<Props> = ({
    image,
    content = true,
    tokenName,
    tokenCreator,
    marketCap,
    wrapperClassName,
    textClassName,
}) => {
    return (
        <div
            className={cn(
                "flex gap-3 p-4 border border-black rounded-[20px] cursor-pointer mx-1.5",
                wrapperClassName
            )}
        >
            <Image
                src={image.src}
                alt={image.alt}
                width={image.size}
                height={image.size}
                className="border rounded"
            />
            {content && (
                <div className="flex flex-col justify-between gap-4">
                    <div>
                        <h3 className="text-base font-semibold leading-4 tracking-medium">
                            {tokenName}
                        </h3>
                        <span className="text-sm font-normal leading-4 tracking-medium">
                            {tokenCreator}
                        </span>
                    </div>
                    <span
                        className={cn(
                            "text-[11px] leading-4 font-semibold tracking-wide text-dark-purple",
                            textClassName
                        )}
                    >
                        Market cap: ${marketCap}K
                    </span>
                </div>
            )}
        </div>
    );
};
