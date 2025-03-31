import React from "react";

export const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen  flex flex-col items-center justify-center dark:bg-slate-900 dark:text-white">
        <div className="flex flex-col w-[90vw] md:w-[40vw] gap-5">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <div className="flex  flex-col gap-1">
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-[1px] border-gray-400 outline-none w-full py-1 px-3 rounded-md"
            />
          </div>
          <div className="flex  flex-col gap-1">
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-[1px] border-gray-400 outline-none w-full py-1 px-3 rounded-md"
            />
          </div>
          <div className="flex  flex-col gap-1">
            <p>Message</p>
            <textarea
              type="text"
              placeholder="Type your message"
              className="border-[1px] border-gray-400 outline-none w-full h-25 px-3 rounded-md"
            />
          </div>
          <div>
            <button className="text-left bg-blue-500 px-2 py-1 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
