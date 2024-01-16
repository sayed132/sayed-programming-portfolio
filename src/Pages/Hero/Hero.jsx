import { Link } from "react-router-dom";
import PrimaryButton from "../../Hooks/PrimaryButton";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-r bg-white flex min-h-[700px]  w-full items-center justify-center px-8">
      <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
          <div className="uppercase h-24 lg:text-3xl sm:text-2xl text-lg font-bold leading-tight text-gray-900">
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                `Hi, I'am Abu Sayed.`,
                1000,
                `I'm a jr. front-end (MERN) web developer.`,
                1000,
                `I have basic knowledge of back-end web development.`,
                1000,
                `If You Want me please contact me.`,
                1000,
              ]}
              speed={30} // Custom Speed from 1-99 - Default Speed: 40
              // style={{ fontSize: "2em", color: "black", fontWeight: "bold"}}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </div>
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">
            Mern Stack Web Developer.
          </h2>
          <p className="lg:text-lg sm:text-base text-sm text-gray-600">
            Be a good man and be a great programmer.
          </p>
          <div className="flex space-x-4 items-center">
            <Link to={"/portfolio"}>
              <button className="flex items-center relative w-48 border-2 border-sky-500 text-sky-500 p-3 rounded-lg group">
                <span className="text-sm">See The Latest Work</span>
                <span className="absolute w-1/12 right-3 group-hover:w-11/12 box-content duration-300 flex justify-center bg-white rounded-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="#0ea5e9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Link>

            <Link
              target="_blank"
              to={
                "https://drive.google.com/file/d/1Q8SsL6378B7juRC_5S29SUbXEKHRgvyC/view?usp=sharing"
              }
            >
              <button className="bg-sky-700 rounded-md text-white  before:bg-purple-600 before:content-['Download'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Resume'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-36 h-12 relative group"></button>
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Trusted by <span className="text-violet-700 font-bold">4+</span>{" "}
            Clients
          </p>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/5sXTH99/IMG-1609.jpg"
            className="relative md:h-[600px]  sm:h-[500px] h-[300px]   w-[350px] bg-gray-400 rounded-b-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
