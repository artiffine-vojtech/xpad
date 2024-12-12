import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThirdwebProvider } from "thirdweb/react";
import ThirdWebAutoConnect from "@/containers/ThirdWebAutoConnect";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
    style: ["normal"],
    variable: "--font-inter",
});

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="bg-gray-100 box-border">
            <div
                className={cn(
                    inter.variable,
                    "flex flex-col min-h-screen max-w-[1440px] mx-auto"
                )}
            >
                <ThirdwebProvider>
                    <ThirdWebAutoConnect />
                    <Header />
                    {children}
                    <Footer />
                </ThirdwebProvider>
            </div>
        </div>
    );
};
