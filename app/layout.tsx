import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftReply — AI that answers security questionnaires so your team doesn't have to",
  description:
    "SwiftReply uses AI to auto-answer security questionnaires and RFPs from your existing docs. Review, approve, export. Done in minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
