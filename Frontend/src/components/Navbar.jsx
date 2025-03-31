import { IoIosSearch } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { useAuth } from "../context/AuthProvider";

export const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightChange, setIsLightChange] = useState(false);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`w-full h-[8vh]  items-center justify-center px-2 hidden md:flex fixed top-0 left-0 right-0 z-50 dark:bg-slate-900 dark:text-white ${
          sticky
            ? "sticky-navbar shadow-md bg-gray-100 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="lg:w-[90vw] w-full justify-between flex">
          <div className="flex items-center">
            <h1 className="text-xl lg:text-3xl font-semibold">Book Store</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-7">
              <li className="cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="cursor-pointer">
                <a href="/courses">Course</a>
              </li>
              <li className="cursor-pointer">
                <a href="/contact">Contact</a>
              </li>
              <li className="cursor-pointer">About</li>
            </ul>
            <div className=" bg-gray-100 rounded-2xl flex ml-8 mr-4 items-center relative">
              <input
                type="text"
                className=" py-2 px-5 w-50 rounded-2xl border-[1px] border-gray-400 outline-none dark:bg-slate-900 dark:text-white"
                placeholder="search"
              />
              <IoIosSearch className=" absolute right-2" />
            </div>
            <p onClick={() => setIsLightChange(!isLightChange)}>
              {isLightChange ? (
                <FiMoon
                  className="text-2xl"
                  onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                />
              ) : (
                <IoSunnyOutline
                  className="text-2xl"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                />
              )}
            </p>
            {authUser ? (
              <Logout />
            ) : (
              <button
                className="bg-black text-white px-4 py-1 rounded-xl ml-2 lg:ml-12 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_model_3").showModal()
                }
              >
                Login
              </button>
            )}
          </div>
        </div>
      </section>
      <Login />
      {/* for mobile */}

      <div
        className={`flex px-2 justify-between items-center w-full h-[8vh] md:hidden fixed top-0 left-0 right-0 z-50 dark:bg-slate-900 dark:text-white ${
          sticky
            ? "sticky-navbar shadow-md duration-300 bg-gray-200 transition-all ease-in-out"
            : "bg-white"
        }`}
      >
        <h1 className="text-3xl">Book Store</h1>
        <div className="flex items-center gap-4">
          {authUser ? (
            <Logout />
          ) : (
            <button
              className="bg-black text-white px-4 py-1 rounded-md cursor-pointer"
              onClick={() => document.getElementById("my_model_3").showModal()}
            >
              Login
            </button>
          )}

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX className="size-8" />
            ) : (
              <HiMenu className="size-8" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-[8vh] w-full h-[20vh] shadow-2xl z-50 bg-white flex justify-center dark:bg-slate-900 dark:text-white  right-0 left-0">
            <div className="flex flex-col items-center mt-5 gap-8">
              <div className="flex">
                <ul className="flex gap-12">
                  <li className="cursor-pointer">
                    <a href="/">Home</a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="/courses">Course</a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="cursor-pointer">About</li>
                </ul>
              </div>
              <div className="flex items-center justify-between  w-full">
                <div className=" bg-gray-100 flex mr-4 items-center relative rounded-2xl">
                  <input
                    type="text"
                    className=" py-2 px-5 w-50 rounded-2xl border-[1px] border-gray-400 dark:bg-slate-900 dark:text-white"
                    placeholder="search"
                  />
                  <IoIosSearch className=" absolute right-2" />
                </div>
                <div className="">
                  <p onClick={() => setIsLightChange(!isLightChange)}>
                    {isLightChange ? (
                      <FiMoon
                        className="text-2xl"
                        onClick={() =>
                          setTheme(theme == "dark" ? "light" : "dark")
                        }
                      />
                    ) : (
                      <IoSunnyOutline
                        className="text-2xl"
                        onClick={() =>
                          setTheme(theme === "light" ? "dark" : "light")
                        }
                      />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
