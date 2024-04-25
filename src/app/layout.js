"use client";

import {
  Montserrat,
  Montserrat_Alternates,
  Open_Sans,
  Oswald,
  Quicksand,
  Galindo,
  Karantina,
  Nova_Script,
  Girassol,
  Mohave,
  Cagliostro,
} from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Social from "./social";
import Footer from "./footer";
import "atropos/css";
import { useState, useEffect } from "react";
import HeaderTitle from "./headerTitle";

// Linefont, wavefont, Moirai One(başlık),

const bodyFont = Cagliostro({ subsets: ["latin"], weight: ["400"] });

// export const metadata = {
//   title: "Samed YILDIRIM",
//   description: "Samed YILDIRIM - Portfolio Website",
// };

const sections = [
  { name: "Home", id: "/" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },

  { name: "Projects", id: "projects" },
  { name: "Certificates & Courses", id: "courses" },
  { name: "Contact", id: "contact" },
];

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <html lang="en">
      <body className={`${bodyFont.className} bg-background-light`}>
        {loading ? (
          <div className="h-screen w-screen flex justify-center items-center ">
            <div className="loader"></div>
          </div>
        ) : (
          //
          <div>
            <Navbar sections={sections} />
            <div className="flex justify-center items-center">{children}</div>
            <Social />
            
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
