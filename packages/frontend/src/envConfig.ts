enum requiredVariables {
    "NEXT_PUBLIC_THIRDWEB_CLIENT_ID" = "NEXT_PUBLIC_THIRDWEB_CLIENT_ID",
}

type RequiredVariables = keyof typeof requiredVariables;
// prettier-ignore
const publicEnvVar: { [key in RequiredVariables]: string } = {
    [requiredVariables.NEXT_PUBLIC_THIRDWEB_CLIENT_ID]: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
  }

type Config = Readonly<{ [key in RequiredVariables]: string }>;

// ensure that all of the env vars are provided
const ensureConfig = (config: {
    [key: string]: string | undefined;
}): Config => {
    const checked = Object.values(requiredVariables).reduce((acc, key) => {
        // Filters index entries from enum.
        if (typeof key === "number") {
            return acc;
        }

        if (config[key] === undefined) {
            throw new Error(`Missing '${key}' environment variable.`);
        }

        return { ...acc, [key]: config[key] };
    }, {} as any as Config);

    return checked;
};

export const envPublicConfig = ensureConfig(publicEnvVar);
