import { FC } from "react";

import Image from "next/image";
import { Socials } from "./Socials";
import { Description } from "./Description";

export const TokenInfo: FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-5 z-10">
                <Image
                    src="/images/home/card-3.png"
                    alt="token"
                    width={168}
                    height={168}
                />
                <Socials />
            </div>
            <Description />
        </div>
    );
};
