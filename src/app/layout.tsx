import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const originDisplay = localFont({
  variable: "--font-origin-display",
  src: [
    { path: "../Origin/Web-TT/Origin-RegularDisplay.woff2", weight: "400" },
    { path: "../Origin/Web-TT/Origin-SemiBoldDisplay.woff2", weight: "600" },
    { path: "../Origin/Web-TT/Origin-ExtraBoldDisplay.woff2", weight: "800" },
    { path: "../Origin/Web-TT/Origin-BlackDisplay.woff2", weight: "900" },
  ],
});

const originText = localFont({
  variable: "--font-origin-text",
  src: [
    { path: "../Origin/Web-TT/Origin-RegularText.woff2", weight: "400" },
    { path: "../Origin/Web-TT/Origin-MediumText.woff2", weight: "500" },
    { path: "../Origin/Web-TT/Origin-BoldText.woff2", weight: "700" },
  ],
});

export const metadata: Metadata = {
  title: "Iheanacho Emmanuel — Backend-focused fullstack engineer",
  description:
    "Portfolio of Iheanacho Emmanuel, a backend-focused fullstack engineer building scalable systems, payment infrastructure, and event-driven cloud services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${originDisplay.variable} ${originText.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
