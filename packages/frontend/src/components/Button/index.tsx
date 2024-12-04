import { FC } from "react";
import { cn } from "src/utils/tailwind";

type Props = {
    text: string;
    variant?: keyof typeof variants;
    color?: "blue" | "purple";
};

const variants = {
    contained: {
        blue: "bg-sky-blue hover:bg-dark-blue hover:shadow-blue",
        purple: "bg-pure-purple hover:bg-dark-purple hover:shadow-purple",
    },
    outlined: {
        blue: "bg-transparent shadow-sky-blue hover:bg-blue",
        purple: "border border-button text-neutral-900",
    },
};

export const Button: FC<Props> = ({
    text,
    variant = "outlined",
    color = "blue",
}) => {
    return (
        <button
            className={cn(
                variants[variant][color],
                "font-inter text-base font-semibold leading-4 tracking-medium px-5 py-4 rounded-[100px]"
            )}
        >
            {text}
        </button>
    );
};
