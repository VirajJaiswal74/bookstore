import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () =>{
    return(
        <>
        <hr className="text-gray-300"/>
        <section className="w-full  flex flex-col  items-center gap-8 py-10 dark:bg-slate-900 dark:text-white">
            <div className="">
                <ul className="flex gap-4">
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Jobs</li>
                    <li>Press kit</li>
                </ul>
            </div>
            <div className="flex gap-4 text-xl">
            <FaTwitter />
            <FaYoutube />
            <FaFacebookF />
            </div>
            <p>Copywrite I am a Owner</p>
        </section>
        </>
    )
}