import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4eoauua', 'template_cz1d8yv', form.current, 'tqEptLerTk16XvB3J')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div
      id="contact"
      className="w-full mx-auto mt-32 rounded-md lg:w-[1100px] shadow-lg bg-white flex group text-[#0095ff]"
    >
      <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
        <h1 className="text-white text-2xl absolute top-[45%] left-[22%] ">
          Hey! <br /> Contact Me For Your Project
        </h1>
        <span className="bg-sky-800/20 w-32 h-32 -top-8 -left-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
        <span className="bg-sky-800/50 w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span>
      </div>
      <form className="p-8 flex-1" ref={form} onSubmit={sendEmail}>
        <h1 className="text-4xl pb-4">Contact Me</h1>
        <div className="space-y-5">
          <label className="block">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="user_name"
            placeholder="type your name"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"
          />
          <label className="block">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="example@example.com"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"
          />
          <label  className="block">
            Your Message
          </label>
          <textarea
          name="message"
            className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#0095ff]"
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        {/* button type will be submit for handling form submission*/}
        <button
          type="submit"
          className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
