"use client";

import { Upload } from "lucide-react";
import { FC, useState } from "react";

export const FileUpload: FC = () => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };
    return (
        <div className="group flex flex-col items-center justify-center w-full h-64 bg-white border border-black rounded-[20px] z-10">
            <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center cursor-pointer size-full"
            >
                <div className="bg-pure-purple p-3 rounded-full mb-4 group-hover:bg-dark-purple group-hover:shadow-purple duration-300">
                    <Upload className="text-purple-600 w-6 h-6" />
                </div>
                <p className="text-base leading-4 font-semibold">
                    {fileName || "Upload Token Logo"}
                </p>
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};
