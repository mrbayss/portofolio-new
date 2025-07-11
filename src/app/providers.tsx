// app/providers.tsx (for App Router)
"use client"; // This component needs to be a client component

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export function Providers({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
