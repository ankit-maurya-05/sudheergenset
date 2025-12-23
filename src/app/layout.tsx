// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import EnterpriseLeadPopup from "@/components/EnterpriseLeadPopup";

export const metadata = {
  title: "Kirloskar Generator | Sales & Service",
  description: "Authorized Kirloskar Generator Sales, Service & AMC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          {children}
          <EnterpriseLeadPopup />
          <FloatingCTA />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
