import { FC } from "react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const TradeFormInput: FC = () => {
    return (
        <div className="flex gap-2.5 border-b border-black pb-3">
            <Input className="p-0 h-7 !text-2xl rounded-none leading-7 text-black font-semibold border-none shadow-none outline-none focus-visible:ring-0 w-[172px] bg-transparent" />
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                    <Image
                        src="/images/icons/ETH.png"
                        alt="ETH"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="text-lg font-semibold">ETH</span>
                    <ChevronDown className="w-5 h-5 text-black" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="mt-2 w-48 bg-white shadow-md rounded-md">
                    <DropdownMenuItem>
                        <span className="text-sm font-medium">BTC</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span className="text-sm font-medium">USDT</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span className="text-sm font-medium">BNB</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
