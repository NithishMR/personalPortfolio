"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<typeof NextThemesProvider>>) {
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component only renders on the client side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null until mounted, to prevent hydration mismatch
  }

  return (
    <NextThemesProvider
      {...props}
      enableSystem={true} // Allows using system theme preferences
      defaultTheme="system" // Default theme is based on system preferences
      disableTransitionOnChange={true} // Prevents flickering during theme change
    >
      {children}
    </NextThemesProvider>
  );
}
