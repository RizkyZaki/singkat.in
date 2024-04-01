"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScissorsIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";

export function InputShortener() {
  const [url, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    if (url != "") {
      localStorage.setItem("url", url);
      toast.success("Successfully Shorted");
    } else {
      toast.error("Oops! You Must Filled The Form.");
    }
  };
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        size=""
        type="text"
        onChange={handleUrlChange}
        value={url}
        placeholder="Your Url"
      />
      <Button type="submit" onClick={handleSubmit}>
        <ScissorsIcon />
      </Button>
    </div>
  );
}
