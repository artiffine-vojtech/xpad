import { Layout } from "src/components/Layout";
import "../styles/globals.css";

export const metadata = {
    title: "XPAD - Launch your token today",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/oxk6owh.css"
                />
            </head>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
