import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio | Software Engineering Student",
  description: "Welcome to my portfolio. I am a passionate Software Engineering student showcasing my projects, skills, and experience.",
  keywords: ["portfolio", "software engineering", "developer", "student", "projects", "web development"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
