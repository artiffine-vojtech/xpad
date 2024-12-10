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
            <h1 className="text-[60px] leading-[60px] text-center font-square">
                Search for token
            </h1>
            <p className="heading-h3 text-center mt-8 mb-12">
                OR DON'T, WHATEVER
            </p>
            <div className="flex justify-center gap-2">
                <Input
                    className="w-[463px]"
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
            <div className="flex gap-10 pt-16 mx-5 2xl:mx-[140px]">
                <TokensList />
                <ActionLinks />
            </div>
        </main>
    );
};
