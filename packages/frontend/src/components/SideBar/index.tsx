"use client";

import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { ConnectWallet } from "../ConnectWallet";

export const SideBar: FC = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
                <AlignJustify />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-8 py-16 px-6">
                <SheetTitle>Menu</SheetTitle>
                <ConnectWallet sidebar />

                <nav className="flex flex-col gap-6 font-inter text-black font-semibold text-base leading-4 tracking-medium">
                    <Link href="/">
                        <span>How It Works?</span>
                    </Link>
                    <Link href="/">
                        <span>Contact Us</span>
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
};
