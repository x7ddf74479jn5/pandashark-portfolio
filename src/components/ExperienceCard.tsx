import type { Experience } from "@/types";
import { motion } from "framer-motion";

type Props = {
  experience: Experience;
};
export const ExperienceCard = ({ experience }: Props) => {
  const dateFormatter = Intl.DateTimeFormat("ja-JP", { dateStyle: "long" });
  const start = dateFormatter.format(new Date(experience.dateStarted));
  const end = experience.dateEnd && dateFormatter.format(new Date(experience.dateEnd));

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={experience.image.url}
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        loading="lazy"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.name}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <p className="uppercase py-5 text-gray-300">
          {start} - {experience.current ? "現在" : end}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, index) => (
            <li key={index}>{point.point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
