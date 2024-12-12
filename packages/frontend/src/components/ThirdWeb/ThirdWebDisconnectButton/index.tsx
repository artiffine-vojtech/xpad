"use client";

import { Button } from "@/components/Button";
import { Power } from "lucide-react";
import { FC } from "react";
import { useActiveWallet } from "thirdweb/react";

export const ThirdWebDisconnectButton: FC = () => {
    const wallet = useActiveWallet();

    const disconnect = () => {
        wallet?.disconnect();
    };

    return (
        <Button
            type="button"
            variant="contained"
            color="blue"
            text="Disconnect Wallet"
            onClick={disconnect}
            icon={<Power width={20} height={20} />}
        />
    );
};
