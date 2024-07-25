import React from "react";
import { useSelector } from "react-redux";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const galleryItems = useSelector((state) => state.gallery);
  const videoItems = [
    {
      id: "school_tour",
      type: "video",
      src: "https://www.youtube.com/embed/O2rXO391AJ0?si=S0ysZje_-iS6kUKe",
      description: "Virtual tour of Springdale Public School.",
    },
    {
      id: "annual_function",
      type: "video",
      src: "https://www.youtube.com/embed/WSATloSoXwc?si=zgckaxlTq1XKE8kg",
      description: "Highlights from the Annual Function 2023.",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold text-red-900 my-4 underline ">
        Gallery
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </section>
      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-red-900 my-4 underline ">
          Videos
        </h2>

        {videoItems.map((video) => (
          <div className="video-container my-10">
            <p className="my-10 text-xl font-semibold">{video.description}</p>
            <iframe
              className="w-full"
              height="400"
              src={video.src}
              title={video.description}
              // frameborder="0"
              allow="  autoplay; "
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
