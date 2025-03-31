import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-1-bglv.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("Signup Successfully");
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          // alert("Error: "+ err.response.data.message);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="w-screen h-screen dark:bg-slate-900 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg px-6 py-6 w-100 dark:bg-slate-900 dark:text-white border-[1px] border-gray-500">
            <div className="flex justify-between ">
              <h3 className="text-xl font-bold">Signup</h3>
              <Link to="/" className="">
                ❌
              </Link>
            </div>
            <div className="flex flex-col gap-7 mt-5">
              <div className="flex flex-col gap-2">
                <h1>Name</h1>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-70 border-[1px] border-gray-500 rounded-md px-3 py-1"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h1>Email</h1>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-70 border-[1px] border-gray-500 rounded-md px-3 py-1"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className=" flex flex-col gap-2">
                <h1>Password</h1>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-70 border-[1px] border-gray-500 rounded-md px-3 py-1"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex mt-5 px-10 justify-between">
              <button className="bg-pink-500 text-white py-1 px-3 rounded-md cursor-pointer hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <div className="flex text-center items-center">
                <p>Have account?</p>
                <button
                  className="text-blue-700 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_model_3").showModal()
                  }
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
        <Login />
      </div>
    </>
  );
};
