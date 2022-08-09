import React from "react";
import chatapp from "../assets/portfolio/chatapp.JPG";
import mess from "../assets/portfolio/mess.JPG";
import multiuser from "../assets/portfolio/MultiUser.JPG";
import ros from "../assets/portfolio/ros.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatapp,
      demo: "https://simple--chat--app.herokuapp.com/",
      code: "https://github.com/SunirbanRanjit/JsChatApp",
    },
    {
      id: 2,
      src: mess,
      demo: "https://mess-management-system-demo.herokuapp.com/",
      code: "https://github.com/SunirbanRanjit/Mess_management_system",
    },
    {
      id: 3,
      src: multiuser,
      demo: "https://multi-login-node.herokuapp.com/",
      code: "https://github.com/SunirbanRanjit/MultiUserLogin",
    },
    {
      id: 4,
      src: ros,
      demo: "https://github.com/SunirbanRanjit/Path_coverage_ros",
      code: "https://github.com/SunirbanRanjit/Path_coverage_ros",
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
