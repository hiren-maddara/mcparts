import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "signup",
  description: "register",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${"w-screen h-screen flex items-center justify-center"} ${String(inter.className)}`}>{children}</body>
    </html>
  );
  
}