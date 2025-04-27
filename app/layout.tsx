import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css"; 
import { ThemeProvider } from "@/components/ThemeProvider";



export const metadata: Metadata = {
  title: "Himanshu Singh | Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description: "Himanshu Singh's Portfolio",
  keywords: [
    "Himanshu Singh",
    "Jaypee Institute of Information Technology",
    "Software Engineer",
    "Full Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="font-outfit antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
