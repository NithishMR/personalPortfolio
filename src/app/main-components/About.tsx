import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="mt-36">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="text-[4.5rem] font-sans font-bold">
                hi 👋 Nithish here
              </h1>
              <p className="xl:text-xl lg:text-lg text-justify font-thin">
                An aspiring software developer passionate about learning new
                technologies like React, Node.js, and TypeScript. Currently
                working on building projects to sharpen my skills and grow in
                the field.
              </p>
              <div className="w-[70%] mt-6">
                <div className="flex flex-row items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href="https://github.com/NithishMR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="./github.svg" alt="Github" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="">Github</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href="./NithishMR.pdf" target="_blank">
                        <div className="flex flex-col items-center justify-center">
                          <Download />
                          <span className="font-bold">Resume</span>
                        </div>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="">Download Resume</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href="https://www.linkedin.com/in/nithishmr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="./linkedin.svg" alt="LinkedIn" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href="mailto:nithishmr004@gmail.com">
                        <img src="./mail.svg" alt="Email" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <img src="./MyImage.jpg" alt="My picture" fetchPriority="high" />
          </div> */}
        </div>
      </div>
    </>
  );
}
