"use client";

import React, { FC } from "react";

import { ConnectButton } from "thirdweb/react";
import { Server } from "lucide-react";

import { thirdWebClient } from "@/utils/hooks/thirdweb/client";
import {
    thirdwebConnectModalProps,
    useThirdWebAuth,
    wallets,
} from "@/utils/hooks/useThirdWebAuth";

const ThirdWebConnectButton: FC = () => {
    const authController = useThirdWebAuth();

    return (
        <div className="connect-wallet-btn">
            <ConnectButton
                client={thirdWebClient}
                wallets={wallets}
                theme="light"
                auth={authController}
                connectModal={thirdwebConnectModalProps}
                connectButton={{
                    label: (
                        <>
                            <span>Connect Wallet</span>
                            <Server width={20} height={20} />
                        </>
                    ),
                }}
                signInButton={{
                    label: "Log in",
                }}
                autoConnect={true}
            />
        </div>
    );
};

export default ThirdWebConnectButton;
