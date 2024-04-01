"use client";
import { useState } from "react";
import { host } from "@/lib/conf";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyIcon, ScissorsIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";

export function InputShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url !== "") {
      try {
        const response = await fetch("/api/url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ longUrl: url }),
        });

        if (response.ok) {
          const data = await response.json();
          setShortUrl(`${host}/${data.shortUrl}`);
          setIsDialogOpen(true);
          setUrl("");
        } else {
          const data = await response.json();
          throw new Error(data.error);
        }
      } catch (error) {
        console.error("Error creating URL:", error.message);
        toast.error(error.message);
      }
    } else {
      toast.error("Oops! You Must Fill The Form.");
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
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
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input id="link" value={shortUrl} readOnly />
            </div>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                handleCloseDialog();
                toast.success("Copied to clipboard");
              }}
              size="sm"
              className="px-3"
            >
              <span className="sr-only">Copy</span>
              <CopyIcon className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
