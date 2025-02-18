import Slider from "react-slick";

const CustomCarousel = ({ items, settings, customClass }) =>
{
  return (
    <Slider
      {...settings}
    >
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt={item.title} />
        </div>
      ))}
    </Slider>
  );
};

export default CustomCarousel;