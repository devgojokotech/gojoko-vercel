import type { Metadata } from "next";
import "./globals.scss";
import Contentcontainer from "./core/Contentcontainer";
import Fonts from "./shared/components/Fonts";

export const metadata: Metadata = {
  title: "Gojoko Technologies",
  description: "Gojoko Technologies",
};


export const revalidate = 3;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Fonts />
        <Contentcontainer>
          {children}
        </Contentcontainer>
      </body>
    </html>
  );
}
