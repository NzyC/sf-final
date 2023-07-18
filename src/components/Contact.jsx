import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (formData) => {
    window.location.href = `mailto:nidal.chowdhury1@gmail.com?subject=${formData.subject}&body=Hey,%0D%0Amy name is ${formData.name}.%0D%0A${formData.message}`
  }
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="pl-[20px] absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-1xl font-semibold text-center text-gray-500">
          Get in touch, <span className="underline decoration-[#023020]/50">I'd love to talk!
          </span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#023020] h-4 w-4 animate-pulse" />
            <p className="text-1xl text-gray-500">
              <a href="tel:+61434477075">+(61) 434 477 075</a>
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#023020] h-4 w-4 animate-pulse" />
            <p className="text-1xl text-gray-500">
              <a href="mailto:nidal.chowdhury1@gmail.com">
                nidal.chowdhury1@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#023020] h-4 w-4 animate-pulse" />
            <p className="text-1xl text-gray-500">Sydney, Australia</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col space-y-2 w-fit mx-auto hidden md:flex"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#023020] py-5 px-10 rounded-md text-[white] font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
