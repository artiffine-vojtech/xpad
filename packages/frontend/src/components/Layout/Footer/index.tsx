import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="flex justify-between items-center py-10 border-t">
            <div className="flex gap-6 items-center">
                <Image
                    src="/images/logo-footer.svg"
                    alt="logo-footer"
                    width={39}
                    height={39}
                />
                <span className="font-inter text-xs font-semibold leading-3 text-black-60 tracking-wide">
                    XPAD 2024, all rights reserved
                </span>
            </div>
            <div className="flex gap-12">
                <div className="h-6 flex items-center gap-6">
                    <Link href="/">
                        <Image
                            src="/images/icons/telegram.svg"
                            alt="telegram"
                            width={24}
                            height={19}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src="/images/icons/discord.svg"
                            alt="discord"
                            width={24}
                            height={18}
                        />
                    </Link>
                </div>
                <div className="flex gap-6 items-center">
                    <Link href="/" className="flex">
                        <span className="font-inter text-xs font-semibold leading-3 text-black-60 tracking-wide">
                            Privacy policy
                        </span>
                    </Link>
                    <Link href="/" className="flex">
                        <span className="font-inter text-xs font-semibold leading-3 text-black-60 tracking-wide">
                            Terms of use
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
