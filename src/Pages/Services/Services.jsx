import { useEffect, useState } from "react";

const Services = () => {
  const [whatIDo, setWhatIDo] = useState([]);

  //   useEffect(() => {
  //     fetch("../../Data/Services.json")
  //     .then((res) => res.json())
  //     .then(data => console.log(data, 'kk'))
  //   }, []);

  useEffect(() => {
    fetch("/Data/Services.json")
      .then((res) => res.json())
      .then((data) => setWhatIDo(data));
  }, []);
  return (
    <div className="w-full px-8">
      <div className="w-full flex flex-col items-center justify-center my-12 mx-auto">
        <img className="w-44 " src="what-ido.svg" alt="" />
        <h2 className="py-5 lg:text-5xl text-3xl font-bold tracking-widest">
          What Can I Do?
        </h2>
      </div>
      <div className="grid  gap-4 cursor-pointer  grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {whatIDo.map((item) => (
          <div
            key={item.id}
            className="p-4 shadow-2xl bg-[#0B1120]  font-sans rounded-xl transition-transform hover:scale-105"
          >
            <div className="flex justify-center w-full h-32 md:h-48">
              <img
                className="rounded-lg bg-black/40 w-full h-full"
                src={item?.img}
                alt="img"
              />
            </div>
            <div className="text-start  mx-auto lg:font-semibold mt-2">
              <h6 className="text-xs md:text-lg text-wrap">{item?.name}</h6>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Services;
