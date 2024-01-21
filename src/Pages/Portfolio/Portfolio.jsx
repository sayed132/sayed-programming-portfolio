import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  //   useEffect(() => {
  //     fetch("../../Data/Services.json")
  //     .then((res) => res.json())
  //     .then(data => console.log(data, 'kk'))
  //   }, []);

  useEffect(() => {
    fetch("/Data/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);
  return (
    <div id="portfolio" className="w-full px-8">
      <div className="w-full flex flex-col items-center justify-center lg:my-28 my-12 mx-auto">
        <img className=" " src="work3.png" alt="" />
        <h2 className="py-5 lg:text-5xl text-3xl font-bold tracking-widest">
          Here Is My Work Sample
        </h2>
      </div>
      <div className="grid  gap-4 cursor-pointer  grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {portfolio.map((item) => (
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
              <h6 className="text-md md:text-lg text-wrap">{item?.title}</h6>
              <p className="text-xs md:text-md text-wrap">
                {item?.desc.slice(0, 100)}
                {item.desc.length > 100 && "..."}
              </p>
            </div>
            <div className="mt-5">
              <Link className="uppercase" to={`/project/${item.id}`}>
                <button className="bg-orange-500 uppercase font-semibold px-3 py-1.5 rounded-md">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
