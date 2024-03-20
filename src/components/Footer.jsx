import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramLogoIcon className="h-6 w-6" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <GitHubLogoIcon className="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInLogoIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
