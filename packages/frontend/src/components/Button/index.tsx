"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "src/utils/tailwind";

export type ButtonType = "button" | "link";

type CommonButtonProps<T> = {
    type: T;
    text: string;
    variant?: keyof typeof variants;
    color?: "blue" | "purple";
};

type LinkButtonProps = {
    href: string;
};

type NormalButtonProps = {
    onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type Props<T extends ButtonType> = T extends "link"
    ? LinkButtonProps & CommonButtonProps<T>
    : NormalButtonProps & CommonButtonProps<T>;

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

export const Button: FC<Props<ButtonType>> = (props) => {
    const { type, text, variant = "outlined", color = "blue", ...rest } = props;

    if (type === "link") {
        return (
            <Link href={props.href}>
                <button
                    className={cn(
                        variants[variant][color],
                        "font-inter text-base font-semibold leading-4 tracking-medium px-5 py-4 rounded-[100px]"
                    )}
                    {...rest}
                >
                    {text}
                </button>
            </Link>
        );
    }

    return (
        <button
            className={cn(
                variants[variant][color],
                "font-inter text-base font-semibold leading-4 tracking-medium px-5 py-4 rounded-[100px]"
            )}
            {...rest}
        >
            {text}
        </button>
    );
};
