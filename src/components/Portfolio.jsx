import React from "react";
import food from "../assets/portfolio/food.png";
import weather from "../assets/portfolio/weather.jpg";
import wonderlust from "../assets/portfolio/wonderlust.png";
import todo from "../assets/portfolio/todo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: food,
      link: "https://food-delivery-frontend-s2l9.onrender.com/",
      repo: "https://github.com/SagarKharat94440/Food-App",
      title: "Food Delivery App",
    },
    {
      id: 2,
      src: wonderlust,
      link: "https://wonderlust-5h3n.onrender.com/listings",
      repo: "https://github.com/SagarKharat94440/wonderlust",
      title: "Travel Agency Website",
    },
    {
      id: 3,
      src: weather,
      link: "https://weather-app-cpm6.onrender.com/",
      repo: "https://github.com/SagarKharat94440/Weather-app",
      title: "Weather App",
    },
    {
      id: 4,
      src: todo,
      link: "https://seequenze-technologies-assignment-ashen.vercel.app/",
      repo: "https://github.com/SagarKharat94440/TODO_List",
      title: "To-Do List App",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`${title} Screenshot`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <h3 className="text-center text-lg font-semibold mt-2">{title}</h3>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white bg-blue-500 rounded-md"
                  onClick={() => window.open(link, "_blank")}
                  aria-label={`View live demo of ${title}`}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white bg-gray-700 rounded-md"
                  onClick={() => window.open(repo, "_blank")}
                  aria-label={`View GitHub repository for ${title}`}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
