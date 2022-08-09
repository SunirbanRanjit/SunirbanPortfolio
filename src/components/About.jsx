import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I provide services like web development.
        I have more than 1+ years of experience as MERN Full Stack Developer.
        Have worked various projects, I know how to build a product from scratch to deployment following all the Industrial Standards.

        
        </p>

        <br />

        <p className="text-xl">
        Tech enthusiast, love to explore new tech fields, learn things, and a good self-learner. 
Looking forward to an opportunity for working in a dynamic, 
challenging environment, where I can utilize my skills for developing my career and for the growth of the organization.
        </p>
      </div>
    </div>
  );
};

export default About;
