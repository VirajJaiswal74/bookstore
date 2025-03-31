export const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 px-3 dark:bg-slate-900 dark:text-white">
        <div className=" w-full shadow-xl pb-8 rounded-xl  hover:scale-105 duration-200  border-[1px] border-gray-200">
          <img src={item.image} alt="" className="rounded-xl"/>
          <div className="mx-7 flex flex-col gap-2 mt-6">
            <h2 className="flex gap-2">
              <div className="font-bold">{item.name}</div>
              <div className="bg-pink-500 text-white px-3  rounded-full">{item.category}</div>
            </h2>
            <p className=" w-[70%]">{item.title}</p>
            <div className="flex justify-between">
              <div className="border-[1px] px-2 rounded-full">${item.price}</div>
              <div className="hover:bg-pink-500 hover:text-white duration-200 border-[1px] px-2 rounded-full">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


