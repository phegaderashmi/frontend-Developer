import "./globals.css";

import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Professional Portfolio",
  description: "A professional developer portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
