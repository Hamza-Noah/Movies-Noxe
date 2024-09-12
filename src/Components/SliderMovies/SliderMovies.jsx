import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SliderMovies({movies}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container">
        <Slider {...settings} >
        {movies?.map((movie, i) =>{
          return <div key={i}>
           <img  className="w-100" src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="" />
          </div>
        })}
        </Slider>
      </div>
    </>
  );
}
