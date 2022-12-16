import type { PageInfo } from "@/types";
import { motion } from "framer-motion";
type Props = {
  pageInfo: PageInfo;
};

export const About = ({ pageInfo }: Props) => {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-y-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <div className="space-y-10 px-0 md:px-10 mt-36 md:mt-0 relative">
        <h4 className="text-2xl md:text-4xl font-semibold ">
          略歴と<span className="underline decoration-[#F7AB0A]/50">開発経験</span>について
        </h4>
        <p className="text-left indent-4 leading-relaxed md:leading-loose">{pageInfo?.background}</p>
      </div>
      <img
        src="/images/seamless_pattern_with_shark_fin_in_ocean_wave_generated.jpg"
        alt=""
        className="absolute top-1/4 -z-10 opacity-10 object-cover backdrop-grayscale"
      />
    </motion.div>
  );
};
