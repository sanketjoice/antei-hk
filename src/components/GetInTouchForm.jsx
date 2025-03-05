import React, { useState } from "react";

const GetInTouchForm = () => {
  const [selectedType, setSelectedType] = useState("partner");

  const userTypes = ["Client", "Partner", "Investor", "Job Applier", "Media"];

  return (
    <>
      <div className="bg-black py-10 pt-[130px] px-40">
        {/* Gradient line */}
        <div className="w-full h-2 bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400"></div>

        {/* Heading */}
        <h2 className="text-white text-3xl font-bold mt-30">
          Get in touch below
        </h2>
      </div>
      <div className="bg-black text-white py-12 px-6 md:px-24">
        {/* User Type Selection */}
        <div className="flex px-16 space-x-20 mb-8">
          {userTypes.map((type) => (
            <label key={type} className="flex space-x-2 cursor-pointer">
              <input
                type="radio"
                name="userType"
                value={type.toLowerCase()}
                checked={selectedType === type.toLowerCase()}
                onChange={() => setSelectedType(type.toLowerCase())}
                className="hidden"
              />
              <div
                className={`w-4 h-4 border-2 border-white rounded-full flex items-center justify-center ${
                  selectedType === type.toLowerCase() ? "bg-gray" : "bg-white"
                }`}
              >
                {selectedType === type.toLowerCase() && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span
                className={`text-lg font-bold ${
                  selectedType === type.toLowerCase()
                    ? "text-orange-400"
                    : "text-white"
                }`}
              >
                {type.toUpperCase()}
              </span>
            </label>
          ))}
        </div>

        {/* Form */}
        <form className="max-w-full px-16 mx-auto">
          <div className="space-y-8">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full p-4 text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full p-4 text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Title of message*"
              className="w-full p-4 text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject of message*"
              className="w-full p-4 text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
            />
            <textarea
              placeholder="Message*"
              rows="2"
              className="w-full p-4 text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-[#f2b44b] w-[460px] hover:bg-gray-900 hover:text-[#f2b44b] text-white text-lg font-bold py-3 px-12 rounded-xl">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetInTouchForm;
