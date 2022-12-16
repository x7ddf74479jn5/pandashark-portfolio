import { Skill } from "@/components/Skill";
import { motion } from "framer-motion";
import type { Skill as TSkill } from "@/types";

type Props = {
  skills: TSkill[];
};

export const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        ホバーで現在の熟練度が表示されます
      </h3>

      <div className="grid grid-cols-5 md:grid-cols-6 gap-5 mt-36">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill.id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};
