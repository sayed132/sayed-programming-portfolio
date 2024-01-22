const AboutMe = () => {
  return (
    <div id="about" className="w-full px-8">
      <div className="w-full flex flex-col items-center justify-center my-12 mx-auto">
        <img className="w-44 " src="what-ido.svg" alt="" />
        <h2 className="py-5 lg:text-5xl text-3xl font-bold tracking-widest">
          LET ME INTRODUCE MYSELF
        </h2>
      </div>
      <div>
        <div className="lg:text-start lg:px-80 py-5 mx-auto">
          <h1 className="text-xl font-bold uppercase tracking-widest">
            My name is Abu sayed. I am from Bangladesh
          </h1>
          <p className="tracking-widest mt-2 font-semibold">
            I am an expert web developer. I can transform a website's design and
            pixel perfect development. I have good experience in back-end
            development. And I am also an expert on Front-end. I always try to
            build my work for the user interface.
          </p>
          <p></p>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-black">Programming Corse</div>
              Complete Web Development Course With Jhankar Mahbub (Batch-6)
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2005-2024</time>
              <div className="text-lg font-black">EDUCATION</div>
              <p>
                {" "}
                Master's Degree (Islamic Studies and Arabic) AL-Jamiya Islamia
                Mahmudia 2015-2024
              </p>
              <p>
                Hifzul Quran (Islamic Studies and Arabic) Dharmadi Faizul Ulom
                Islamia Madrasha 2011-2014
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic"></time>
              <div className="text-lg font-black">My Address</div>
              7no. word, 6no. Jagua Union, <br /> Kotowali Thana, Barisal Sadar,{" "}
              <br /> Barisal, Dhaka, Bangladesh
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic"></time>
              <div className="text-lg font-black">Email & Phone</div>
              <p>rafsansayed132@gmail.com</p>
              <p>+880 1824543819</p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
