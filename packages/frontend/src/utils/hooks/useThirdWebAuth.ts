"use client";

import { useMemo } from "react";
import {
    ConnectButton,
    SiweAuthOptions,
    useActiveAccount,
    useActiveWallet,
} from "thirdweb/react";
import { createWallet, walletConnect, Wallet } from "thirdweb/wallets";

import { LoginPayload } from "thirdweb/dist/types/auth/core/types";

export const thirdwebConnectModalProps: React.ComponentProps<
    typeof ConnectButton
>["connectModal"] = {
    size: "wide",
    showThirdwebBranding: false,
};

export const wallets: Wallet[] = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("com.trustwallet.app"),
    createWallet("io.zerion.wallet"),
    walletConnect(),
];

type Props = {
    onLoginCompleted?: () => void;
};

export const useThirdWebAuth = (props?: Props) => {
    const wallet = useActiveWallet();
    const account = useActiveAccount();
    const { onLoginCompleted } = props ?? {};

    const authController: SiweAuthOptions = useMemo(
        () => ({
            getLoginPayload: async ({ address, chainId }) => {
                // const { data } = await apiClient.auth.authControllerGetLoginPayload({
                //   address,
                //   chainId: chainId.toString(),
                // })
                return {} as LoginPayload;
            },
            doLogin: async (params) => {
                // await apiClient.auth.authControllerVerifyLogin({
                //   signature: params.signature,
                //   payload: params.payload,
                // })

                if (onLoginCompleted) {
                    onLoginCompleted();
                }
            },
            isLoggedIn: async () => {
                // const { data: isLoggedIn } =
                // await apiClient.auth.authControllerIsLoggedIn({
                //   address: account?.address || '',
                // })
                return true;
            },
            doLogout: async () => {
                await Promise.all([wallet?.disconnect()]);
                // window.location.href = routes.index

                // await apiClient.auth.authControllerLogout()
            },
        }),
        [onLoginCompleted, wallet, account]
    );

    return authController;
};
