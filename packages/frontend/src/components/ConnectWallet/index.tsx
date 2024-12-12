"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";
import { Button } from "../Button";
import { ThirdWebDisconnectButton } from "../ThirdWeb/ThirdWebDisconnectButton";
import ThirdWebConnectButton from "../ThirdWeb/ThirdWebConnectButton";
import { cn } from "@/lib/utils";
import { shortenAddress } from "@/utils/shortenAddress";

type Props = {
    sidebar?: boolean;
};

export const ConnectWallet: FC<Props> = ({ sidebar }) => {
    const pathname = usePathname();
    const wallet = useActiveWallet();
    const account = useActiveAccount();

    return pathname === "/" ? (
        <Button
            type="link"
            href="/launchpad"
            text="Enter Launchpad"
            className="hidden md:block"
        />
    ) : wallet ? (
        <div
            className={cn(
                "flex items-center gap-3",
                sidebar && "flex-col items-start mb-10"
            )}
        >
            {account && (
                <span className="text-sm font-inter font-semibold tracking-medium">
                    {shortenAddress(account.address)}
                </span>
            )}
            <ThirdWebDisconnectButton />
        </div>
    ) : (
        <ThirdWebConnectButton />
    );
};
