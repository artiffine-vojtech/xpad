import { FC } from "react";
import { Hero } from "./Hero";
import { RecentlyLaunched } from "./Hero/RecentlyLaunched";
import { HowItWorks } from "./Hero/HowItWorks";

export const HomePage: FC = () => {
    return (
        <main className="flex-1">
            <Hero />
            <RecentlyLaunched />
            <HowItWorks />
        </main>
    );
};
