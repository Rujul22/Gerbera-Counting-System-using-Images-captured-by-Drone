import React from "react";
import GroupImage from "./Group.jpg";
import Anjali from "./A.jpg";
import Mitali from "./profile.png";
import Rujul from "./r.jpg";
import Rakhi from "./r1.jpg";

const AboutUS = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white p-8 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-8" style={{ padding: '4px' }}>
        <div className="flex items-center justify-center">
          <img
            src={GroupImage}
            alt="Group Image"
            className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1
            className="text-4xl font-bold mb-6 text-center text-green-600"
          >
            About Us!
          </h1>

          <p className="text-gray-700 mb-4 text-lg">
            Welcome to our Gerbera Flower Counting System, a groundbreaking
            project that harnesses the power of drones, computer vision, and
            image processing to revolutionize flower counting in the field of
            floriculture.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Our system automates the process of counting Gerbera flowers using
            drones equipped with cameras, offering unparalleled accuracy and
            efficiency. By eliminating labor-intensive manual counting
            methods, we aim to streamline production management for
            floriculturists and enhance overall productivity.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            With our innovative solution, growers can achieve precise,
            real-time flower counting, significantly reducing manual labor and
            potential errors. This not only saves time and resources but also
            provides growers with valuable insights for better production
            planning and management. Join us in ushering in a new era of
            floriculture, where advanced technology meets the beauty of nature
            to optimize efficiency and sustainability in flower cultivation.
          </p>
        </div>
      </div>
      <div className="mt-8 bg-gray-100 rounded p-4 shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <TeamMember imgSrc={Anjali} name="Anjali Bhawari" description="Anjali is passionate about Coding and developement." />
          <TeamMember imgSrc={Rujul} name="Rujul Modi" description="Rujul possess skills in data Collection and  Preprocessing." />
          <TeamMember imgSrc={Mitali} name="Mitali Bafna" description="Mitali having hands on python and Video Editing ." />
          <TeamMember imgSrc={Rakhi} name="Rakhi Bhagwat" description="Rakhi having good knowledge of Machine Learning And Algorithms" />
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({ imgSrc, name, description }) => {
  return (
    <div className="flex flex-col items-center bg-green-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imgSrc}
        alt={name}
        className="w-32 h-32 rounded-full mb-4 object-cover"
        style={{ maxWidth: "100%" }}
      />
      <p className="text-center font-semibold text-lg mb-2">{name}</p>
      <p className="text-center text-gray-700">{description}</p>
    </div>
  );
};

export default AboutUS;
