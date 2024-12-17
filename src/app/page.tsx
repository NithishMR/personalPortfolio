import About from "./main-components/About";
import EdEx from "./main-components/EdEx";
import Projects from "./main-components/Projects";
import Skills from "./main-components/Skills";
import DarkMode from "./main-components/DarkMode";

export default function Home() {
  return (
    <>
      <div className="w-[90%] sm:w-[70%] mx-auto">
        <DarkMode />
        <About />
        <EdEx />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
