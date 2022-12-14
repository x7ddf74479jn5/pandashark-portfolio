import { BackgroundCircles } from "@/components/BackgroundCircles";
import type { PageInfo } from "@/types";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {
  pageInfo: PageInfo;
};

export const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo?.name}`, "Guy-who-loves-coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img src={pageInfo?.heroImage.url} alt="" className="relative rounded-full h-32 w-32 mx-auto object-cover" />
      <div className="z-20">
        <p className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo.role}</p>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>

      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experiences</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects ">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};
