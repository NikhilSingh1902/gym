import React from "react";

const Gallery = () => {
  const gallery = [
    "/img3.jpg",
    "/img5.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img4.jfif",
    "/img6.jfif",
    "/img7.jfif",
    "/img8.jpeg",
  ];
  return (
   <section className="gallery">
      <h1>BEST PICTURES</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  )
};

export default Gallery;
