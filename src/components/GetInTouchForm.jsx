import React, { useState } from "react";

const GetInTouchForm = () => {
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const userTypes = ["Client", "Partner", "Investor", "Job Applier", "Media"];

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      setFormData({ name: "", email: "", title: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
      <div className="bg-black py-10 pt-[130px] px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw]">
        {/* Gradient line */}
        <div className="w-full h-2 bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400"></div>

        {/* Heading */}
        <h2 className="text-white text-3xl font-bold mt-6 md:mt-30">
          Get in touch below
        </h2>
      </div>

      <div className="bg-black text-white py-12 px-4 sm:px-6 md:px-10 lg:px-[5vw] xl:px-[8vw] 2xl:px-[10vw]">
        {/* User Type Selection */}
        <div className="flex flex-wrap px-6 md:px-16 space-x-6 md:space-x-20 mb-8">
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
                className={`w-4 h-4 border-2 border-white rounded-full flex items-center justify-center transition-all ${
                  selectedType === type.toLowerCase()
                    ? "bg-gray-500"
                    : "bg-black"
                }`}
              >
                {selectedType === type.toLowerCase() && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span
                className={`text-base md:text-lg font-bold transition-all ${
                  selectedType === type.toLowerCase()
                    ? "text-[#f2b44b]"
                    : "text-white"
                } hover:text-[#f2b44b]`}
              >
                {type.toUpperCase()}
              </span>
            </label>
          ))}
        </div>

        {/* Form */}
        <form
          className="max-w-full px-6 md:px-16 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6 md:space-y-8">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name*"
                className="w-full p-3 md:p-4 text-base md:text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                className="w-full p-3 md:p-4 text-base md:text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title of message*"
                className="w-full p-3 md:p-4 text-base md:text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of message*"
                className="w-full p-3 md:p-4 text-base md:text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message*"
                rows="3"
                className="w-full p-3 md:p-4 text-base md:text-lg text-gray-800 bg-white rounded-lg focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-[#f2b44b] w-full md:w-[460px] hover:bg-gray-900 hover:text-[#f2b44b] text-white text-base md:text-lg font-bold py-3 px-12 rounded-xl transition-all"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetInTouchForm;
