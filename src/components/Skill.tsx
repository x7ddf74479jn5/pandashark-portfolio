import { motion } from "framer-motion";
import type { Skill as TSkill } from "@/types";

type Props = {
  directionLeft?: boolean;
  skill: TSkill;
};
export const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill.image.url}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 group-hover:grayscale transition duration-300 ease-in-out"
        loading="lazy"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-16 md:h-16 
      rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-md md:text-lg font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
};
