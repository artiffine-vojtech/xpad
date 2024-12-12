"use client";

import { ThirdwebClient, createThirdwebClient } from "thirdweb";

import { envPublicConfig } from "src/envConfig";

export const thirdWebClient: ThirdwebClient = createThirdwebClient({
    clientId: envPublicConfig.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
});
