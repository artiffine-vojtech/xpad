/** @type {import('tailwindcss').Config} */
module.exports = {
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
                blue: "#B5E8F5",
                ["sky-blue"]: "#84D9EF",
                ["dark-blue"]: "#6AC6DD",
                purple: "#EFD5F5",
                ["pure-purple"]: "#E0ACEC",
                ["dark-purple"]: "#C88CD5",
                gray: "#666666",
            },
            letterSpacing: {
                medium: "0.15px",
                wide: "0.5px",
            },
            boxShadow: {
                ["sky-blue"]: "inset 0 0 0 3px #84D9EF",
                blue: "inset 0 0 0 3px #B5E8F5",
                purple: "inset 0 0 0 3px #EFD5F5",
            },
            keyframes: {
                floatSideways: {
                    "0%, 100%": { transform: "translateX(0) translateY(0)" },
                    "50%": { transform: "translateX(10px) translateY(-5px)" },
                },
                floatSidewaysMore: {
                    "0%, 100%": { transform: "translateX(0) translateY(0)" },
                    "50%": { transform: "translateX(-25px) translateY(25px)" },
                },
                upAndDown: {
                    "0%, 100%": { transform: "translateX(0)" },
                    "50%": { transform: "translateY(66%)" },
                },
                circleMotion: {
                    "0%": { transform: "translate(0, 0)" },
                    "25%": { transform: "translate(5px, -5px)" },
                    "50%": { transform: "translate(0, -10px)" },
                    "75%": { transform: "translate(-5px, -5px)" },
                    "100%": { transform: "translate(0, 0)" },
                },
            },
            animation: {
                floatSideways: "floatSideways 3s ease-in-out infinite",
                floatSidewaysMore: "floatSidewaysMore 3s ease-in-out infinite",
                upAndDown: "upAndDown 5s ease-in-out infinite",
                circleMotion: "circleMotion 6s linear infinite",
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
    ],
};
