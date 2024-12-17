import ModeToggle from "../main-components/DarkMode";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function ProjectSection() {
  return (
    <>
      <div className="w-full sm:w-[90%] mx-auto">
        <ModeToggle />
        <div className="mt-20 mb-16">
          <div id="projects">
            <h1 className="text-4xl mb-6 font-extrabold">My Projects</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
            {/* Card 1 */}
            <Card className="mx-auto sm:w-[100%] md:w-[95%]">
              <CardHeader>
                <div className="items-center">
                  <img
                    src="./linkmanager1.png"
                    alt="linkManager"
                    className="object-cover w-full h-auto"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <div className="mt-6 font-bold text-lg text-black dark:text-white sm:text-xl md:text-2xl">
                    Link Manager
                  </div>
                  <div className="text-justify text-sm text-muted-foreground sm:text-base md:text-lg">
                    A full-stack link management app, featuring link tracking,
                    organization, and editing, with user account support in
                    progress
                  </div>
                </CardDescription>
                <div className="my-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      React
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      Daisy UI
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      Node JS
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      Express
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
                <Button className="w-full sm:w-auto">
                  <div className="flex flex-row items-center justify-center sm:justify-start">
                    <div className="mr-2">
                      <img src="./github.svg" alt="github" />
                    </div>
                    <div>
                      <a
                        href="https://github.com/NithishMR/LinkManager"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </Button>
                <Button className="w-full sm:w-auto">
                  <div className="flex flex-row items-center justify-center sm:justify-start">
                    <div className="mr-2">
                      <img src="./globe.svg" alt="globe" className="w-5" />
                    </div>
                    <div>Live preview</div>
                  </div>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="mx-auto sm:w-[100%] md:w-[95%]">
              <CardHeader>
                <div>
                  <img
                    src="./EverHome.png"
                    alt="EverHome"
                    className="object-cover w-full h-auto"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <div className="mt-6 font-bold text-lg text-black dark:text-white sm:text-xl md:text-2xl">
                    EverHome Realty
                  </div>
                  <div className="text-justify text-sm text-muted-foreground sm:text-base md:text-lg">
                    A Real Estate web app inspired by Sotheby Real Estate,
                    featuring responsive, user-friendly design and continuous
                    feature enhancements
                  </div>
                </CardDescription>
                <div className="mt-3 mb-12">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      React
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 sm:text-base">
                      Daisy UI
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
                <Button className="w-full sm:w-auto">
                  <div className="flex flex-row items-center justify-center sm:justify-start">
                    <div className="mr-2">
                      <img src="./github.svg" alt="github" />
                    </div>
                    <div>
                      <a
                        href="https://github.com/NithishMR/EverHome"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </Button>
                <Button className="w-full sm:w-auto">
                  <div className="flex flex-row items-center justify-center sm:justify-start">
                    <div className="mr-2">
                      <img src="./globe.svg" alt="globe" className="w-5" />
                    </div>
                    <div>Live preview</div>
                  </div>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
