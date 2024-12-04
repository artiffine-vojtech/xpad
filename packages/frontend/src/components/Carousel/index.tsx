import { FC, PropsWithChildren } from "react";
import Marquee from "react-fast-marquee";

type Props = {
    speed: number;
    gradient: boolean;
    autoFill: boolean;
};

export const Carousel: FC<PropsWithChildren<Props>> = ({
    children,
    speed,
    gradient,
    autoFill,
}) => {
    return (
        <Marquee speed={speed} gradient={gradient} autoFill={autoFill}>
            {children}
        </Marquee>
    );
};
