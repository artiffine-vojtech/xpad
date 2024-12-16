"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { allowedFormats, MAX_FILE_SIZE } from "@/utils/constants";
import { useField } from "formik";
import { Upload } from "lucide-react";

type Props = {
    name: string;
};

export const FileUpload: FC<Props> = ({ name }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [, meta, helpers] = useField(name);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }

        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                helpers.setValue(null);
                helpers.setError("Max file size 2MB");
            } else if (!allowedFormats.includes(file.type)) {
                helpers.setError(
                    `Format should be ${allowedFormats.join(", ")}`
                );
            } else {
                helpers.setValue(file);
                helpers.setError(undefined);
            }
            setFileName(file.name);
        } else {
            helpers.setValue(null);
        }
    };

    const error = Boolean(meta.error);

    return (
        <div
            className={cn(
                "group flex flex-col items-center justify-center w-full h-64 bg-white border rounded-[20px] z-10",
                error ? "border-red pb-2" : "border-black"
            )}
        >
            <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center cursor-pointer size-full"
            >
                <div className="bg-pure-purple p-3 rounded-full mb-4 group-hover:bg-dark-purple group-hover:shadow-purple duration-300">
                    <Upload className="text-purple-600 w-6 h-6" />
                </div>
                <p
                    className={cn(
                        "text-base leading-4 font-semibold text-center",
                        error && "text-red"
                    )}
                >
                    {fileName || "Upload Token Logo"}
                </p>
                <input
                    id="file-upload"
                    name={name}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
            {error && (
                <span className="font-inter text-xs leading-3 font-semibold text-red text-center">
                    {meta.error}
                </span>
            )}
        </div>
    );
};
