"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensures that the component renders only after client-side mounting
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering until client-side rendering is complete
    return null;
  }

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
      />
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
      )}
    </div>
  );
}
