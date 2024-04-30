import React from "react";

const Experiences = () => {
  return (
    <div className="flex flex-row mx-24 gap-10" id="experiences">
      <div class="py-8 w-2/5">
        <div className=" text-gray-400">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div class="bg-[rgb(47,30,102)] shadow rounded-lg p-6">
              <div class="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 class="text-xl font-bold text-white">Alex Abainza</h1>
                <p class="text-gray-200">Software Developer</p>
                <div class="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    class="bg-violet-700  text-white py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <hr class="my-6 border-t border-gray-300" />
              <div class="flex flex-col">
                <span class="text-white uppercase font-bold tracking-wider mb-2 ">
                  Skills
                </span>
                <ul>
                  <li class="mb-2">JavaScript</li>
                  <li class="mb-2">React</li>
                  <li class="mb-2">Node.js</li>
                  <li class="mb-2">HTML/CSS</li>
                  <li class="mb-2">Tailwind Css</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-8">
        <h1 className="text-white text-5xl">Experience</h1>

        <div class="relative pl-8 sm:pl-32 py-6 group">
          <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            The origin
          </div>
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2020
            </time>
            <div class="text-xl font-bold text-slate-900">
              Acme was founded in Milan, Italy
            </div>
          </div>
          <div class="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        <div class="relative pl-8 sm:pl-32 py-6 group">
          <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            The milestone
          </div>
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2021
            </time>
            <div class="text-xl font-bold text-slate-900">
              Reached 5K customers
            </div>
          </div>
          <div class="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        <div class="relative pl-8 sm:pl-32 py-6 group">
          <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            The acquisitions
          </div>
          <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2022
            </time>
            <div class="text-xl font-bold text-slate-900">
              Acquired various companies, inluding Technology Inc.
            </div>
          </div>
          <div class="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
