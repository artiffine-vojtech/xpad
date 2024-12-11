"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { SideBar } from "@/components/SideBar";
import { Button } from "src/components/Button";
import { usePathname } from "next/navigation";
import { Server } from "lucide-react";

export const Header: FC = () => {
    const pathname = usePathname();

    return (
        <header className="flex justify-between p-6 2xl:px-[140px] md:py-12">
            <div className="flex items-center gap-24">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={120}
                        height={41}
                    />
                </Link>
                <nav className="hidden md:flex gap-16 font-inter text-black font-semibold text-base leading-4 tracking-medium">
                    <Link href="/">
                        <span>How It Works?</span>
                    </Link>
                    <Link href="/">
                        <span>Contact Us</span>
                    </Link>
                </nav>
            </div>
            {pathname === "/" ? (
                <Button
                    type="link"
                    href="/launchpad"
                    text="Enter Launchpad"
                    className="hidden md:block"
                />
            ) : (
                <Button
                    type="button"
                    variant="contained"
                    color="blue"
                    text="Connect wallet"
                    className="hidden md:flex"
                    icon={<Server />}
                />
            )}
            <SideBar />
        </header>
    );
};
