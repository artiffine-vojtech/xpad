"use client";

import { FC } from "react";
import { Button } from "src/components/Button";
import { AnimatedImages, AnimatedImagesMobile } from "./AnimatedImages";
import { useBreakpoint } from "@/utils/hooks/useBreakpoint";
import { breakpoints } from "@/utils/constants";
import { CHAIN_NAME } from "@/utils/chains";

export const Hero: FC = () => {
  const isMobile = useBreakpoint(breakpoints.md);
  return (
    <section className="relative flex flex-col items-center px-5 pt-[50px] md:pt-[180px] pb-[196px] md:pb-[108px] font-inter">
      {isMobile ? <AnimatedImagesMobile /> : <AnimatedImages />}
      <h1 className="text-[60px] leading-[45px] md:text-[80px] md:leading-[68px] text-black text-center mb-8 z-10">
        <span className="font-square">
          Launch your <br /> token
        </span>
        <span className="font-littlebit-loopy font-variation-settings-loopy">
          {" "}
          today
        </span>
      </h1>
      <p className="heading-h3 mb-12 z-10">OR TOMMOROW, WHATEVER</p>
      <p className="text-base font-normal text-center tracking-wide mb-12 z-10">
        The place for memecoins on {CHAIN_NAME}. No hassle, no limits. Just
        vibes. <br /> Make it happen or don’t—your call.
      </p>
      <Button
        type="link"
        href="/launchpad"
        text="Enter Launchpad"
        variant="contained"
        color="purple"
      />
    </section>
  );
};
