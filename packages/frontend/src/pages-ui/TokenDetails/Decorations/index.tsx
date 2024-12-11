import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { clouds } from "@/utils/constants";

export const Decorations: FC = () => {
    return clouds.map((cloud, i) => (
        <Image key={i} {...cloud} className={cn(cloud.className, "absolute")} />
    ));
};
