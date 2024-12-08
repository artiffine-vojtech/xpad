import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const clouds = [
    {
        src: "/images/tokens/cloud-gray-1.png",
        alt: "cloud-1",
        width: 274,
        height: 198,
        className: "left-[30px] top-[75px]",
    },
    {
        src: "/images/tokens/cloud-gray-2.png",
        alt: "cloud-2",
        width: 119,
        height: 67,
        className: "top-[42px] left-[464px]",
    },
    {
        src: "/images/tokens/cloud-gray-3.png",
        alt: "cloud-3",
        width: 292,
        height: 124,
        className: "top-0 right-[333px]",
    },
    {
        src: "/images/tokens/cloud-gray-4.png",
        alt: "cloud-4",
        width: 119,
        height: 67,
        className: "top-[151px] right-[105px]",
    },
    {
        src: "/images/tokens/cloud-gray-5.png",
        alt: "cloud-5",
        width: 295,
        height: 147,
        className: "top-[335px] right-[-100px]",
    },
    {
        src: "/images/tokens/cloud-gray-6.png",
        alt: "cloud-6",
        width: 278,
        height: 161,
        className: "left-[-100px] top-[402px]",
    },
];

export const Decorations: FC = () => {
    return clouds.map((cloud, i) => (
        <Image key={i} {...cloud} className={cn(cloud.className, "absolute")} />
    ));
};
