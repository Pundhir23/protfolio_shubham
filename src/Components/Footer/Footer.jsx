import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nnglm3o", // ✅ Your actual EmailJS Service ID
        "template_6l2bvgc", // ✅ Your actual Template ID
        form.current,
        {
          publicKey: "wkg4z6kQbf8mlHczU", // ✅ Your actual Public Key
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED to send email:", error);
          alert("Error: " + JSON.stringify(error));
          setMessage("Failed to send message. Try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div id="Footer" className="min-h-screen p-10 md:p-16 bg-gradient-to-br from-black to-gray-800 text-white">
      <h2 className="text-2xl md:text-2xl font-bold text-center mb-4">
        Have a question or want to collaborate?
      </h2>
      <p className="text-center mb-10 text-gray-300">
        Feel free to drop me a message! I'll get back to you as soon as possible.
      </p>

      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
          className="w-full bg-transparent border-b border-white py-2 px-3 outline-none placeholder:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter E-Mail"
          required
          className="w-full bg-transparent border-b border-white py-2 px-3 outline-none placeholder:text-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full bg-transparent border-b border-white py-2 px-3 outline-none placeholder:text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          Submit
        </button>

        {message && (
          <p className="text-center text-green-400 mt-2">{message}</p>
        )}
      </form>

      {/* Contact Links */}
      <div className="mt-16 text-sm md:text-lg flex flex-col items-center gap-3">
        <div className="flex gap-2 items-center mr-6">
          <MdOutlineEmail size={20} />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pundhirshubham5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-cyan-400"
          >
            Gmail
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-cyan-400"
          >
            Linkedin
          </a>
        </div>
        <div className="flex gap-2 items-center mr-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/Pundhir23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
