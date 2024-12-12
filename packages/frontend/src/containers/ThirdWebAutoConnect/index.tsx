import { thirdWebClient } from "@/utils/hooks/thirdweb/client";
import { wallets } from "@/utils/hooks/useThirdWebAuth";
import React from "react";
import { AutoConnect } from "thirdweb/react";

const ThirdWebAutoConnect = () => {
    return (
        <AutoConnect
            client={thirdWebClient}
            wallets={wallets}
            timeout={10000}
        />
    );
};

export default ThirdWebAutoConnect;
