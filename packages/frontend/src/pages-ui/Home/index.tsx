import { FC } from "react";
import { Hero } from "./Hero";
import { HowItWorks } from "./Hero/HowItWorks";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";

export const HomePage: FC = () => {
    return (
        <main className="flex-1">
            <Hero />
            <HorizontalCarousel />
            <HowItWorks />
        </main>
    );
};
