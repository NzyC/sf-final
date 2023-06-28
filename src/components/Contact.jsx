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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Get in touch, <span className="underline decoration-[#98F5E1]/50">I'd love to talk!
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#98F5E1] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">
              <a href="tel:+61434477075">+(61) 434 477 075</a>
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#98F5E1] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">
              <a href="mailto:nidal.chowdhury1@gmail.com">
                nidal.chowdhury1@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#98F5E1] h-7 w-7 animate-pulse" />
            <p className="text-2xl ">Sydney, Australia</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
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
            className="bg-[#98F5E1] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
