import { HiMail } from "react-icons/hi";

export const Banner = () => {
  return (
    <>
      <div className="w-full lg:px-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 pb-10 md:pb-20 dark:bg-slate-900 dark:text-white">
        {/* left */}
        <div className="mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expredita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!
            </p>
            <div className="relative flex">
            <HiMail className="absolute top-4 mx-4 text-xl" />
            <input
              type="text"
              placeholder="Email"
              className="w-full outline-none py-3 px-10 border-[4px] border-gray-200 rounded-xl"
            />
          </div>
          </div>
          <button className=" py-2 px-3 mt-7 rounded-[8px] text-white bg-pink-500">
            Secondary
          </button>
        </div>
        
        {/* right */}
        <div className="flex items-center justify-center mt-25 md:mt-32 order-1 md:order-2 ">
          <img src="Banner.png" alt="" className="size-[88%]"/>
        </div>
      </div>
    </>
  );
};
