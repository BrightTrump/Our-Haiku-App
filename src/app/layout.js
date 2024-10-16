// import localFont from "next/font/local";
import Link from "next/link";
import "./css/globals.css";
import Head from "next/head";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// className={`${geistSans.variable} ${geistMono.variable} antialiased`}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-100 shadow-md">
          <div className="container mx-auto">
            <div className="navbar">
              <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                  Haiuk App
                </Link>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  {/* <li>
                    <details>
                      <summary>Parent</summary>
                      <ul className="bg-base-100 rounded-t-none p-2"></ul>
                    </details>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto py-10 px-6">{children}</main>

        <footer className="text-gray-400 text-center text-xs">
          <p>CopyRight &copy; 2022 - {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
