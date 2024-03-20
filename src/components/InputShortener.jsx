import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScissorsIcon } from "@radix-ui/react-icons";

export function InputShortener() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input size="" type="text" placeholder="Your Url" />
      <Button type="submit">
        <ScissorsIcon />
      </Button>
    </div>
  );
}
