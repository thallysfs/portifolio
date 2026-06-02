import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
