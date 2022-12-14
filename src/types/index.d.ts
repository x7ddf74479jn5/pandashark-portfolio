import { MicroCMSDate, MicroCMSImage, MicroCMSListContent, MicroCMSObjectContent } from "microcms-js-sdk";

type ProfileResponse = MicroCMSObjectContent & {
  name: string;
  image: MicroCMSImage;
  email: string;
  background: string;
  role: string;
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
};

type Experience = {
  name: string;
  company: string;
  image: MicroCMSImage;
  dateStarted: string;
  dateEnd: string;
  current: boolean;
  points: {
    point: string;
  }[];
  technologies: Technology[];
};

type Project = {
  name: string;
  summary: string;
  url: string;
  image: MicroCMSImage;
  technologies: Technology[];
  github: string;
};

type Social = {
  name: string;
  url: string;
};

type BaseTechnology = {
  name: string;
  image: MicroCMSImage;
  progress: number;
  description: string;
};

type Technology = MicroCMSListContent & BaseTechnology;

type Skill = Technology;

type PageInfo = MicroCMSDate & {
  background: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  profilePic: Image;
};
