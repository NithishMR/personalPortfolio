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
            {/* Card 0 */}
            {/* Card 1 */}

            {/* Card 1 */}
            <Card className="mx-auto w-full sm:w-[90%] md:w-[500px]">
              <CardHeader>
                <div className="items-center">
                  <img
                    src="./whiscryptTemp.svg"
                    alt="Whiscrypt"
                    className="object-cover w-full h-48  rounded-md"
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
                    reports, supports end-to-end confidentiality, and features
                    an AI-guided chatbot for whistleblower assistance. Currently
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
            <Card className="mx-auto w-full sm:w-[90%] md:w-[500px]">
              <CardHeader>
                <div>
                  <img
                    src="./IBMProject.png"
                    alt="IBM Project"
                    className=" object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <div className="mt-6 font-bold text-lg text-black dark:text-white">
                    IBM Stock Analysis Dashboard
                  </div>
                  <div className="text-justify text-sm text-muted-foreground">
                    This project is a dynamic and interactive dashboard built to
                    analyze IBM's intraday stock data using real-time 5-minute
                    intervals. It offers powerful data visualizations to assist
                    users in understanding stock price trends, trading volumes,
                    and key correlations. This dashboard is part of an
                    internship task for TakeMyTickets.
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
                      Chart.js
                    </span>
                    <span className="px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200">
                      Alpha Vantage API
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
                        href="https://github.com/NithishMR/TakeMyTickets-task3-FullStack"
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
                <Button className="w-full sm:w-auto" disabled>
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
