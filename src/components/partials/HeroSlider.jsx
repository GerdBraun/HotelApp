import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

// Import images
import Img1 from "../../assets/img/heroSlider/1.jpg";
import Img2 from "../../assets/img/heroSlider/2.jpg";
import Img3 from "../../assets/img/heroSlider/3.jpg";
import { Link } from "react-router-dom";

const slides = [
  { title: "Luxury Hotel", bg: Img1, btnText: "Contact" },
  { title: "Luxury Hotel", bg: Img2, btnText: "Contact" },
  { title: "Luxury Hotel", bg: Img3, btnText: "Contact" },
];

function HeroSlider() {
  return (
    <Swiper
      className="heroSlider h-[600px] lg:h-[860px]"
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 3000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <div className="flex flex-col gap-[3rem] items-center justify-end h-[70%]">
              <h2 className="text-black text-[3.2rem]">{slide.title}</h2>
              <Link to="/contact" className="btn btn-warning w-[10rem]">
                {slide.btnText}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
