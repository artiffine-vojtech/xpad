import Image from "next/image";
import { FC } from "react";
import { cn } from "@/lib/utils";

const clouds = [
    {
        src: "/images/home/cloud-1.png",
        alt: "cloud-1",
        width: 274,
        height: 198,
        className: "left-[30px] top-[75px] z-10",
    },
    {
        src: "/images/home/cloud-2.svg",
        alt: "cloud-2",
        width: 119,
        height: 67,
        className: "top-[42px] left-[464px] animate-circleMotion",
    },
    {
        src: "/images/home/cloud-3.svg",
        alt: "cloud-3",
        width: 292,
        height: 124,
        className: "top-0 right-[333px] animate-circleMotion delay-1500",
    },
    {
        src: "/images/home/cloud-4.svg",
        alt: "cloud-4",
        width: 119,
        height: 67,
        className: "top-[151px] right-[105px] animate-circleMotion delay-700",
    },
    {
        src: "/images/home/cloud-5.png",
        alt: "cloud-5",
        width: 295,
        height: 147,
        className: "top-[335px] right-0 z-10",
    },
    {
        src: "/images/home/cloud-6.png",
        alt: "cloud-6",
        width: 278,
        height: 161,
        className: "left-0 top-[402px] z-10",
    },
    {
        src: "/images/home/pepe-1.svg",
        alt: "pepe-1",
        width: 161,
        height: 171,
        className: "left-[43px] top-[15px] animate-floatSideways delay-200",
    },
    {
        src: "/images/home/pepe-2.svg",
        alt: "pepe-2",
        width: 95,
        height: 124,
        className: "right-[140px] top-[300px] animate-upAndDown delay-300",
    },
    {
        src: "/images/home/pepe-3.svg",
        alt: "pepe-3",
        width: 116,
        height: 135,
        className:
            "left-[120px] top-[371px] animate-floatSidewaysMore delay-600",
    },
];

export const AnimatedImages: FC = () => {
    return (
        <>
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

const cloudsMobile = [
    {
        src: "/images/home/cloud-7-mobile.png",
        alt: "cloud-7",
        width: 116,
        height: 135,
        className: "left-0 top-[64px]",
    },
    {
        src: "/images/home/cloud-8-mobile.png",
        alt: "cloud-8",
        width: 116,
        height: 135,
        className: "right-0 top-[115px]",
    },
    {
        src: "/images/home/cloud-9-mobile.png",
        alt: "cloud-7",
        width: 200,
        height: 135,
        className: "right-0 bottom-9 z-10",
    },
    {
        src: "/images/home/cloud-10-mobile.png",
        alt: "cloud-7",
        width: 116,
        height: 135,
        className: "left-0 bottom-20",
    },
    {
        src: "/images/home/pepe-2.svg",
        alt: "pepe-2",
        width: 95,
        height: 124,
        className: "right-[20px] bottom-[130px] animate-upAndDown delay-300",
    },
];

export const AnimatedImagesMobile: FC = () => {
    return (
        <>
            {cloudsMobile.map((cloud, i) => (
                <Image
                    key={i}
                    {...cloud}
                    className={cn(cloud.className, "absolute")}
                />
            ))}
        </>
    );
};
