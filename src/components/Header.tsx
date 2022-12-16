import type { Social } from "@/types";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[];
};
export const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map(({ name, url }) => (
          <SocialIcon key={name} className="cursor-pointer" url={url} fgColor="gray" bgColor="transparent" />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer mr-4"
      >
        <SocialIcon className="cursor-pointer" url="#contact" network="email" fgColor="gray" bgColor="transparent" />
        <a href="#contact" className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contact
        </a>
      </motion.div>
    </header>
  );
};
