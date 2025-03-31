import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export const Login = () => {

  const location = useLocation(); //me
  const navigate = useNavigate(); //me
  const from = location.state?.from?.pathname || "/"; //me

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-1-bglv.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("Login Successfully");
          toast.success("Login Successfully");
          
          navigate(from, { replace: true }); //me

          document.getElementById("my_model_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          // alert("Error: "+ err.response.data.message);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

  return (
    <dialog
      id="my_model_3"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg px-6 py-6 w-100 dark:bg-slate-900 dark:text-white border-[1px] border-gray-500"
    >
      <form onSubmit={handleSubmit(onSubmit)} method="">
        <div className="flex justify-between ">
          <h3 className="text-xl font-bold">Login</h3>
          <Link
            to="/"
            className=""
            onClick={() => document.getElementById("my_model_3").close()}
          >
            ❌
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <h1 className="text-left">Email</h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-70 border-[1px] border-gray-500 rounded-md px-3 py-1"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <div className=" flex flex-col mt-10 gap-2">
          <h1 className="text-left">Password</h1>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-70 border-[1px] border-gray-500 rounded-md px-3 py-1"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex mt-5 px-10 justify-between">
          <button className="bg-pink-500 text-white py-1 px-3 rounded-md cursor-pointer hover:bg-pink-700 duration-200">
            Login
          </button>
          <div className="flex flex-col sm:flex-row text-center items-center ">
            <p>Not registered?</p>
            <Link to="/signup" className="text-blue-500 underline">
              Signup
            </Link>
          </div>
        </div>
      </form>
    </dialog>
  );
};
