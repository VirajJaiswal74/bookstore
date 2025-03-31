import { useEffect, useState } from "react";
// import list from "../../public/list.json";
import { Cards } from "../../src/components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

export const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="pt-28 text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus nulla excepturi deleniti reprehenderit, modi tempora
            repudiandae, a magni ipsam voluptates rerum! Consequatur aliquam
            doloribus, nemo aperiam, mollitia itaque eum accusamus qui aliquid
            quasi iure beatae neque fugit. Magnam, cupiditate quod. Expedita,
            earum praesentium! Ducimus dolor placeat amet, autem deserunt ipsum
            cupiditate?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
