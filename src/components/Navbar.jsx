import React from "react";
import { ModeToggle } from "./ModeToggleDarkMode";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-inherit border-b-2">
      <div className="flex items-center">
        <h1 className="text-2xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            Singkat
          </span>
          <span>.in</span>
        </h1>
      </div>
      <ModeToggle />
    </nav>
  );
}
