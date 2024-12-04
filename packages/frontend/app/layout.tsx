import { Layout } from "src/components/Layout";
import "../styles/globals.css";

export const metadata = {
    title: "My App",
    description: "This is my Next.js app with TailwindCSS.",
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
