import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Dynamic Blog",
  description: "Created by Sara Atif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
