"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b bg-[#191924]">
      <nav className=" flex justify-between items-center px-4 py-3 max-w-6xl mx-auto">
        <div className="flex gap-2 items-center">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={40}
              height={40}
              className="object-cover h-auto w-auto"
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm text-white">
          
          <li className="relative group">
            <Link
              href={"#about"}
              className="px-2 py-1 transition-all duration-300 hover:text-gray-300"
            >
              About
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href={"#skills"}
              className="px-2 py-1 transition-all duration-300 hover:text-gray-300"
            >
              Skills
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href={"#experience"}
              className="px-2 py-1 transition-all duration-300 hover:text-gray-300"
            >
              Experience
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link
              href={"#projects"}
              className="px-2 py-1 transition-all duration-300 hover:text-gray-300"
            >
              Projects
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link
              href={"#education"}
              className="px-2 py-1 transition-all duration-300 hover:text-gray-300"
            >
              Education
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <div
          className="hidden md:flex items-center text-blue-600 hover:bg-blue-500 
        hover:text-white transition-colors duration-300 rounded-full"
        >
          <Link
            href={"https://github.com/SH-SharifAhamed"}
            target="_blank"
            className="flex items-center gap-2 border-2 border-blue-600 px-4 py-2 rounded-full "
          >
            <FaGithub className="text-xl" />
            GitHub Profile
          </Link>
        </div>

        <div className="md:hidden cursor-pointer text-white">
          {open ? (
            <FaTimes
              onClick={() => setOpen(false)}
              className="text-xl text-red-500"
            />
          ) : (
            <FaBars
              onClick={() => setOpen(true)}
              className="text-xl text-white"
            />
          )}
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[#191924] px-6 pb-4 text-white">
          <ul className="flex flex-col gap-4 text-sm font-bold">
            
            <li>
              <Link href="#about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => setOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={() => setOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#education" onClick={() => setOpen(false)}>
                Education
              </Link>
            </li>
          </ul>

          <Link
            href="https://github.com/SH-SharifAhamed"
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full 
            backdrop-blur-md border-2 border-blue-600 text-blue-600
            hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <FaGithub />
            GitHub Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
