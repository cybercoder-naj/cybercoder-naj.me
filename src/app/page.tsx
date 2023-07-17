"use client";

import { useEffect } from "react";
import { useGlobalContext } from "./Context/store";
import Link from "next/link";
import './about.css'

export default function About() {
  const { page, setPage, setMenuExpanded} = useGlobalContext();

  useEffect(() => {
    setPage('about')
    setMenuExpanded(false)
  }, [])

  return <div id="about" className="flex flex-col items-center mt-10 px-10">
    <img src="favicon.ico" alt="Nishant Aanjaney Jalan" className="rounded-full w-10/12 border-10 border-neutral-700 border-solid shadow-img-bg" />

    <h4 className="mt-8 text-neutral-400">Full Stack Developer</h4>
    <h1 className="text-2xl mt-2 font-semibold">Nishant Aanjaney Jalan</h1>

    <p className="mt-6 text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis praesentium, ipsum rem neque fugiat dolores repellat sint excepturi mollitia illo quidem incidunt illum temporibus modi veritatis, aliquam sequi quia.</p>

    <div className="flex justify-center w-full mt-6 items-stretch">
      <a href="" download className="home-btn border-blue-500 hover:bg-blue-500">Download CV</a>
      <Link href="contact" className="home-btn border-white hover:bg-white hover:text-black">Contact</Link>
    </div>
  </div>
}