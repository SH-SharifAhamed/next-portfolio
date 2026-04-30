"use client";
// import { Button } from "@heroui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 py-8rem px-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 max-w-7xl text-center md:text-left justify-center md:justify-normal">
        <h1 className="text-3xl md:text-4xl font-black bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent pb-4 animate-slide-up group relative overflow-hidden">
          Hi, I am <br />
          <span className="inline-block group-hover:-skew-x-3 transition-all duration-700 ease-out relative">
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl md:text-5xl -mb-2 -mt-2 drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(81,52,95,0.8)]">
              Sharif Ahamed
            </span>

            <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 group-hover:scale-x-110 transition-all duration-500 origin-left" />
          </span>
        </h1>

        <h3 className="text-xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6 relative group cursor-default">
          <span className="inline-flex items-center gap-2">
            I am a{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md  relative overflow-hidden flex justify-between">
              <span className="inline-block bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md transition-all duration-700 group-hover:translate-x-2">
                Full Stack MERN <br /> Developer
              </span>

              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 animate-pulse opacity-80" />
            </span>
            <svg
              className="w-6 h-6 text-blue-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
        </h3>

        <p>
          Full Stack MERN Developer | Building scalable web apps with MongoDB,
          Express, React & Node.js. Passionate about creating responsive UIs,
          secure APIs & real-time features. Open for freelance/remote work.
        </p>
        <div className="flex justify-center md:justify-start pt-2">
          <Link
            variant="secondary"
            size="lg"
            href={
              "https://drive.google.com/file/d/1Dfp7CioYNTY579Vaz1NC4aynIPpQqpi5/view?usp=drive_link"
            }
            target="_blank"
            className="group relative overflow-hidden bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/75 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 font-semibold px-8 py-3 rounded-xl border-2 border-transparent hover:border-white/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Check Resume
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>
      </div>

      <Image
        src={"/hero.jpeg"}
        alt="logo"
        loading="eager"
        width={200}
        height={200}
        priority
        quality={85}
        //  placeholder="blur"
        className="object-cover md:my-10 h-auto w-auto rounded-full shadow-2xl border-4 border-purple-500 hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
};

export default Hero;
