import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
export default function Projects() {
  return (
    <>
      <div className="mt-20 mb-16">
        <div id="projects">
          <h1 className="text-4xl mb-6 font-extrabold">Feature Projects</h1>
          <p className="ext-2xl mb-4 font-extrabold">
            {" "}
            Navigate to projects page to see other projects
          </p>
        </div>
        {/* Vertical grid for cards */}
        <div className="grid grid-cols-1 gap-6 mt-16">
          {/* Card 0 */}
          <Card className="mx-auto w-full sm:w-[90%] md:w-[500px]">
            <CardHeader>
              <div className="items-center">
                <img
                  src="./whiscryptTemp.svg"
                  alt="Whiscrypt"
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <div className="mt-6 font-bold text-lg text-black dark:text-white">
                  Whiscrypt
                </div>
                <div className="text-justify text-muted-foreground">
                  A secure, anonymous whistleblowing platform designed to help
                  individuals report unethical or illegal activities without
                  fear. Whiscrypt uses AES-256 encryption to protect submitted
                  reports, supports end-to-end confidentiality, and features an
                  AI-guided chatbot for whistleblower assistance. Currently
                  building secure login, encrypted file support, and admin
                  moderation dashboard.
                </div>
              </CardDescription>
              <div className="my-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    React
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Express.js
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    AES-256
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    OpenAI API
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>
                <div className="flex flex-row items-center justify-around">
                  <div className="mr-2">
                    <img src="./github.svg" alt="github" />
                  </div>
                  <div>
                    <a
                      href="https://github.com/NithishMR/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </Button>
              <Button disabled>
                <div className="flex flex-row items-center justify-around">
                  <div className="mr-2">
                    <img src="./globe.svg" alt="globe" className="w-5" />
                  </div>
                  <div className="opacity-50">Live preview (coming soon)</div>
                </div>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 1 */}
          <Card className="mx-auto w-full sm:w-[90%] md:w-[500px]">
            <CardHeader>
              <div className="items-center">
                <img
                  src="./linkmanager1.png"
                  alt="linkManager"
                  className=" object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <div className="mt-6 font-bold text-lg text-black dark:text-white">
                  Link Manager
                </div>
                <div className="text-justify text-muted-foreground">
                  A full-stack link management app, featuring link tracking,
                  organization, and editing, with user account support in
                  progress
                </div>
              </CardDescription>
              <div className="my-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    React
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Daisy UI
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Node JS
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Express
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>
                <div className="flex flex-row items-center justify-around">
                  <div className="mr-2">
                    <img src="./github.svg" alt="github" />
                  </div>
                  <div className="">
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
              <Button disabled>
                <div className="flex flex-row items-center justify-around">
                  <div className="mr-2">
                    <img src="./globe.svg" alt="globe" className="w-5" />
                  </div>
                  <div className="">Live preview</div>
                </div>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2 Realty project */}
          {/* <Card className="mx-auto w-full sm:w-[90%] md:w-[500px]">
            <CardHeader>
              <div>
                <img
                  src="./EverHome.png"
                  alt="EverHome"
                  className=" object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <div className="mt-6 font-bold text-lg text-black dark:text-white">
                  EverHome Realty
                </div>
                <div className="text-justify text-sm text-muted-foreground">
                  A Real Estate web app inspired by Sotheby Real Estate,
                  featuring responsive, user-friendly design and continuous
                  feature enhancements
                </div>
              </CardDescription>
              <div className="mt-3 mb-12">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    React
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                    Daisy UI
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>
                <div className="flex flex-row items-center justify-around">
                  <div className="mr-2">
                    <img src="./github.svg" alt="github" />
                  </div>
                  <div className="">
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
              <Button>
                <div className="flex flex-row items-center justify-around">
                  <div className="mr-2">
                    <img src="./globe.svg" alt="globe" className="w-5" />
                  </div>
                  <div className="">Live preview</div>
                </div>
              </Button>
            </CardFooter>
          </Card> */}
        </div>
      </div>
    </>
  );
}
