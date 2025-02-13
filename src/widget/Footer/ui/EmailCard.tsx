import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Mail } from "lucide-react";

const EmailCard = () => {
  return (
    <article className="rounded-2xl lg:flex-row absolute -top-1/4 items-center bg-black flex flex-col justify-between w-full max-w-[1440px] px-16 py-10">
      <h2 className="h2 text-white lg:text-start text-center mb-4 lg:max-w-[551px] w-full">
        Stay up to date about our latest offers
      </h2>
      <div className="flex gap-2 flex-col w-[350px]">
        <div className="relative w-[350px] items-center flex">
          <Mail className="absolute left-6 text-gray-500" />
          <Input
            className="pl-12 mx-4 w-full bg-white"
            placeholder="Enter your emaill address"
            type="text"
          />
        </div>
        <Button className="mx-4">Subscribe to Newsletter</Button>
      </div>
    </article>
  );
};

export default EmailCard;
