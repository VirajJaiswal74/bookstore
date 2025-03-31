import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import {Course} from "../components/Course" 

export const Courses = ()=>{
    return(
        <>
        <Navbar/>
        <div className="min-h-screen">
        <Course/>
        </div>
        <Footer/>
        </>
    )
}