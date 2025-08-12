'use client';

import React, { useState, ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
 const [cart, setCart] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header cart={cart} />
      
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
