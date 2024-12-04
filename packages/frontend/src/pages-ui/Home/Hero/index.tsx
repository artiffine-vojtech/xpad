import { FC } from "react";
import { Button } from "src/components/Button";
import { AnimatedImages } from "./AnimatedImages";

export const Hero: FC = () => {
    return (
        <section className="relative flex flex-col items-center pt-[180px] font-inter">
            <AnimatedImages />
            <h1 className="text-[80px] leading-[68px] text-black mb-8">
                <span className="font-littlebit-square font-variation-settings-square">
                    Launch your <br /> token
                </span>
                <span className="font-littlebit-loopy font-variation-settings-loopy">
                    {" "}
                    today
                </span>
            </h1>
            <h3 className="text-base leading-4 font-semibold tracking-medium mb-12">
                OR TOMMOROW, WHATEVER
            </h3>
            <p className="text-base leading-6 font-normal text-center tracking-wide mb-12">
                The place for memecoins on CrossFi. No hassle, no limits. Just
                vibes. <br /> Make it happen or don’t—your call.
            </p>
            <Button text="Enter Launchpad" variant="contained" color="purple" />
        </section>
    );
};
