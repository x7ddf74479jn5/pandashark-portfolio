import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { client } from "@/lib/microcms";
import { Experience, PageInfo, ProfileResponse, Project, Skill, Social, Technology } from "@/types";

type Props = {
  skills: Skill[];
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
};

const Home: NextPage<Props> = ({ pageInfo, skills, experiences, projects, socials }) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Head>
        <title>{pageInfo.name}&apos;s Portfolio</title>
        <meta name="description" content={`${pageInfo.name}&apos;s Portfolio`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const profileResponse = await client.getObject<ProfileResponse>({ endpoint: "profile" });
  const technologiesResponse = await client.getList<Technology>({ endpoint: "technologies", queries: { limit: 100 } });

  const pageInfo: PageInfo = {
    background: profileResponse.background,
    email: profileResponse.email,
    role: profileResponse.role,
    heroImage: { title: profileResponse.name, url: profileResponse.image.url },
    name: profileResponse.name,
    profilePic: { title: profileResponse.name, url: profileResponse.image.url },
    createdAt: profileResponse.createdAt,
    updatedAt: profileResponse.updatedAt,
  };

  return {
    props: {
      pageInfo,
      skills: technologiesResponse.contents,
      projects: profileResponse.projects,
      socials: profileResponse.socials,
      experiences: profileResponse.experiences,
    },
  };
};

export default Home;
