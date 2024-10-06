import React from "react";
import img1 from "../../public/Images/img1.avif";
import img2 from "../../public/Images/img2.avif";
import img3 from "../../public/Images/img3.avif";
import Photo1 from "../../public/Images/photo1.jpeg";
import Photo2 from "../../public/Images/photo2.jpeg";
import Photo3 from "../../public/Images/photo3.jpeg";
import { Bounce, Zoom, Slide, Fade, Roll } from "react-awesome-reveal";
import "./Blog.css";
import Blogtwo from "../Componants/Blogtwo";
const CardsData = [
  {
    id: 1,
    img: img2,
    title: "Artificial Intelligence",
    desc: "Exploring the impact of AI on the tech industry and its future potential.",
  },
  {
    id: 2,
    img: img3,
    title: "Blockchain",
    desc: "How blockchain is transforming secure data handling and cryptocurrencies.",
  },
  {
    id: 3,
    img: img1,
    title: "Cloud Computing",
    desc: "The role of cloud computing in modern IT infrastructure and its benefits.",
  },
];

const BlogCards = () => {
  return (
    <>
      <div className="relative w-full lg:h-[45vw] overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full bg-animation z-0"></div>

        <div className="relative container mx-auto px-4 py-20 z-10">
          <h1 className="text-center font-bold text-4xl mb-14 text-gray-800">
            Explore IT Company Blog
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {CardsData.map(({ id, img, title, desc }) => {
              let Animation;
              let cardStyle = "hover:rotate-3";

              if (id === 1) {
                Animation = Bounce;
                cardStyle = "hover:rotate-3";
              } else if (id === 2) {
                Animation = Zoom;
                cardStyle = "hover:scale-105";
              } else if (id === 3) {
                Animation = Slide;
                cardStyle = "hover:rotate-6";
              } else {
                Animation = Fade;
                cardStyle = "hover:-rotate-6";
              }

              return (
                <Animation key={id} triggerOnce>
                  <div
                    className={`group text-white shadow-lg rounded-lg overflow-hidden relative transition-transform duration-500 ${cardStyle}`}
                  >
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-80 object-cover rounded-lg"
                    />

                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center items-center text-center">
                      <h2 className="text-2xl font-bold mb-2">{title}</h2>
                      <p className="text-lg font-medium">{desc}</p>
                    </div>
                  </div>
                </Animation>
              );
            })}
          </div>
        </div>
      </div>

      <Blogtwo />
    </>
  );
};

export default BlogCards;
