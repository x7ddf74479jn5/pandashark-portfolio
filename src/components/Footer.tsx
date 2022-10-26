import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-end mr-5">
          <ChevronUpIcon className="fill-gray-500 hover:fill-white hover:border-white h-10 w-10 rounded-full grayscale cursor-pointer border border-gray-500" />
        </div>
      </footer>
    </Link>
  );
};
