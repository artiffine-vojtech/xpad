import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "src/components/Button";

export const Header: FC = () => {
    return (
        <header className="flex justify-between px-[140px] py-12">
            <div className="flex items-center gap-24">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={120}
                        height={41}
                    />
                </Link>
                <nav className="flex gap-16 font-inter text-black font-semibold text-base leading-4 tracking-medium">
                    <Link href="/">
                        <span>How It Works?</span>
                    </Link>
                    <Link href="/">
                        <span>Contact Us</span>
                    </Link>
                </nav>
            </div>
            <Button text="Enter Launchpad" />
        </header>
    );
};
