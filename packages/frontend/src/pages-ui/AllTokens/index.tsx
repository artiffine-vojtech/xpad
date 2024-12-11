"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { TokensList } from "./TokensList";
import { ActionLinks } from "./ActionLinks";
import { Decorations } from "./Decorations";

export const AllTokensPage: FC = () => {
    return (
        <main className="page-container">
            <Decorations />
            <h1 className="relative text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] text-center font-square z-50">
                Search for token
            </h1>
            <p className="heading-h3 text-center mt-8 mb-12">
                OR DON'T, WHATEVER
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-2 px-5">
                <Input
                    className="md:w-[463px]"
                    placeholder="Search by token name, ticker or address"
                />
                <Button
                    type="button"
                    variant="contained"
                    color="purple"
                    onClick={() => {}}
                    text="Search"
                />
            </div>
            <div className="flex flex-col md:flex-row gap-16 lg:gap-10 pt-16 mx-5 2xl:mx-[140px]">
                <TokensList />
                <ActionLinks />
            </div>
        </main>
    );
};
