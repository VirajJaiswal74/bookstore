import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

export const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      })
      localStorage.removeItem("Users")
      toast.success("Logout successfully")
    //   document.getElementById("my_model_3").close();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
        toast.error("Error: "+ error.message)
        setTimeout(()=>{},2000)
    }
  };
  return (
    <>
      <div>
        <button
          className="px-3 py-2 ml-2 bg-red-500 text-white rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};
