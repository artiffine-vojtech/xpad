import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

type ActionWrapperProps = {
    className?: string;
};

export const ActionWrapper: FC<PropsWithChildren<ActionWrapperProps>> = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "border border-black rounded-[20px] p-6 cursor-pointer",
                className
            )}
        >
            {children}
        </div>
    );
};
