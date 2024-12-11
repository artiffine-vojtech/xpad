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

type Props = {
  type: "toPay" | "toReceive";
};

export const TradeFormInput: FC<Props> = ({ type }) => {
  return (
    <div className="flex gap-2.5 border-b border-black pb-3">
      <Input className="p-0 h-7 !text-2xl rounded-none leading-7 text-black font-semibold border-none shadow-none outline-none focus-visible:ring-0 w-[172px] bg-transparent" />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2">
          {type === "toPay" ? (
            <Image
              src="/images/icons/XFI.png"
              alt="XFI"
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <Image
              src="/images/home/card-2.png"
              alt="TOKEN"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          <span className="text-lg font-semibold">
            {type === "toPay" ? "XFI" : "TOKEN"}
          </span>
          <ChevronDown className="w-5 h-5 text-black" />
        </DropdownMenuTrigger>

        {type === "toPay" && (
          <DropdownMenuContent className="mt-2 w-48 bg-white shadow-md rounded-md">
            <DropdownMenuItem>
              <span className="text-sm font-medium">USDC</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-sm font-medium">USDT</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};
