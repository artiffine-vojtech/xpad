"use client";

import { FC } from "react";
import { FileUpload } from "@/components/FileUpload";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import Image from "next/image";

import * as F from "./formik";
import { Form, Formik } from "formik";

export const LauncherForm: FC = () => {
    const initialValues: F.FormValues = {
        name: "",
        symbol: "",
        description: "",
        discordLink: "",
        telegramLink: "",
        websiteLink: "",
    };

    const handleSubmit = () => {};

    return (
        <Formik<F.FormValues>
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={F.validationSchema}
            enableReinitialize={true}
        >
            <Form>
                <section className="relative grid grid-cols-1 md:grid-cols-[276px_1fr] gap-6 md:gap-[117px]">
                    <div className="hidden md:block absolute top-5 left-[290px] w-[70px]">
                        <div className="flex flex-col mb-[14px]">
                            <span className="font-square text-pure-purple text-xs text-center leading-3">
                                Your
                            </span>
                            <span className="font-square text-pure-purple text-xs text-center leading-3">
                                token
                            </span>
                        </div>
                        <Image
                            src="/images/tokens/pink-arrow.png"
                            alt="arrow"
                            width={45}
                            height={41}
                        />
                    </div>

                    <div className="flex flex-col gap-[47px]">
                        <div className="flex flex-col gap-6">
                            <FileUpload name={F.Fields.logo} />
                            <button
                                type="submit"
                                className="hidden md:block bg-deploy bg-cover bg-no-repeat w-full w-[276px] h-[89px] mx-auto hover:bg-deploy-hover duration-300"
                            />
                            <Button
                                variant="link"
                                className="hidden md:block font-inter text-base leading-4 tracking-medium"
                            >
                                Save token for later
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="flex flex-col gap-6">
                            <TextField
                                type="input"
                                id="name"
                                name={F.Fields.name}
                                label="Token Name"
                                placeholder="Launcher Token"
                            />
                            <TextField
                                type="input"
                                id="symbol"
                                name={F.Fields.symbol}
                                label="Token Symbol"
                                placeholder="$LAU"
                            />
                            <TextField
                                type="textarea"
                                id="description"
                                name={F.Fields.description}
                                label="Description"
                                rows={6}
                                placeholder="Text about the token..."
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
                            <TextField
                                type="input"
                                id="discord"
                                name={F.Fields.discordLink}
                                label="Add Token Discord Link"
                                placeholder="https://discor...."
                                icon={
                                    <Image
                                        src="/images/icons/discord-blue.svg"
                                        alt="discord"
                                        width={18}
                                        height={18}
                                    />
                                }
                            />
                            <TextField
                                type="input"
                                id="telegram"
                                name={F.Fields.telegramLink}
                                label="Add Token Telegram Link"
                                placeholder="https://telegr...."
                                icon={
                                    <Image
                                        src="/images/icons/telegram-blue.svg"
                                        alt="discord"
                                        width={18}
                                        height={18}
                                    />
                                }
                            />
                            <TextField
                                type="input"
                                id="webpage"
                                name={F.Fields.websiteLink}
                                label="Add Token Webpage Link"
                                placeholder="https://token...."
                                icon={
                                    <Share2
                                        width={18}
                                        height={18}
                                        color="black"
                                    />
                                }
                            />
                        </div>
                    </div>
                </section>
            </Form>
        </Formik>
    );
};
