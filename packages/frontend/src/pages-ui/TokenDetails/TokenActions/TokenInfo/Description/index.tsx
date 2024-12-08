import { FC } from "react";

export const Description: FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-semibold leading-7">
                Name of the token
            </h3>
            <span className="text-base leading-4 font-semibold text-dark-purple">
                $TOKEN
            </span>
            <p className="text-sm tracking-semiwide font-normal font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                porttitor dui vel mauris consectetuLorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris porttitor dui vel mauris
                consectetuLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Mauris porttitor dui vel mauris consectetu...Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Mauris porttitor
                dui vel mauris consectetu..
            </p>
        </div>
    );
};
