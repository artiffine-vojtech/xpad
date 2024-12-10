"use client";

import { FC } from "react";
import { Decorations } from "../TokenDetails/Decorations";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { LauncherForm } from "./LauncherForm";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";

export const TokenLauncherPage: FC = () => {
    const { back } = useRouter();
    return (
        <main className="page-container">
            <Decorations />
            <div className="flex flex-col gap-16 mx-5 2xl:mx-[140px]">
                <section className="relative flex flex-col items-center">
                    <Button
                        variant="link"
                        className="self-start md:absolute top-5 left-0 p-0"
                        onClick={back}
                    >
                        <ArrowLeft width={20} height={20} />
                        <span>Back</span>
                    </Button>
                    <h1 className="text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] text-center font-square">
                        Token launcher
                    </h1>
                    <p className="subheading text-center mx-6 md:mx-0 mt-8 md:mb-12 max-w-[842px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris porttitor dui vel mauris consectetur, nec
                        porttitor lectu.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Mauris porttitor.
                    </p>
                </section>
                <LauncherForm />
                <HorizontalCarousel />
            </div>
        </main>
    );
};
