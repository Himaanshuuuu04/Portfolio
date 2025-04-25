import { House, SquareUserRound, SquareCode, Mail } from "lucide-react";

import { FloatingNav } from "@/components/ui/floating-navbar";
import SparklesPreview from "@/components/demo/sparklePreviewDemo";
import Squares from "@/components/ui/Squares/Squares";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Home() {
  return (
    <div className="flex flex-col bg-black items-center justify-items-center h-screen w-screen overflow-hidden p-8 pb-20 gap-10  font-[family-name:var(--font-geist-sans)]">
      <div className="absolute inset-0 w-full h-full bg-black">
        <Squares
          speed={0.4}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="rgb(41,41,41)"
          hoverFillColor="#444444"
        />
      </div>
      <FloatingNav navItems={navItems} />
      <main className="flex flex-col gap-[32px] row-start-2 items-center  ">
        <div className="flex flex-col gap-2 items-center justify-center mt-20 md:mt-50">
          <SparklesPreview>
            <p className="text-base text-wrap w-screen px-5 md:w-full sm:text-lg font-light text-center text-neutral-500 dark:text-white">
              Hey, I&apos;m a
              <strong className="text-green-400 font-bold">
                {" "}
                Full Stack Developer
              </strong>{" "}
              passionate about building performant, user-friendly, and scalable
              applications.
            </p>
          </SparklesPreview>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center -mt-4">
            <AnimatedButton>
              <a
                href="https://drive.google.com/file/d/1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let&apos;s Connect ✋
              </a>
            </AnimatedButton>
            <AnimatedButton>
              <a
                href="https://drive.google.com/file/d/1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume 📄
              </a>
            </AnimatedButton>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <House className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: (
      <SquareUserRound className="h-5 w-5 text-neutral-500 dark:text-white" />
    ),
  },

  {
    name: "Projects",
    link: "/projects",
    icon: <SquareCode className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Mail className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
  {
    name: "LinkedIn",
    link: "/linkedin",
    icon: <i className="pi pi-linkedin  " style={{ fontSize: "1rem" }}></i>,
  },
  {
    name: "GitHub",
    link: "/github",
    icon: <i className="pi pi-github" style={{ fontSize: "1rem" }}></i>,
  },
];
