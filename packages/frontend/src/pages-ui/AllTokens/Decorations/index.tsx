import { TokenCard } from "@/components/TokenCard";
import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cards } from "@/components/HorizontalCarousel";
import { clouds } from "@/utils/constants";

export const Decorations: FC = () => {
    return (
        <>
            <TokenCard
                {...cards[0]}
                wrapperClassName="hidden lg:flex absolute top-[80px] xl:top-0 left-[70px] m-0 p-4"
            />

            <TokenCard
                {...cards[5]}
                content={false}
                wrapperClassName="hidden lg:flex absolute top-[220px] left-0 m-0 p-4"
            />

            <TokenCard
                {...cards[6]}
                content={false}
                wrapperClassName="hidden lg:flex absolute top-20 xl:top-[37px] right-[160px] m-0 p-4"
            />

            <TokenCard
                {...cards[7]}
                content={false}
                wrapperClassName="hidden lg:flex absolute top-[182px] right-[30px] m-0 p-4"
            />
            {clouds.map((cloud, i) => (
                <Image
                    key={i}
                    {...cloud}
                    className={cn(cloud.className, "absolute")}
                />
            ))}
        </>
    );
};
