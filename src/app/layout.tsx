import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "storage",
  description: "个人物品储存/库存管理平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
