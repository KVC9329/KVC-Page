import localFont from "next/font/local";
import "./globals.css";
import "./styles.css"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KVC consultants ltd",
  description: "A simple UI to handle menus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
