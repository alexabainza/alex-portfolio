import React from "react";
import { Link } from "react-router-dom";
import pfp from "../assets/pfp1.jpg";
const Experiences = () => {
  return (
    <div
      className="flex lg:flex-row md:flex-col sm:flex-col flex-col py-16 gap-10 min-h-screen lg:px-16 md:px-12 sm:px-4 px-8"
      id="experiences"
    >
      <div class="lg:w-3/5 md:w-full sm:w-full w-full">
        <div className=" text-gray-400">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div class="bg-[rgb(47,30,102)] shadow rounded-xl px-10 py-20">
              <div class="flex flex-col items-center">
                <img
                  src={pfp}
                  class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 class="text-xl font-bold text-white">Alex Abainza</h1>
                <p class="text-gray-200">Software Developer</p>
                <div class="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href={`mailto:abainza.alexandra@gmail.com?subject=Contact from Portfolio`}
                    class="bg-violet-700 hover:bg-violet-500 text-white py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                  <Link
                    to="https://drive.google.com/file/d/1XRbXYbFykGoSpe-vK14CdZCX0akDxpdl/view?usp=sharing"
                    class="bg-gray-200 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >
                    Resume
                  </Link>
                </div>
              </div>
              <hr class="my-6 border-t border-gray-300" />
              <div class="flex flex-col">
                <span class="text-white uppercase font-bold tracking-wider mb-2 ">
                  Skills
                </span>
                <ul>
                  <li class="mb-2">JavaScript</li>
                  <li class="mb-2">Java</li>
                  <li class="mb-2">Python</li>
                  <li class="mb-2">React</li>
                  <li class="mb-2">Node.js</li>
                  <li class="mb-2">Adobe Photoshop</li>
                  <li class="mb-2">Crochet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" flex flex-col justify-center items-center gap-5">
        <h1 className="text-white text-5xl font-bold flex w-full">
          Experience
        </h1>

        <div class="relative pl-8 sm:pl-32 py-6 group items-center justify-center">
          <div class="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
            Executive Public Relations Officer
          </div>
          <div class="flex flex-col sm:flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May 2023
            </time>
            <div class="text-lg font-medium text-violet-200">
              Rotaract Club of Cebu Fuente - University of San Carlos, USC
              Computer and Information Sciences Council (CISCO) | USC Junior
              People Management Association of the Philippines (USC-JPMAP)
            </div>
          </div>
          <div class="text-slate-200">
            <ul className="list-disc ml-10">
              <li>
                Schedule posts, make captions for posts, and occasionally make
                graphics about awareness posts{" "}
              </li>
              <li>Respond to inquiries that are raised in the page</li>
            </ul>
          </div>
        </div>

        <div class="relative pl-8 sm:pl-32 py-6 group">
          <div class="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
            Data Engineer
          </div>
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              MAR 2022
            </time>
            <div class="text-lg font-medium text-violet-200">
              Datos Pilipinas
            </div>
          </div>
          <div class="text-slate-200">
            <ul className="list-disc ml-10">
              <li>
                Mined information about the members of the Congress and the
                House of Representatives
              </li>
              <li>Mined data about the 2019 elections Partylist winners</li>
              <li>
                Analyzed mined data to see which Congressman/Congresswoman
                contributed the most number of principal authored bills to a
                certain committee
              </li>
            </ul>
          </div>
        </div>
        <div class="relative pl-8 sm:pl-32 py-6 group">
          <div class="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
            Volunteer - Summer of Service{" "}
          </div>
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              SUMMER
            </time>
            <div class="text-lg font-medium text-violet-200">
              The Suite Room Ayala, Chikaan Ayala, Harbour City Ayala
            </div>
          </div>
          <div class="text-slate-200">
            <ul className="list-disc ml-10">
              <li>
                Served as a waitress in the aforementioned companies wherein
                half of the salary will be given to the scholars in the partner
                schools.
              </li>
              <li>Served food and helped out in the restaurant activities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
