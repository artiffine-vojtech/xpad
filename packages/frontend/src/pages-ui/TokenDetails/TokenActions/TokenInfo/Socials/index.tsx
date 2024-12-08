import { FC } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { ActionWrapper } from "@/pages-ui/AllTokens/ActionLinks/ActionWrapper";

export const Socials: FC = () => {
    return (
        <div className="flex flex-col gap-3">
            <ActionWrapper className="flex justify-center items-center p-0 border border-black rounded-full size-12 cursor-pointer bg-[#26A4E3] hover:bg-[#1681B7]">
                <Image
                    src="/images/icons/telegram-white.svg"
                    alt="telegram"
                    width={20}
                    height={16}
                />
            </ActionWrapper>
            <ActionWrapper className="flex justify-center items-center p-0 border border-black rounded-full size-12 cursor-pointer bg-[#5865F2] hover:bg-[#3A47D3]">
                <Image
                    src="/images/icons/discord-white.svg"
                    alt="telegram"
                    width={20}
                    height={20}
                />
            </ActionWrapper>
            <ActionWrapper className="flex justify-center items-center p-0 border border-black rounded-full size-12 cursor-pointer bg-lime hover:bg-dark-lime">
                <Globe width={24} height={24} color="black" />
            </ActionWrapper>
        </div>
    );
};
