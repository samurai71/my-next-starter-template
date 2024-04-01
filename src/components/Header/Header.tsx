import React from "react";

import { ThemeToggle } from "@/components/Header/theme-toggle";
// import Link from "next/link";

function Header() {
  return (
    <header className="text-center">
      <ThemeToggle />
    </header>
  );
}

export default Header;
