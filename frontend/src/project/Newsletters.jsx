import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 bg-gray-100">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-800">
            Empower growers with improved production planning and insights by minimizing manual labor and errors in floriculture.
          </h1>
          <p className="text-gray-800">
            Book a demo and start exploring now!
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              className="p-3 flex w-full rounded-md text-black bg-gray-100"
              type="email"
              placeholder="Enter your Number"
            />
            <button className="text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3" style={{ backgroundColor: '#4CAF50'}}>
              Book a Trial
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-2">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-white underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
