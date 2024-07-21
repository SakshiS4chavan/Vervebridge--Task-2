import React from 'react';
import Slider from 'react-slick';
import MenuItem from './MenuItem';

const MultipleItem = ({ items }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    dots: true,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <MenuItem key={index} menuItem={item} />
      ))}
    </Slider>
  );
};

export default MultipleItem;
