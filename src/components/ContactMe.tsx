import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=From: ${formData.name}\n\n${formData.message}\n\n${formData.email}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

      <div className="flex flex-col space-y-10 mt-36">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need. <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Talk</span>
        </h4>
      </div>

      <div className="space-y-10">
        {/* <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">+123456789</p>
        </div> */}

        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">{pageInfo.email}</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl">{pageInfo.address}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
        <div className="flex space-x-2">
          <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
          <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
        </div>

        <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" name="" id="" />

        <textarea {...register("message")} placeholder="Message" className="contactInput" />
        <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
