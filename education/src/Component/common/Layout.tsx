// src/components/Layout.js

import Header from "./Header/Header";



export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">{children}</main>

    </div>
  );
}
