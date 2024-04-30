import React from "react";

const AboutEcoCycle = () => {
  return (
    <div className="text-white w-full flex flex-row mt-20 min-h-screen border-2">
      <div className="w-2/3 gap-5 flex flex-col">
        <p className="text-6xl">AboutEcoCycle</p>
        <p className="text-lg">
          The idea behind this ideation portfolio is designed to address the
          growing concern of electronic waste (e-waste) management in the
          country. In this era where people rely on their electronic devices to
          do even the most simple task, the accumulation of electronic waste has
          become a pressing issue worldwide, as improper disposal of these
          devices poses a significant threat to the environment. This app
          prototype aims to empower users to dispose of their electronics
          properly. By giving them a platform where they could easily find
          places and projects that accept used electronic parts, and also
          allowing them to connect with like-minded people and contribute to
          their projects, the app fosters a culture of environmental
          stewardship, and encourages sustainable practices. We leverage the
          power of technology to address the challenges surrounding the proper
          use and disposal of electronic devices, for a cleaner, greener,
          future.
        </p>

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:transform hover:shadow-lg">
          <svg
            class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
          </svg>
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Need a help in Claim?
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <a
            href="#"
            class="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            See our guideline
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutEcoCycle;
