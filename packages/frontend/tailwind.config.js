/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)"],
                ["littlebit-square"]: [
                    "littlebit-square-variable",
                    "sans-serif",
                ],
                ["littlebit-loopy"]: ["littlebit-loopy-variable", "sans-serif"],
            },
            colors: {
                black: "#000000",
                ["black-90"]: "#1A1A1A",
                ["black-70"]: "#4D4D4D",
                ["black-60"]: "#666666",
                white: "#FFFFFF",
                ["white-10"]: "#E5E5E5",
                ["white-30"]: "#B2B2B2",
                ["white-40"]: "#999999",
                blue: "#B5E8F5",
                ["sky-blue"]: "#84D9EF",
                ["dark-blue"]: "#6AC6DD",
                purple: "#EFD5F5",
                ["pure-purple"]: "#E0ACEC",
                ["dark-purple"]: "#C88CD5",
                red: "#FA5555",
                ["light-red"]: "#FC9999",
                ["dark-red"]: "#CE4545",
                lemon: "#FCFDE4",
                ["light-lemon"]: "#FDFEEF",
                ["dark-lemon"]: "#EBEDC3",
                lime: "#C1F2DD",
                ["light-lime"]: "#DAF7EB",
                ["dark-lime"]: "#8CCCB0",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
            letterSpacing: {
                medium: "0.15px",
                semiwide: "0.25px",
                wide: "0.5px",
            },
            boxShadow: {
                ["sky-blue"]: "inset 0 0 0 3px #84D9EF",
                blue: "inset 0 0 0 3px #B5E8F5",
                purple: "inset 0 0 0 3px #EFD5F5",
            },
            keyframes: {
                floatSideways: {
                    "0%, 100%": {
                        transform: "translateX(0) translateY(0)",
                    },
                    "50%": {
                        transform: "translateX(10px) translateY(-5px)",
                    },
                },
                floatSidewaysMore: {
                    "0%, 100%": {
                        transform: "translateX(0) translateY(0)",
                    },
                    "50%": {
                        transform: "translateX(-25px) translateY(25px)",
                    },
                },
                upAndDown: {
                    "0%, 100%": {
                        transform: "translateX(0)",
                    },
                    "50%": {
                        transform: "translateY(66%)",
                    },
                },
                circleMotion: {
                    "0%": {
                        transform: "translate(0, 0)",
                    },
                    "25%": {
                        transform: "translate(5px, -5px)",
                    },
                    "50%": {
                        transform: "translate(0, -10px)",
                    },
                    "75%": {
                        transform: "translate(-5px, -5px)",
                    },
                    "100%": {
                        transform: "translate(0, 0)",
                    },
                },
            },
            animation: {
                floatSideways: "floatSideways 3s ease-in-out infinite",
                floatSidewaysMore: "floatSidewaysMore 3s ease-in-out infinite",
                upAndDown: "upAndDown 5s ease-in-out infinite",
                circleMotion: "circleMotion 6s linear infinite",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {};
            for (let i = 0; i <= 2000; i += 100) {
                newUtilities[`.delay-${i}`] = { animationDelay: `${i}ms` };
            }
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
        require("tailwindcss-animate"),
    ],
};
