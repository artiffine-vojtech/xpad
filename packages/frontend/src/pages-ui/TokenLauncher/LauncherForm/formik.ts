import { formErrors } from "@/utils/yupUtils";
import { mixed, object, Schema, string } from "yup";

export type FormValues = {
    name: string;
    symbol: string;
    description: string;
    logo?: File | null;
    discordLink?: string;
    telegramLink?: string;
    websiteLink?: string;
};

export enum Fields {
    name = "name",
    symbol = "symbol",
    description = "description",
    logo = "logo",
    discordLink = "discordLink",
    telegramLink = "telegramLink",
    websiteLink = "websiteLink",
}

const discordRegex =
    /^(https?:\/\/)?(www\.)?(discord\.gg|discord\.com\/invite|discord\.com\/channels\/\d+\/\d+)(\/[A-Za-z0-9-_]+)?$/;
const telegramRegex =
    /^(https?:\/\/)?(www\.)?(t\.me|telegram\.me)\/([a-zA-Z0-9_]{5,32}|joinchat\/[a-zA-Z0-9_-]{22})$/;
const wesiteRegex =
    /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-.~:?#@!$&'()*+,;=]*)?$/;

export const validationSchema: Schema<FormValues> = object({
    [Fields.name]: string().required(formErrors.required("Token name")),
    [Fields.symbol]: string().required(formErrors.required("Token symbol")),
    [Fields.description]: string().required(
        formErrors.required("Token description")
    ),
    [Fields.logo]: mixed<File>().required("Logo is required"),
    [Fields.discordLink]: string().matches(
        discordRegex,
        formErrors.validLink("discord")
    ),
    [Fields.telegramLink]: string().matches(
        telegramRegex,
        formErrors.validLink("telegram")
    ),
    [Fields.websiteLink]: string().matches(
        wesiteRegex,
        formErrors.validLink("website")
    ),
});
