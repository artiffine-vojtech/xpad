import { FC } from "react";
import Image from "next/image";

export const ChevronSeparator: FC<{ length: number }> = ({ length }) => {
    return Array.from({ length }).map((_, i) => (
        <Image
            key={i}
            src="/images/icons/chevron-down.svg"
            alt="chevron-down"
            width={24}
            height={24}
        />
    ));
};
