import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projectDetails from "../../../Data/portfolio.json";

const PortfolioDetail = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const { id } = useParams();
  const item = projectDetails.find((item) => item.id === parseInt(id));
  console.log(item, "okay mama");
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === item.images.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" px-8 shadow-lg bg-[#0B1120] m-5">
      <div className="grid grid-cols-7 gap-5 lg:mx-8 p-5 items-center">
        <div className="col-span-full lg:col-span-2 text-justify">
          <div className="mb-3">
            <h2 className="font-bold text-xl">Project Name</h2>
            <h3 className="font-bold text-xl text-blue-600">{item?.title}</h3>
          </div>
          <div >
            <h2 className="font-bold text-lg">Description</h2>
            <p className="font-bold text-sm mb-3 mt-1">{item?.desc}</p>
            <h2 className="font-bold text-lg">Technologies Used</h2>
            <p className="font-bold text-sm mb-3 mt-1">{item?.tech}</p>
            <h2 className="font-bold text-lg">Time Period</h2>
            <p className="font-bold text-sm mb-3 mt-1 text-green-600">{item?.time}</p>
            <h2 className="font-bold text-lg">Links</h2>
            <p className="font-bold text-sm mb-3 mt-1">
              <Link to={item?.live} target="_blank" className="pr-3 cursor-pointer hover:text-blue-700 duration-700">Live Link</Link>
              <Link className="cursor-pointer hover:text-blue-700 duration-700" to={item?.git} target="_blank">GitHub Link</Link>
            </p>
          </div>
        </div>

        <div className="col-span-full lg:col-span-5">
          <div className="flex flex-row-reverse justify-between">
            {/* slider container */}
            <div className="flex flex-col justify-center items-center gap-3 p-2">
              {/* sliders */}
              {item.images.map((slide, inx) => (
                <img
                  onClick={() => setCurrentSlider(inx)}
                  key={inx}
                  src={slide.url}
                  className={`w-10 md:w-20 h-6 sm:h-8 md:h-12  ${
                    currentSlider === inx ? " p-px" : ""
                  } rounded-md md:rounded-lg box-content cursor-pointer`}
                  alt=""
                />
              ))}
            </div>
            <div
              className="w-full h-72 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 rounded-lg  transform duration-1000 ease-linear"
              // style={{ backgroundImage: `url(${item.images[currentSlider].url})`}}
            >
              <img
                className="transform duration-1000 ease-linear w-full h-full rounded-md"
                src={item.images[currentSlider].url}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
