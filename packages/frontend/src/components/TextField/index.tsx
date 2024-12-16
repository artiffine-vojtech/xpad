import {
    FC,
    InputHTMLAttributes,
    ReactElement,
    TextareaHTMLAttributes,
} from "react";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useField } from "formik";

type CommonProps = {
    label?: string;
    icon?: ReactElement;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> &
    CommonProps & {
        type: "input";
    };

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
    CommonProps & {
        type: "textarea";
    };

type Props = InputProps | TextareaProps;

export const TextField: FC<Props> = ({
    type,
    id,
    name = "",
    label,
    icon,
    ...props
}) => {
    const [field, meta] = useField(name);

    const error = meta.touched && Boolean(meta.error);

    if (type === "input") {
        return (
            <div className="flex flex-col gap-2 z-10">
                {label && (
                    <Label
                        htmlFor={id}
                        className={cn(
                            "font-inter text-xs leading-3 font-semibold",
                            error && "text-red"
                        )}
                    >
                        {label}
                    </Label>
                )}
                <div className="relative">
                    <Input
                        className={cn(error && "border-red")}
                        name={field.name}
                        onChange={field.onChange}
                        {...(props as InputHTMLAttributes<HTMLInputElement>)}
                    />

                    {icon && (
                        <div className="absolute inset-y-1/2 right-6 flex items-center pointer-events-none">
                            {icon}
                        </div>
                    )}
                </div>
                {error && (
                    <span className="font-inter text-xs leading-3 font-semibold text-red">
                        {meta.error}
                    </span>
                )}
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-2 z-10">
            {label && (
                <Label
                    htmlFor={id}
                    className={cn(
                        "font-inter text-xs font-semibold",
                        error && "text-red"
                    )}
                >
                    {label}
                </Label>
            )}
            <Textarea
                className={cn(error && "border-red")}
                name={field.name}
                onChange={field.onChange}
                {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
            {error && (
                <span className="font-inter text-xs leading-3 font-semibold text-red">
                    {meta.error}
                </span>
            )}
        </div>
    );
};
