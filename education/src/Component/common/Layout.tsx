// src/components/common/Layout.tsx

import React, { ReactNode } from "react";
import Header from "./Header/Header";


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
