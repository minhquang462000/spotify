import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainSidebar from "@/components/SideBar/MainSidebar";
import InfoFooterChild from "@/components/RenderPageChild/InfoFooterChild";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Web App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "#000000", position: "relative" }}
        className={`${inter.className}  w-full gap-2  h-screen px-2 flex text-white `}
      >
        <div className="w-max pt-2  pb-16  h-full relative">
          <MainSidebar />
        </div>
        <div className="w-full pb-16  pt-2 h-full ">{children}</div>
        <InfoFooterChild />
      </body>
    </html>
  );
}
