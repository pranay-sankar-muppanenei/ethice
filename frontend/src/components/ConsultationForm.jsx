import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { FaPaperPlane } from "react-icons/fa6";

const ConsultationForm = () => {
  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you can integrate API call or email service
  };

  return (
    <div className="flex mb-20 mt-15 flex-col lg:flex-row font-sans bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 left-7 relative">
        <img
          src="/consult.jpg"
          alt="Consult"
          className="h-full w-[650px] rounded-l-lg lg:rounded-none"
        />
        <ContactCard />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#0D3E3E] text-white p-5 flex items-center justify-between">
          <h2 className="text-lg font-medium">
            <span className="text-green-300 font-bold">E</span>xecor{" "}
            Schedule a Free Consultation
          </h2>
         
          <FaPaperPlane className="text-2xl"/>
        </div>

        {/* Reusable Form */}
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default ConsultationForm;
