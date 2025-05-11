import { Metadata } from "next";
import { Layout } from "src/components/Layout";
import "../styles/globals.css";
import { CHAIN_NAME } from "@/utils/chains";

export const metadata: Metadata = {
  title: "XPAD - Launch your token today",
  description: `The place for memecoins on ${CHAIN_NAME}. No hassle, no limits. Just vibes. Make it happen or don’t—your call.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oxk6owh.css" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
